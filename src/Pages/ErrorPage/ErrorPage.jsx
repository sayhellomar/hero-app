import Container from "../../components/Container/Container";
import errorImage from '../../assets/error-404.png';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <>
            <Header />
            <section className='error-404-area bg-[#f5f5f5] py-10 md:py-20 grid place-content-center'>
                <Container>
                    <div className="error-inner">
                        <img className="mx-auto my-20" src={errorImage} alt="Error 404" />
                        <SectionHeading title="Oops, page not found!" description="The page you are looking for is not available." />
                        <Link to='/' className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] py-3.5 px-10 text-base font-semibold text-white rounded-sm w-max block mx-auto mt-4">
                            Go Back!
                        </Link>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default ErrorPage;