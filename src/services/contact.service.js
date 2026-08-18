import { supabase } from "@/libs/supabase";

const BUCKET = "files_privated";
const FOLDER = "documents";

const uploadFile = async (file, contactId) => {
    const extension = file.name.split(".").pop()?.toLowerCase();
    const filename = `${crypto.randomUUID()}.${extension}`;

    const path = `${FOLDER}/${contactId}/${filename}`;

    const { error } = await supabase.storage
        .from(BUCKET)
        .upload(path, file, {
            cacheControl: "3600",
            upsert: false,
        });

    if (error) {
        throw error;
    }

    return path;
};


/**
 * Crea una solicitud de contacto.
 */
export const createContact = async ({ name, company, email, phone, request, message, files = [] }) => {

    // Generamos un ID para utilizarlo también en Storage
    const contactId = crypto.randomUUID();

    const uploadedFiles = [];

    try {

        // ---------------------------------------------------------------
        // Upload files
        // ---------------------------------------------------------------

        for (const file of files) {

            if (!(file instanceof File)) {
                continue;
            }

            const path = await uploadFile(file, contactId);

            uploadedFiles.push(path);
        }


        // ---------------------------------------------------------------
        // Insert contact
        // ---------------------------------------------------------------

        const { data, error } = await supabase
            .from("contacts")
            .insert({
                name,
                company: company || null,
                email,
                phone,
                request_type: request,
                message,
                files: uploadedFiles,
            })


        if (error) {
            throw error;
        }


        return {
            data,
            error: null,
        };

    } catch (error) {

        if (uploadedFiles.length > 0) {
            await supabase.storage
                .from(BUCKET)
                .remove(uploadedFiles);
        }

        return {
            data: null,
            error,
        };
    }
};