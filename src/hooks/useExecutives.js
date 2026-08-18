import { getExecutivesAll } from "@/services/executives.service";
import { useState } from "react"

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
    
    return {
        data: executives,
        loading,
        getExecutives
    }

}