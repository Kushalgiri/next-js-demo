import Banner from "@/component/banner/Banner";
import Features from "@/component/features/Features";
import Footer from "@/component/footer/Footer";
import NavBar from "@/component/navbar/navbar";
import Projects from "@/component/products/Products";
import Video from "@/component/video/Video";
import Fade from "@/component/fade/Fade"


const LandingPage = () => {
    return (
      <>
        {/* <NavBar /> */}
        <NavBar />
        <Banner />
        <Fade />
        <Video src={"/videobg.mp4"} />
        <Features />
        <Projects />
        <Footer />
      </>
    );
}

export default LandingPage