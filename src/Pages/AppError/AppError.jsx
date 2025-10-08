import Container from "../../components/Container/Container";
import appErrorImage from '../../assets/App-Error.png';
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { Link } from "react-router";

const AppError = () => {
    return (
        <>
            <section className='error-404-area bg-[#f5f5f5] py-10 md:py-20 grid place-content-center'>
                <Container>
                    <div className="error-inner">
                        <img className="mx-auto my-20" src={appErrorImage} alt="App Error" />
                        <SectionHeading title="OPPS!! APP NOT FOUND" description="The App you are requesting is not found on our system.  please try another apps" />
                        <Link to='/' className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] py-3.5 px-10 text-base font-semibold text-white rounded-sm w-max block mx-auto mt-4">
                            Go Back!
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default AppError;