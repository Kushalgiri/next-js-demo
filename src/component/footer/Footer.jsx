import CompanyLogo from "../../assets/images/logo.png";
import Image from "next/image";
import styles from "../../styles/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.row}>
          <div className={`${styles.footerCol} ${styles.footerLeftSection}`}>
            <Image src={CompanyLogo} className={styles.companyLogo} alt='company-logo' />
            <span>
              We work with international startups, help entrepreneurs launch for
              the long term.
            </span>
            <span className={styles.copyright}>© Omega Outsourcing</span>
          </div>
          <div className={styles.footerCol}>
            <h4>company</h4>
            <ul>
              <li>
                <a href="/">Team</a>
              </li>
              <li>
                <a href="/">History</a>
              </li>
              <li>
                <a href="/">Contact us</a>
              </li>
              <li>
                <a href="/">Locations</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>resources</h4>
            <ul>
              <li>
                <a href="/">Resource</a>
              </li>
              <li>
                <a href="/">Resource name</a>
              </li>
              <li>
                <a href="/">Another resource</a>
              </li>
              <li>
                <a href="/">Final resource</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>LEGAL</h4>
            <ul>
              <li>
                <a href="/">Privacy policy</a>
              </li>
              <li>
                <a href="/">Terms of use</a>
              </li>
            </ul>
          </div>
          <div className={`${styles.footerCol}  ${styles.socialSection}` }>
            <div className={styles.socialLinks}>
              <a href="/">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="/">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="/">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
