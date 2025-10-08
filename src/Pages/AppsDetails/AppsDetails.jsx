import Container from "../../components/Container/Container";
import iconDownloadDetails from '../../assets/icon-downloads-details.png';
import iconRating from '../../assets/icon-ratings.png';
import iconReview from '../../assets/icon-review.png';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import useLoadapps from "../../Hooks/useLoadapps";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router";
import { useState } from "react";

const AppsDetails = () => {
    const {loading, apps, error} = useLoadapps();
    const {id} = useParams();

    const app = apps.find(app => app.id === parseInt(id));

    if(loading) return <div className="py-10 md:py-20"><Loading /></div>

    const {title, description, companyName, image, downloads, size, reviews, ratings, ratingAvg} = app;

    return (
        
        <div className="apps-details-area py-10 md:py-20 bg-[#f5f5f5]">
            <Container>
                <div className="apps-inner">
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
                            <button className="cursor-pointer bg-[#00D390] text-white rounded-sm text-lg font-semibold py-3 px-4">
                                Install Now ({size} MB)
                            </button>
                        </div>
                    </div>
                    <div className="apps-rating w-full h-[450px] border-t border-b border-[#00193133] mt-10 pt-10 pb-22">
                        <h5 className="text-[#001931] font-bold text-2xl mb-6">Ratings</h5>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart layout="vertical" data={ratings} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                <XAxis axisLine={false} tickLine={false} type="number" />
                                <YAxis axisLine={false} tickLine={false} dataKey="name" type="category" tick={{ fontSize: 18 }} width={60}/>
                                <Tooltip />
                                <Bar dataKey="count" fill="#FF8811" barSize={32} isAnimationActive={true} animationBegin={300} animationDuration={1200} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="apps-bottom mt-10">
                        <h5 className="text-[#001931] font-bold text-2xl mb-6">Description</h5>
                        <p className="text-lg/relaxed text-[#627382]">{description}</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AppsDetails;