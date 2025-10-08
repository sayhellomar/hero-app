import { useEffect, useState } from "react";

const useLoadapps = () => {
    const [loading, setLoading] = useState(true);
    const [apps, setApps] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApps = async () => {
            try {
                const response = await fetch('../appData.json');
                const result = await response.json();
                setApps(result);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchApps();
    }, []);

    return { loading, apps, error };
};

export default useLoadapps;