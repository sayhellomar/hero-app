const Container = ({children}) => {
    return (
        <div className="max-w-[1440px] mx-auto px-4 lg:px-6 2xl:px-0">
            {children}
        </div>
    );
};

export default Container;