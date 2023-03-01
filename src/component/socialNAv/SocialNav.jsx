import React from 'react'
import Link from 'next/link'
import styles from "@/styles/SocialNav.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faFacebook, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons";

const SocialNav = () => {
  return (
    <div class={styles.iconBar}>
      <Link href="#" id='fa' class={styles.facebook}>
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
      <Link href="#" id="tw" class={styles.linkedin}>
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
      <Link href="#" id='go' class={styles.whatsapp}>
        <FontAwesomeIcon icon={faWhatsapp} />
      </Link>
    </div>
  );
}

export default SocialNav