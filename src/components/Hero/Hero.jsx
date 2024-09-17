import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Jonathan's Portfolio</h1>
        <p className={styles.description}>I'm currently studying for a Bachelors
          for Computer Science at the University of Illinois at Chicago.</p>
      </div>
      <a href="mailto:jjonkang555@gmail.com" className={styles.contactBtn}>Contact Me</a>
      <div className={styles.topBlue}/>
      <div className={styles.bottomBlur}/>
    </section>
  );
};
