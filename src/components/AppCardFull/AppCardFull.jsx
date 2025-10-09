import { Link } from 'react-router';
import iconDownload from '../../assets/icon-downloads.png';
import iconStar from '../../assets/icon-ratings.png';

const AppCardFull = ({app, handleUninstall}) => {
    const {id, title, image, downloads, ratingAvg, size} = app;
    return (
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0 justify-between p-4 bg-white rounded-sm mt-4">
            <div className="flex items-center gap-4">
                <Link to={`/app/${id}`}>
                    <img className="w-20 h-20 object-cover rounded-lg" src={image} alt={title} />
                </Link>
                <div>
                    <h4 className="font-medium text-xl text-[#001931] mb-2">
                        <Link to={`/app/${id}`}>{title}</Link>
                    </h4>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-0.5 text-[#00D390] text-base font-medium">
                            <img className='w-4 h-4' src={iconDownload} alt="Download Icon" />
                            <span>{downloads/10000000}M</span>
                        </div>
                        <div className="flex items-center gap-0.5 text-[#FF8811] text-base font-medium">
                            <img className='w-4 h-4' src={iconStar} alt="Icon Star" />
                            <span>{ratingAvg}</span>
                        </div>
                        <p className="text-base text-[#627382]">{size} MB</p>
                    </div>
                </div>
            </div>
            <button onClick={() => handleUninstall(app)} className="cursor-pointer bg-[#00D390] text-white rounded-sm text-base font-semibold py-3 px-4 self-end md:self-center">
                Uninstall
            </button>
        </div>
    );
};

export default AppCardFull;