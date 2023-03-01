import Banner from "@/component/banner/Banner";
import Features from "@/component/features/Features";
import Footer from "@/component/footer/Footer";
import NavBar from "@/component/NavBar";
import Projects from "@/component/products/Products";


const LandingPage = () => {
    return (
        <>
            <NavBar />
            <Banner/>
            <Features/>
            <Projects/>
            <Footer/>
        </>
    );
}

export default LandingPage