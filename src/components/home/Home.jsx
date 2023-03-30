import styles from "./home.module.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className={`home ${styles.home}`}>
      <img src="https://i.postimg.cc/G2rvjwCz/home.jpg" alt="home" />

      <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(2500).deleteAll().start();
          }}
          options={{
            strings: ["Front-end Web Developer","UX/UI Designer", "BackEnd Knowloedge" ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      <ul>
        <li>
          <span>{"Age"}:</span> 37
        </li>
        <li>
          <span>{"address"}:</span> {"Barva, Heredia"}
        </li>
      </ul>
    </div>
  );
};

export default Home;
