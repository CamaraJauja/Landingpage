import { getCommunityAll } from "@/services/community.service";
import { useEffect, useMemo, useState } from "react"

export const useCommunity = () => {

    const [ community, setCommunity ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const getCommunitys = async () => {
        try {
            const data = await getCommunityAll();
            setCommunity(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const load = async () => {
            if (community.length > 0) return;
            getCommunitys();
        }
        load();
    }, [])

    return {
        data: community,
        loading,
        getCommunitys
    }

}