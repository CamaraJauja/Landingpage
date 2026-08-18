import { supabase } from "@/libs/supabase";

export const getCommunityAll = async () => {
    try {
        
        const { data, error } = await supabase
            .from('socios')
            .select(`
                id,
                codigo_socio,
                nombre_comercial,
                logo,
                active
            `)
            .eq('active', true)
        
        if (error) throw new Error(error || "Error en el servicio");
        
        return data;

    } catch (error) {
        console.error(error);
    }
}