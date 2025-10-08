import AppCard from "../../components/AppCard/AppCard";
import Container from "../../components/Container/Container";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { CiSearch } from "react-icons/ci";

const Apps = () => {
    return (
        <div className="apps-area py-10 md:py-20 bg-[#f5f5f5]">
            <Container>
                <div className="apps-inner">
                    <SectionHeading title="Our All Applications" description="Explore All Apps on the Market developed by us. We code for Millions" />
                    <div className="flex flex-col md:flex-row justify-between items-center mb-4 mt-10">
                        <p className="text-[#001931] text-2xl font-semibold mb-2 md:mb-0">
                            (132) Apps Found
                        </p>
                        <label className="input text-[#627382] bg-[#f5f5f5]">
                            <CiSearch className="w-5 h-5" />
                            <input type="search" required placeholder="Search Apps" />
                        </label>
                    </div>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                        <AppCard />
                        <AppCard />
                        <AppCard />
                        <AppCard />
                        <AppCard />
                        <AppCard />
                        <AppCard />
                        <AppCard />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Apps;