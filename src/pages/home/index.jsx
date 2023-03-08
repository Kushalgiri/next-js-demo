import Banner from "@/component/banner/Banner";
import Features from "@/component/features/Features";
import Footer from "@/component/footer/Footer";
import NavBar from "@/component/NavBar";
import Projects from "@/component/products/Products";
import Video from "@/component/video/Video";


const LandingPage = () => {
    return (
      <>
        <NavBar />
        <Banner />
        <Video src={"/videobg.mp4"} />
        <Features />
        <Projects />
        <Footer />
      </>
    );
}

export default LandingPage