import Container from "../Container/Container";
import googlePlayIcon from '../../assets/google-play.png';
import appStoreIcon from '../../assets/app-store.png';
import BannerImg from '../../assets/hero.png';

const Banner = () => {
    return (
        <section className="banner-area pt-20 bg-[#f5f5f5]">
            <div className="max-w-[992px] mx-auto">
                <div className="banner-inner text-center">
                    <h2 className="text-7xl leading-[84px] text-[#001931] font-bold">We Build</h2>
                    <h2 className="text-7xl leading-[84px] text-[#001931] font-bold"><span>Productive Apps</span></h2>
                    <p className="mt-4 mb-10 text-[#627382] px-2 md:px-20">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                        <a href="https://play.google.com/store/apps?hl=en" target="_blank" className="text-[#001931] text-xl py-3 px-6 flex border border-[#D2D2D2] rounded-sm gap-[10px] font-semibold">
                            <img src={googlePlayIcon} alt="Google Play" />
                            Google Play
                        </a>
                        <a href="https://www.apple.com/app-store/" target="_blank" className="text-[#001931] text-xl py-3 px-6 flex border border-[#D2D2D2] rounded-sm gap-[10px] font-semibold">
                            <img src={appStoreIcon} alt="App Store" />
                            App Store
                        </a>
                    </div>
                    <img className="mt-10 px-16" src={BannerImg} alt="Mobile Image with icons" />
                </div>
            </div>
        </section>
    );
};

export default Banner;