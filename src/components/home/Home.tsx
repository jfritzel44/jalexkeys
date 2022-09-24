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
import logo2 from '../../assets/me2.jpg'; // Tell webpack this JS file uses this image
import logo3 from '../../assets/me3.jpg'; // Tell webpack this JS file uses this image
import logo4 from '../../assets/me4.jpg'; // Tell webpack this JS file uses this image
import piano from '../../assets/piano.jpg';

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
];

export default function Home() {
  return (
    <Container className="home-container">
      <Row>
        <Col className="left-container" md={4}>
          <div className="mt-20 mb-10">
            {/* <h1 className="home-left-header">News</h1> */}
            <img className="home-news" src={news}></img>
          </div>
          <small>
            <i>08/13/2021</i>
          </small>
          <div className="home-latest-news mt-10">
            <p className="home-latest-news-text">
              Currently seeking gigs in RnB, Funk, Blues, Jazz -{" "}
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
              <img className="home-email" src={email}></img>
            </p>
          </div>

          <div className="home-space"></div>

          {/* <div className="home-submit-request form-box">
            <input placeholder="Name" type="text"></input>
            <input placeholder="Email" type="text"></input>
            <button className="submit-btn">Receive Gig Updates</button>
          </div> */}
        </Col>
        <Col className="profile-container" md={4}>
          {/* <img className="me" src={logo} /> */}
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
          <h3>I am a composer for films, video games, and commericals!</h3>
        </div>
      </Row>

      <Row>
        <div className="footer-bottom">
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

{
  /* 
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1118841712%3Fsecret_token%3Ds-UyFxwj3cZNj&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe> */
}
