import { Link } from 'react-router';
import iconDownload from '../../assets/icon-downloads.png';
import iconStar from '../../assets/icon-ratings.png';

const AppCard = () => {
    return (
        <Link to={`/app/1`}>
            <div className="bg-white p-4 shadow-sm rounded-lg">
                <img className="rounded-lg max-w-[316px] max-h-[316px] object-cover mx-auto" src="https://i.ibb.co.com/BH0hXwnc/taskflow.png" alt="" />
                <h4 className="text-[#001931] text-xl font-medium my-4">Forest: Focus for Productivity</h4>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-[#F1F5E8] text-[#00D390] text-base font-medium rounded-sm py-1.5 px-2.5">
                        <img className='w-4 h-4' src={iconDownload} alt="Download Icon" />
                        <span>9M</span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#FFF0E1] text-[#FF8811] text-base font-medium rounded-sm py-1.5 px-2.5">
                        <img className='w-4 h-4' src={iconStar} alt="Icon Star" />
                        <span>5</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;