import { Outlet, useLocation } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";

const Root = () => {
    const [isLoading, setIsLoading] = useState(true);
    const url = useLocation();
    
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [url.pathname]);

    return (
        <>
            <Header />
            <main>
                {
                    isLoading
                    ?
                    <div className="flex items-center justify-center h-screen bg-white">
                        <Loading />
                    </div>
                    :
                    <Outlet />
                }
                
            </main>
            <Footer />
        </>
    );
};

export default Root;