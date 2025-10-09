const SectionHeading = ({title, description}) => {
    return (
        <div className="text-center">
            <h2 className="font-bold text-3xl md:text-5xl text-[#001931] mb-4">{title}</h2>
            <p className="text-[#627382] text-lg md:text-xl">{description}</p>
        </div>
    );
};

export default SectionHeading;