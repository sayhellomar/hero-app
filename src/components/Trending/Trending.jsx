import AppCard from "../AppCard/AppCard";
import Container from "../Container/Container";
import SectionHeading from "../SectionHeading/SectionHeading";

const Trending = () => {
    return (
        <section className="trending-area bg-[#f5f5f5] py-20">
            <Container>
                <div className="trending-inner">
                    <SectionHeading title="Trusted by Millions, Built for You" description="Explore All Trending Apps on the Market developed by us" />
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mb-10">
                        <AppCard />
                        <AppCard />
                        <AppCard />
                        <AppCard />
                        <AppCard />
                        <AppCard />
                        <AppCard />
                        <AppCard />
                    </div>
                    <a href="https://github.com/sayhellomar" target="_blank" className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] py-3 px-10 text-base font-semibold text-white rounded-sm block mx-auto w-max">
                        Show All
                    </a>
                </div>
            </Container>
        </section>
    );
};

export default Trending;