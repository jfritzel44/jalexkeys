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
            <div className="about-margin">
              One of the greatest challenges as an artist is to get your music
              out there <br />
              <p>I created this website to showcase myself.</p>
              <p>
                I mostly create songs entirely with keyboards; drums, bass,
                traditional keyboard parts, and more. I also sing.
              </p>
              <p>
                I have been playing piano since I was a kid and have many
                heroes; Stevie Wonder, Elton John, Billy Preston, Dr. John, Joey
                Defrancesco, Chuck Leavell, and more.
              </p>
              <p>
                I have been composing original music since I was 16 and have
                started (hopefully, one day, all will be finished) at least
                1,000 songs!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
