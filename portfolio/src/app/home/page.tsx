import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
import hero from '../images/home-right.png'
import Button1 from '../components/Button1'
import Button2 from '../components/Button2'


function Main() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.content}>
          <h2>
            HELLO <span>_______________</span>
          </h2>
          <h1>I AM WALEED MEHMOOD</h1>
          <p>A WEBSITE DEVELOPER</p>
          <div className={styles.buttons}> 
         <Button1 text="Hire Me"/>
         <Button2 text="Get Cv"/>
        </div>
        </div>
        
        <div className={styles.image}>
          <Image src={hero} alt=""></Image>
        </div>
        
      </div>
    </>
  );
}

export default Main;
