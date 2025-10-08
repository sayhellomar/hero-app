import Container from "../../components/Container/Container";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import AppCardFull from "../../components/AppCardFull/AppCardFull";

const Installation = () => {
    return (
        <div className="apps-area py-10 md:py-20 bg-[#f5f5f5]">
            <Container>
                <div className="apps-inner">
                    <SectionHeading title="Your Installed Apps" description="Explore All Trending Apps on the Market developed by us" />
                    <div className="flex flex-col md:flex-row justify-between items-center mt-10">
                        <p className="text-[#001931] text-2xl font-semibold mb-2 md:mb-0">
                            2 App(s) Found
                        </p>
                        <select defaultValue="Sort By Size" className="select bg-[#f5f5f5] w-max">
                            <option disabled={true}>Sort By Size</option>
                            <option>High -&gt; Low</option>
                            <option>Low -&gt; High</option>
                        </select>
                    </div>
                    <div>
                        <AppCardFull />
                        <AppCardFull />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Installation;