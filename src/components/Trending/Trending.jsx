import { Link } from "react-router";
import useLoadapps from "../../Hooks/useLoadapps";
import AppCard from "../AppCard/AppCard";
import Container from "../Container/Container";
import Loading from "../Loading/Loading";
import SectionHeading from "../SectionHeading/SectionHeading";

const Trending = () => {

    const {loading, apps} = useLoadapps();
    const trendingApps = apps.slice(0, 8);

    return (
        <section className="trending-area bg-[#f5f5f5] py-20">
            <Container>
                <div className="trending-inner">
                    <SectionHeading title="Trusted by Millions, Built for You" description="Explore All Trending Apps on the Market developed by us" />
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 my-10">
                        {
                            loading 
                            ?
                            <Loading />
                            :
                            trendingApps.map(trendingApp => <AppCard key={trendingApp.id} app={trendingApp} />)
                        }
                    
                    </div>
                    <Link to="/apps" className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] py-3 px-10 text-base font-semibold text-white rounded-sm block mx-auto w-max">
                        Show All
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default Trending;