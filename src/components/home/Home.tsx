import 'react-dropdown/style.css';
import './home.scss';
import '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';

import { Col, Container, Row } from 'react-grid-system';
import ImageGallery from 'react-image-gallery';
import ReactPlayer from 'react-player';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import email from '../../assets/email-png.png';
import news from '../../assets/me-news.png';
import logo from '../../assets/me.jpg'; // Tell webpack this JS file uses this image
import logo10 from '../../assets/me10.jpg'; // Tell webpack this JS file uses this image
import logo2 from '../../assets/me2.jpg'; // Tell webpack this JS file uses this image
import logo3 from '../../assets/me3.jpg'; // Tell webpack this JS file uses this image
import logo4 from '../../assets/me4.jpg'; // Tell webpack this JS file uses this image
import logo5 from '../../assets/me5.jpg'; // Tell webpack this JS file uses this image
import logo6 from '../../assets/me6.jpg'; // Tell webpack this JS file uses this image
import logo7 from '../../assets/me7.jpg'; // Tell webpack this JS file uses this image
import logo8 from '../../assets/me8.jpg'; // Tell webpack this JS file uses this image
import logo9 from '../../assets/me9.jpg'; // Tell webpack this JS file uses this image

const images = [
  {
    original: logo,
    thumbnail: logo,
  },
  {
    original: logo2,
    thumbnail: logo2,
  },
  {
    original: logo3,
    thumbnail: logo3,
  },
  {
    original: logo4,
    thumbnail: logo4,
  },
  {
    original: logo5,
    thumbnail: logo5,
  },
  {
    original: logo6,
    thumbnail: logo6,
  },
  {
    original: logo7,
    thumbnail: logo7,
  },
  {
    original: logo8,
    thumbnail: logo8,
  },
  {
    original: logo9,
    thumbnail: logo9,
  },
  {
    original: logo10,
    thumbnail: logo10,
  },
];

function goToInsta() {
  window.location.href = "https://www.instagram.com/jalexkeys/?hl=en";
}

export default function Home() {
  return (
    <Container className="home-container">
      <Row>
        <Col className="left-container home-bottom-margin" md={4}>
          <div className="mt-50 mb-20">
            {/* <h1 className="home-left-header">News</h1> */}
            <img alt="NEWS" className="home-news" src={news}></img>
          </div>
          <small>
            <i>09/29/2022</i>
          </small>
          <div className="home-latest-news mt-10">
            <p className="home-latest-news-text">
              Playing at 6935 N Sheridan Rd, Chicago IL, 60626
            </p>
          </div>

          <small>
            <i>08/13/2021</i>
          </small>
          <div className="home-latest-news mt-10">
            <p className="home-latest-news-text">
              Currently seeking gigs in Rock, RnB, Funk, Blues, Jazz -{" "}
              <b> Chicago and beyond.</b>
            </p>
          </div>

          <div className="mt-20"></div>

          <small>
            <i>08/13/2020</i>
          </small>
          <div className="home-latest-news mt-10">
            <p className="home-latest-news-text">
              Looking for music for your commerical or video game?{" "}
            </p>
            <img
              alt="jafritzel@gmail.com"
              className="home-email"
              src={email}
            ></img>
          </div>
          <div className="home-space"></div>
        </Col>
        <Col className="profile-container" md={4}>
          <ImageGallery showThumbnails={false} items={images} />;
        </Col>
        <Col className="video-container" md={4}>
          <ReactPlayer
            width={"100%"}
            url="https://www.youtube.com/watch?v=TOY6GlLX984"
          />

          <div className="space"></div>

          <div className="second-video">
            <ReactPlayer
              width={"100%"}
              url="https://youtube.com/shorts/Tauiq6zKEF0?feature=share"
            />
          </div>

          <div className="space"></div>
        </Col>
      </Row>

      <Row>
        <div className="piano-row">
          <h3>I am a composer for films, video games, and commericals</h3>
        </div>
      </Row>

      <Row>
        <div onClick={() => goToInsta()} className="footer-bottom">
          <h3
            style={{ marginRight: 5, cursor: "pointer" }}
            className="header-text"
          >
            FOLLOW ME ON INSTAGRAM
          </h3>
          <FontAwesomeIcon
            className="fa-instagram bottom-insta-icon"
            icon={faInstagram}
          />
        </div>
      </Row>
    </Container>
  );
}
