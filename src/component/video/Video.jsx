import React from 'react'
// import bgVd from "@/assets/videobg.mp4";
// import vgVid from "../../assets/videobg.mp4";

const Video = ({src}) => {
    // console.log(bgVd);
  return (
    <div>
      <video loop  autoPlay muted>
        <source src={"/videobg.mp4"} />
      </video>
      
    </div>
  );
}

export default Video