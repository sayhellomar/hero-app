import { ToastContainer } from 'react-toastify';
import iconDownloadDetails from '../../assets/icon-downloads-details.png';
import iconRating from '../../assets/icon-ratings.png';
import iconReview from '../../assets/icon-review.png';


const AppsDetailsTop = ({topDetails}) => {
    const {title, companyName, image, downloads, size, reviews, ratingAvg, handleSetInstalled, installed} = topDetails;

    return (
        <div className="apps-top flex flex-col md:flex-row gap-6 lg:gap-10 items-center">
            <img className="max-w-[350px] max-h-[350px] rounded-sm" src={image} alt={title} />
            <div className="flex-1">
                <h3 className="text-[32px] text-[#001931] font-bold">{title}</h3>
                <p className="text-[#627382] text-xl mt-2">Developed by <span className="hero-gradient-text font-semibold">{companyName}</span></p>
                <div className="border-t border-[#00193133] mt-[30px] pt-[30px] mb-[30px] flex gap-3 lg:gap-16 justify-between md:justify-normal">
                    <div className="space-y-2">
                        <img src={iconDownloadDetails} alt="Download Icon" />
                        <p className="text-[#001931]/80 text-base mb-0">Downloads</p>
                        <h2 className="text-[#001931] font-extrabold text-[40px]">{downloads/10000000}M</h2>
                    </div>
                    <div className="space-y-2">
                        <img src={iconRating} alt="Rating Icon" />
                        <p className="text-[#001931]/80 text-base mb-0">Average Ratings</p>
                        <h2 className="text-[#001931] font-extrabold text-[40px]">{ratingAvg}</h2>
                    </div>
                    <div className="space-y-2">
                        <img src={iconReview} alt="Review Icon" />
                        <p className="text-[#001931]/80 text-base mb-0">Total Reviews</p>
                        <h2 className="text-[#001931] font-extrabold text-[40px]">{reviews/1000}K</h2>
                    </div>
                </div>
                <button disabled={installed ? 'disabled' : ''} onClick={handleSetInstalled} className="cursor-pointer bg-[#00D390] text-white rounded-sm text-lg font-semibold py-3 px-4">
                    {installed ? 'Installed' : 'Install Now'} ({size} MB)
                </button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AppsDetailsTop;