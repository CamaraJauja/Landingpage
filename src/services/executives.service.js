import { supabase } from "@/libs/supabase";

export const getExecutivesAll = async () => {
    try {
        
        const { data, error } = await supabase
            .from('executives')
            .select('*')
            .order('order', { ascending: true })

        if (error) throw new Error(error.message || "Hubo un error en el servicio");
        
        return data;

    } catch (error) {
        console.error(error);
    }
}