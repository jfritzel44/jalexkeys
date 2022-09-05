import 'react-dropdown/style.css';
import './videos.scss';

import ReactPlayer from 'react-player';

export default function Videos() {
  return (
    <div className="videos-container-main">
      <div className="videos-container">
        <ReactPlayer
          width={"100%"}
          url="https://youtube.com/shorts/Tauiq6zKEF0?feature=share"
        />
        <ReactPlayer
          width={"100%"}
          url="https://youtube.com/shorts/1_nHeH8i-uQ?feature=share"
        />
        <ReactPlayer width={"100%"} url="https://youtu.be/TOY6GlLX984" />
        <ReactPlayer
          width={"100%"}
          url="https://youtube.com/shorts/Tauiq6zKEF0?feature=share"
        />
      </div>
    </div>
  );
}
