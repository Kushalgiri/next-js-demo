import Link from "next/link";
import React, { useState } from "react";
import styles from "@/styles/HamburgerMenu.module.css";

const Sidebar = () => {

     const NavData = [
       {
         id: "1",
         name: "HOme",
         path: "/",
       },
       {
         id: "2",
         name: "Services",
         path: "/services",
         subData: [
           {
             id: "1",
             name: "service1",
             path: "/service",
           },
           {
             id: "1",
             name: "service1",
             path: "/service",
           },
           {
             id: "1",
             name: "service1",
             path: "/service",
           },
         ],
       },
       {
         id: "3",
         name: "Company",
         path: "/company",
       },
       {
         id: "4",
         name: "ABout",
         path: "/about",
       },
     ];

  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  const handelClick=()=>{
setShowSubMenu(!showSubMenu);

  }

  return (
    <div className="sidebar">
      <button className={styles.hamburger} onClick={handleToggle}>
        <span className={styles.hamburgerBox}>
          <span className={styles.hamburgerInner}></span>
        </span>
      </button>


         <nav className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
      <ul>
        {NavData.map((item, index) => {
          return (
            <li onClick={() => handelClick()}>
              {!item?.subData && <Link href={item.path}>{item.name}</Link>}

              {item?.subData && (
                <>
                  <p>
                    {item.name} {showSubMenu ? "P" : "d"}
                  </p>
                  <div className={styles.inList}>
                    {showSubMenu &&
                      item?.subData &&
                      item?.subData.map((list, idx) => (
                        <Link href={list.path}>{list.name}</Link>
                      ))}
                  </div>
                </>
              )}
            </li>
          );
        })}

        {/* <li>
          <a href="#">Menu Item 2</a>
          <button onClick={toggleSubMenu}>Toggle Submenu</button>
          {showSubMenu && (
            <ul className="submenu">
              <li>
                <a href="#">Submenu Item 1</a>
              </li>
              <li>
                <a href="#">Submenu Item 2</a>
              </li>
              <li>
                <a href="#">Submenu Item 3</a>
              </li>
            </ul>
          )}
        </li> */}
      </ul>

      </nav>
    </div>
  );
};

export default Sidebar;
