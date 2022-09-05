import 'react-dropdown/style.css';
import './about.scss';

import background from '../../assets/forest-me.jpg'; // Tell webpack this JS file uses this image
import me2 from '../../assets/me2.jpg'; // Tell webpack this JS file uses this image
import me3 from '../../assets/me3.jpg'; // Tell webpack this JS file uses this image

const styles = {
  header: {
    backgroundImage: `url(${background})`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  content: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, .7)",
  },
};

export default function About() {
  return (
    <div style={styles.header}>
      <div style={styles.content}>
        <div className="about-container">
          <div className="about-bio">
            <h1 className="about-header">BIOGRAPHY</h1>
            <h3 className="about-margin">
              I started playing piano at the age of 6. I've studied all of the
              great keyboardists, Stevie Wonder <br />
              Billy Preston, Donald Fagan, and more. My father is a Jazz
              keyboardist and at an early age I began improvising and playing
              keyboards. I am also a singer and play and sing a range of 70s to
              Modern Pop solo on the piano.
            </h3>

            <h3 className="about-margin">
              Lately, I've been working songs recorded entirely with keyboards
              (See below) -- If you need music for your movie, commerical, or
              business, contact me! I have over 15 years of experience producing
              and have created well over 200 songs.
            </h3>

            {/* <div className="about-imgs">
              <img className="about-img-1" src={me2}></img>
              <img className="about-img-2" src={me3}></img>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
