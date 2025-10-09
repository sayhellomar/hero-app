import Container from "../../components/Container/Container";
import useLoadapps from "../../Hooks/useLoadapps";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import AppsDetailsTop from "./AppsDetailsTop";
import AppDetailsRating from "./AppDetailsRating";
import AppDetailsBottom from "./AppDetailsBottom";
import { addToLS, getFromLS } from "../../Utilities/localStorage";

const AppsDetails = () => {
    const [installed, setInstalled] = useState(false);
    const {loading, apps} = useLoadapps();
    const {id} = useParams();

    const app = apps.find(app => app.id === parseInt(id));

    useEffect(() => {
        const getExistingApps = getFromLS();
        if(getExistingApps.includes(id)) {
            setInstalled(true);
        }
    }, []);

    if(loading) return <div className="py-10 md:py-20"><Loading /></div>

    const {id:appId, title, description, companyName, image, downloads, size, reviews, ratings, ratingAvg} = app;

    const handleSetInstalled = () => {
        setInstalled(true);
        addToLS(id);
    }


    return (
        
        <div className="apps-details-area py-10 md:py-20 bg-[#f5f5f5]">
            <Container>
                <div className="apps-inner">
                    <AppsDetailsTop topDetails={{title, companyName, image, downloads, size, reviews, ratingAvg, handleSetInstalled, installed}} />
                    <AppDetailsRating ratings={ratings} />
                    <AppDetailsBottom description={description} />
                </div>
            </Container>
        </div>
    );
};

export default AppsDetails;