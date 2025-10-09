import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const AppDetailsRating = ({ratings}) => {
    return (
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
    );
};

export default AppDetailsRating;