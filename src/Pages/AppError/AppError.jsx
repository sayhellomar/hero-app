import Container from "../../components/Container/Container";
import appErrorImage from '../../assets/App-Error.png';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const AppError = () => {
    return (
        <>
            <Header />
            <section className='error-404-area bg-[#f5f5f5] py-10 md:py-20 grid place-content-center'>
                <Container>
                    <div className="error-inner">
                        <img className="mx-auto my-20" src={appErrorImage} alt="App Error" />
                        <SectionHeading title="OPPS!! APP NOT FOUND" description="The App you are requesting is not found on our system.  please try another apps" />
                        <a className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] py-3.5 px-10 text-base font-semibold text-white rounded-sm w-max block mx-auto mt-4">
                            Go Back!
                        </a>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default AppError;