import Image from "next/image";

import sneakersImg from "../../public/images/image-sneakers-3d.png";

import styles from "./about.module.scss";

const About = () => {
  return (
    <main id="main" className="container">
      <div className={styles.about}>
        <h1 className={styles.titile}>About Us</h1>
        <div className={styles.text}>
          <p>We are local sneaker enthusiasts.</p>
          <p>We love shoes.</p>
          <p className={styles.accent}>That&apos;s it.</p>
        </div>
        <div className={styles.img}>
          <Image src={sneakersImg} alt="sneakers 3d" />
        </div>
      </div>
    </main>
  );
};
export default About;

//Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
