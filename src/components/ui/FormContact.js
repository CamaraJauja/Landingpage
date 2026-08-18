'use client'

import { page } from "@/db/page";
import { createContact } from "@/services/contact.service";
import { useState } from "react";

export default function FormContact () {

    const [ form, setForm ] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        request: '',
        message: ''
    })
    const [ files, setFiles ] = useState([]);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {

        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));

    };

    const MAX_FILE_SIZE = 5 * 1024 * 1024;

    const handleFiles = (e) => {
        const selectedFiles = Array.from(e.target.files || []);

        if (selectedFiles.length > 5) {
            setError('Puedes adjuntar un máximo de 5 archivos.');
            return;
        }

        const invalidFile = selectedFiles.find(
            (file) => file.size > MAX_FILE_SIZE
        );

        if (invalidFile) {
            setError(
                `El archivo "${invalidFile.name}" supera el límite de 5 MB.`
            );
            return;
        }

        setError('');
        setFiles(selectedFiles);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {

            const { error } = await createContact({
                ...form,
                files
            });

            if (error) {
                throw error;
            }

            setSuccess(true);

            setForm({
                name: '',
                company: '',
                email: '',
                phone: '',
                request: '',
                message: ''
            });

            setFiles([]);

            e.target.reset();

        } catch (error) {

            console.error(error);

            setError(
                'No pudimos enviar tu solicitud. Inténtalo nuevamente.'
            );

        } finally {

            setLoading(false);

        }
    }

    return (
        <form className="w-full grid grid-cols12 gap-sm p-md rounded-md border-thin bg-white" onSubmit={handleSubmit}>
            {page.contact.form.map((item) => (
                <div key={item.id} className="w-full">
                    <label className="block text-sm text-muted mb-sm">{item.label}</label>
                    {item.field === 'input' && (
                        <input type={item.type} inputMode={item.mode} value={form[item.name]} name={item.name} maxLength={item.maxlength} minLength={item.minlength} placeholder={item.placeholder} onChange={handleChange} required={item.required} />
                    )}
                    {item.field === 'select' && (
                        <select name="request" value={form.request} onChange={handleChange} required={item.required}>
                            <option value={''} hidden>{item.placeholder}</option>
                            {item.options.map((opt, idx) => (
                                <option key={idx}>{opt}</option>
                            ))}
                        </select>
                    )}
                    {item.field === 'textarea' && (
                        <textarea name="message" placeholder={item.placeholder} maxLength={item.maxlength} minLength={item.minlength} value={form.message} onChange={handleChange} required={item.required} />
                    )}
                    {item.field === 'file' && (
                        <label htmlFor="file-contact" className="center w-full h bg-background border-thin rounded-md text-sm text-muted cursor-pointer" style={{"--h": "100px"}}>
                            {files.length > 0 ? `${files.length} archivo(s) seleccionado(s)` : item.placeholder}
                            <input type="file" id="file-contact" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg" onChange={handleFiles} hidden />
                        </label>
                    )}
                </div>
            ))}
            <div className="w-full">
                <button className="btn btn-primary" disabled={loading}>{loading ? 'Enviando...' : 'Enviar solicitud'}</button>
            </div>
        </form>
    )
}