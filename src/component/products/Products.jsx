import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProjectOne from "../../assets/images/project-1.jpg";
import ProjectTwo from "../../assets/images/project-2.jpg";
import styles from "../../styles/product.module.css";

const projectTypes = [
  {
    tabHeader: "Education",
    content: [
      {
        title: "Donec commodo convallis ligula",
        subTitle: "Vestibulum consequat hendrerit",
        imageSrc: ProjectOne,
        logoSrc: "asd",
      },
      {
        title: "Donec2 commodo convallis ligula",
        subTitle: "Donec2 commodo convallis ligula",
        imageSrc: ProjectOne,
        logoSrc: ProjectOne,
      },
    ],
  },
  {
    tabHeader: "Finance",
    content: [
      {
        title: "Donec commodo convallis ligula",
        subTitle: "Donec commodo convallis ligula",
        imageSrc: ProjectTwo,
        logoSrc: ProjectTwo,
      },
    ],
  },
];

function Projects() {
 
  const [active, setActive] = useState(0);
  return (
    <div className={styles.projectSection} id="projects">
      <div className={styles.projectLeftSection}>
        <h3>Projects</h3>
        <div className={styles.tabBtnGroup}>
          {projectTypes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`${styles.tabBtn} ${active === idx ? styles.active : ""}`}
            >
              {projectTypes[idx].tabHeader}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.rojectRightSection}>
        {projectTypes[active].content.map((content, idx) => (
          <div
            className={styles.imageCardSection}
            data-aos="fade-up-left"
            data-aos-duration={idx * 50}
          >
            <Image
              src={content.imageSrc}
              className={styles.sampleImage}
              alt="project-sample"
              data-aos="fade-up"
            />
            <div className={styles.dropShadowSection}>
              <div className={styles.dropShadowContent}>
                <Image src={content.imageSrc} alt="company-logo" />
                <div className={styles.textContent}>
                  <span>{content.title}</span>
                  <p>{content.subTitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
