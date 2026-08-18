import { supabase } from "@/libs/supabase";

export const getEventsAll = async () => {
    try {
        const { data, error } = await supabase
            .from('events')
            .select('*')

        if (error) throw new Error(error || "Hubo un error interno en el servicio");
        
        return data;
        
    } catch (error) {
        console.error(error);
    }
}