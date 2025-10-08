import iconDownload from '../../assets/icon-downloads.png';
import iconStar from '../../assets/icon-ratings.png';

const AppCardFull = () => {
    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-sm mt-4">
            <div className="flex items-center gap-4">
                <img className="w-20 h-20 object-cover rounded-lg" src="https://i.ibb.co.com/BH0hXwnc/taskflow.png" alt="" />
                <div>
                    <h4 className="font-medium text-xl text-[#001931] mb-2">Forest: Focus for Productivity</h4>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-0.5 text-[#00D390] text-base font-medium">
                            <img className='w-4 h-4' src={iconDownload} alt="Download Icon" />
                            <span>9M</span>
                        </div>
                        <div className="flex items-center gap-0.5 text-[#FF8811] text-base font-medium">
                            <img className='w-4 h-4' src={iconStar} alt="Icon Star" />
                            <span>5</span>
                        </div>
                        <p className="text-base text-[#627382]">258 MB</p>
                    </div>
                </div>
            </div>
            <button className="cursor-pointer bg-[#00D390] text-white rounded-sm text-base font-semibold py-3 px-4">
                Uninstall
            </button>
        </div>
    );
};

export default AppCardFull;