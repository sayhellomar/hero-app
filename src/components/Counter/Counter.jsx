import Container from "../Container/Container";
import './Counter.css';

const Counter = () => {
    return (
        <section className="counter-area py-20">
            <Container>
                <div className="counter-inner text-center">
                    <h2 className="font-bold text-5xl text-white">Trusted by Millions, Built for You</h2>
                    <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-evenly mt-10">
                        <div className="space-y-3">
                            <p className="text-[#FFFFFFe6] text-base">Total Downloads</p>
                            <h1 className="text-white font-extrabold text-[64px] leading-[72px]">29.6M</h1>
                            <p className="text-[#FFFFFFe6] text-base">21% more than last month</p>
                        </div>
                        <div className="space-y-3">
                            <p className="text-[#FFFFFFe6] text-base">Total Reviews</p>
                            <h1 className="text-white font-extrabold text-[64px] leading-[72px]">906K</h1>
                            <p className="text-[#FFFFFFe6] text-base">46% more than last month</p>
                        </div>
                        <div className="space-y-3">
                            <p className="text-[#FFFFFFe6] text-base">Active Apps</p>
                            <h1 className="text-white font-extrabold text-[64px] leading-[72px]">132+</h1>
                            <p className="text-[#FFFFFFe6] text-base">31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Counter;