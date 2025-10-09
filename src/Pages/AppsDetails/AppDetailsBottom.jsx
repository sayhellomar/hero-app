const AppDetailsBottom = ({description}) => {
    return (
        <div className="apps-bottom mt-10">
            <h5 className="text-[#001931] font-bold text-2xl mb-6">Description</h5>
            <p className="text-lg/relaxed text-[#627382]">{description}</p>
        </div>
    );
};

export default AppDetailsBottom;