import React from 'react'
import styles from "./About.module.css";
export const About = () => {
  return(
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <ul>
                <h3>Website currently under construction, will be updated constantly over September 2024</h3>
                <p>Meanwhile, here's some links about me:</p>
                <p>https://github.com/JJonKang</p>
                <p>https://www.linkedin.com/in/jonathan-kang-/</p>
            </ul>
        </div>
    </section>
  );
};
