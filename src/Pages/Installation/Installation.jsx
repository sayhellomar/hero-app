import Container from "../../components/Container/Container";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import AppCardFull from "../../components/AppCardFull/AppCardFull";
import { useEffect, useState } from "react";
import { getFromLS } from "../../Utilities/localStorage";
import useLoadapps from "../../Hooks/useLoadapps";

const Installation = () => {
    const {apps} = useLoadapps();
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const getExistingApps = getFromLS();
        const getExistingAppsID = getExistingApps.map(id => parseInt(id));
        const existingApps = apps.filter(app => getExistingAppsID.includes(app.id));
        setInstalledApps(existingApps);
    }, [apps])

    return (
        <div className="apps-area py-10 md:py-20 bg-[#f5f5f5]">
            <Container>
                <div className="apps-inner">
                    <SectionHeading title="Your Installed Apps" description="Explore All Trending Apps on the Market developed by us" />
                    <div className="flex flex-col md:flex-row justify-between items-center mt-10">
                        <p className="text-[#001931] text-2xl font-semibold mb-2 md:mb-0">
                            ({installedApps.length}) App{installedApps.length > 1 ? 's' : ''} Found
                        </p>
                        <select defaultValue="Sort By Size" className="select bg-[#f5f5f5] w-max">
                            <option disabled={true}>Sort By Size</option>
                            <option>High -&gt; Low</option>
                            <option>Low -&gt; High</option>
                        </select>
                    </div>
                    <div>
                        {
                            installedApps.map(installedApp => <AppCardFull key={installedApp.id} app={installedApp} />)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Installation;