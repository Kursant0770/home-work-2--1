import Box3video from "../assets/images/box-3-video.jpg"
import Box3play from "../assets/icons/box-3-play-video.svg"


const MaintHree = () => {
    return (
        <section className="box-3">
          <div className="box-text">
            <h1>We are Invoriem</h1>

            <p>We fulfill international property developments</p>
          </div>

          <div className="box-video">
            <img src={Box3video} alt="video" className="video"/>
            <img src={Box3play} alt="play" className="play"/>
          </div>
        </section>
    );
};

export default MaintHree;