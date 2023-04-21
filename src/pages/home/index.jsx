import Banner from "@/component/banner/Banner";
import Features from "@/component/features/Features";
import Footer from "@/component/footer/Footer";
import NavBar from "@/component/navbar/navbar";
import Projects from "@/component/products/Products";
import Video from "@/component/video/Video";
import Fade from "@/component/fade/Fade"
import Form from "@/component/MyForm";
import SearchField from "@/component/Search";
import LocationSearchField from "@/component/Location";
import Search from "@/component/BothSearch";
import TwoOverlay from "@/component/TwoOverlay";
// import CheckForm from "@/component/CheckForm";
import MultiStepForm from "@/component/multistepForm";



const LandingPage = () => {
    return (
      <>
        {/* <NavBar /> */}
        <NavBar />
        {/* <TwoOverlay /> */}
        {/* <ScrollToTopButton/> */}

        {/* <HtrForm/> */}
        {/* <Banner /> */}
        {/* <Fade /> */}
        {/* <Video src={"/videobg.mp4"} /> */}
        {/* <SearchField />
        <LocationSearchField /> */}
        {/* <Features /> */}

        {/* <ScrollSection/> */}
        {/* <Search /> */}
{/* <CheckForm/> */}

<MultiStepForm/>
        {/* <Form/> */}
        <Projects />
        <Footer />
      </>
    );
}

export default LandingPage