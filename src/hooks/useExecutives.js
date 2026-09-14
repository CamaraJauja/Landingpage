import { getExecutivesAll } from "@/services/executives.service";
import { useEffect, useMemo, useState } from "react"

export const useExecutives = () => {

    const [ executives, setExecutives ] = useState([]);    
    const [ loading, setLoading ] = useState(true);
    
    const getExecutives = async () => {
        try {
            const data = await getExecutivesAll();
            setExecutives(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const load = async () => {
            if (executives.length > 0) return;
            await getExecutives();
        }
        load();
    }, []);
    
    return {
        executives,
        loading,
        getExecutives
    }

}