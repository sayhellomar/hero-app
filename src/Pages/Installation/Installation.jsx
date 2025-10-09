import Container from "../../components/Container/Container";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import AppCardFull from "../../components/AppCardFull/AppCardFull";
import { useEffect, useState } from "react";
import { getFromLS, removeFromLS } from "../../Utilities/localStorage";
import useLoadapps from "../../Hooks/useLoadapps";
import { toast, ToastContainer } from "react-toastify";

const Installation = () => {
    const {apps} = useLoadapps();
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const getExistingApps = getFromLS();
        const getExistingAppsID = getExistingApps.map(id => parseInt(id));
        const existingApps = apps.filter(app => getExistingAppsID.includes(app.id));
        setInstalledApps(existingApps);
    }, [apps])

    const handleUninstall = app => {
        removeFromLS(app.id);
        const remainingApps = installedApps.filter(installedApp => installedApp.id !== app.id);
        setInstalledApps(remainingApps);
        toast('App removed successfully');
    }

    const handleSortby = type => {
        if(type === 'high') {
            const appSortByHigh = [...installedApps].sort((a, b) => b.downloads - a.downloads);
            setInstalledApps(appSortByHigh);
        }

        if(type === 'low') {
            const appSortByLow = [...installedApps].sort((a, b) => a.downloads - b.downloads);
            setInstalledApps(appSortByLow);
        }
    }

    return (
        <div className="apps-area py-10 md:py-20 bg-[#f5f5f5]">
            <Container>
                <div className="apps-inner">
                    <SectionHeading title="Your Installed Apps" description="Explore All Trending Apps on the Market developed by us" />
                    <div className="flex flex-col md:flex-row justify-between items-center mt-10">
                        <p className="text-[#001931] text-2xl font-semibold mb-2 md:mb-0">
                            ({installedApps.length}) App{installedApps.length > 1 ? 's' : ''} Found
                        </p>
                        <select defaultValue="Sort By Downloads" className="select bg-[#f5f5f5] w-max mt-2 md:mt-0">
                            <option disabled={true}>Sort By Downloads</option>
                            <option onClick={() => handleSortby('high')}>High -&gt; Low</option>
                            <option onClick={() => handleSortby('low')}>Low -&gt; High</option>
                        </select>
                    </div>
                    <div>
                        {
                            installedApps.length > 0
                            ?
                            installedApps.map(installedApp => <AppCardFull 
                                key={`installed${installedApp.id}`} 
                                app={installedApp} 
                                handleUninstall={handleUninstall} />)
                            :
                            <p className="text-2xl font-semibold text-[#001931] py-10 text-center">No installed app found</p>
                        }
                    </div>
                </div>
            </Container>
            <ToastContainer />
        </div>
    );
};

export default Installation;