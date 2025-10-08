import Container from "../../components/Container/Container";
import iconDownloadDetails from '../../assets/icon-downloads-details.png';
import iconRating from '../../assets/icon-ratings.png';
import iconReview from '../../assets/icon-review.png';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "5 star", value: 12000 },
  { name: "4 star", value: 7000 },
  { name: "3 star", value: 3500 },
  { name: "2 star", value: 2500 },
  { name: "1 star", value: 1000 },
];

const AppsDetails = () => {
    return (
        <div className="apps-details-area py-10 md:py-20 bg-[#f5f5f5]">
            <Container>
                <div className="apps-inner">
                    <div className="apps-top flex flex-col md:flex-row gap-6 lg:gap-10 items-center">
                        <img className="max-w-[350px] max-h-[350px] rounded-sm" src="https://i.ibb.co.com/BH0hXwnc/taskflow.png" alt="" />
                        <div className="flex-1">
                            <h3 className="text-[32px] text-[#001931] font-bold">SmPlan:ToDo List with Reminder</h3>
                            <p className="text-[#627382] text-xl mt-2">Developed by <span className="hero-gradient-text font-semibold">productive.io</span></p>
                            <div className="border-t border-[#00193133] mt-[30px] pt-[30px] mb-[30px] flex gap-3 lg:gap-16 justify-between md:justify-normal">
                                <div className="space-y-2">
                                    <img src={iconDownloadDetails} alt="Download Icon" />
                                    <p className="text-[#001931]/80 text-base mb-0">Downloads</p>
                                    <h2 className="text-[#001931] font-extrabold text-[40px]">8M</h2>
                                </div>
                                <div className="space-y-2">
                                    <img src={iconRating} alt="Rating Icon" />
                                    <p className="text-[#001931]/80 text-base mb-0">Average Ratings</p>
                                    <h2 className="text-[#001931] font-extrabold text-[40px]">4.9</h2>
                                </div>
                                <div className="space-y-2">
                                    <img src={iconReview} alt="Review Icon" />
                                    <p className="text-[#001931]/80 text-base mb-0">Total Reviews</p>
                                    <h2 className="text-[#001931] font-extrabold text-[40px]">54K</h2>
                                </div>
                            </div>
                            <button className="cursor-pointer bg-[#00D390] text-white rounded-sm text-lg font-semibold py-3 px-4">
                                Install Now (291 MB)
                            </button>
                        </div>
                    </div>
                    <div className="apps-rating w-full h-[450px] border-t border-b border-[#00193133] mt-10 pt-10 pb-22">
                        <h5 className="text-[#001931] font-bold text-2xl mb-6">Ratings</h5>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart layout="vertical" data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                <XAxis axisLine={false} tickLine={false} type="number" />
                                <YAxis axisLine={false} tickLine={false} dataKey="name" type="category" tick={{ fontSize: 18 }} width={60}/>
                                <Tooltip />
                                <Bar dataKey="value" fill="#FF8811" barSize={32} isAnimationActive={true} animationBegin={300} animationDuration={1200} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="apps-bottom mt-10">
                        <h5 className="text-[#001931] font-bold text-2xl mb-6">Description</h5>
                        <p className="text-lg/relaxed text-[#627382]">This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AppsDetails;