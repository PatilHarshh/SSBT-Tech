import React from "react";
import img1 from "../assets/img/astronot.gif";
import img2 from "../assets/img/moon.png";
import img3 from "../assets/img/planet-uranus.png";
import img4 from "../assets/img/planet-venus.png";
import styles from "./About.module.css";
import { Link } from 'react-router-dom';

// import { getImageUrl } from "../../utils";

export default function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Community </h2>
      <div className={styles.content}>
        <img
          src={img1}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={img2}
              alt="cursor"
              style={{ width: "50%", height: "50%" }}
            />
            <div className={styles.aboutItemText}>
              <h1>Coding Events</h1>
              <p>
                Immerse yourself in cutting-edge technologies with hands-on
                Coding Events and workshops led by Domain experts.
              </p>
              <Link
                to="/events"
                className="glowing-button"
                style={{
                  background: "linear-gradient(to bottom, #4CAF50, #45A043)",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease", 
                  boxShadow: "0 0 10px rgba(76, 175, 80, 0.5)",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textDecoration: "none", 
                  marginTop: "3px",
                  
                }}
              >
                Explore more!
              </Link>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={img3}
              alt="UI icon"
              style={{ width: "50%", height: "50%" }}
            />
            <div className={styles.aboutItemText}>
              <h1>Mentorship Programs</h1>
              <p>
                Mentorship programs by domain Experts to raise to enthusiasm
                towards Technology.
              </p>
              <Link
                to="/events"
                className="glowing-button"
                style={{
                  background: "linear-gradient(to bottom, #4CAF50, #45A049)",
                  color: "white",
                  padding: "10px 10px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease", 
                  boxShadow: "0 0 10px rgba(76, 175, 80, 0.5)",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textDecoration: "none", 
                 
                  
                }}
              >
                Explore more
              </Link>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={img4}
              alt="UI icon"
              style={{ width: "50%", height: "50%" }}
            />
            <div className={styles.aboutItemText}>
              <h1>Networking</h1>
              <p>
                Connect with fellow coders, developers, and tech professionals.
                Forge new collaborations.
              </p>
              <Link
                to="/events"
                className="glowing-button"
                style={{
                  background: "linear-gradient(to bottom, #4CAF50, #45A049)",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease", 
                  boxShadow: "0 0 10px rgba(76, 175, 80, 0.5)",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textDecoration: "none", 
                  marginTop: "3px",
                  
                }}
              >
                Explore more!
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
