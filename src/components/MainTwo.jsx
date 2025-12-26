import Box1case1 from "../assets/images/case-studies-1.png"
import Box1case2 from "../assets/images/case-studies-2.png"
import Box1case3 from "../assets/images/case-studies-3.png"
import Box1case4 from "../assets/images/case-studies-4.png"

const MainTwo = () => {
    return (
      <section className="box-2">
          <div className="box-text">
            <h1>Case Studies</h1>

            <p>
              We deliver a unique and truly bespoke approach to delivering international developments to market,
              with over 10 years success around the world.
            </p>
          </div>

          <div className="case-studies">
            <img src={Box1case1} alt="case-studies-1" />
            <img src={Box1case2} alt="case-studies-2" />
            <img src={Box1case3} alt="case-studies-3" />
            <img src={Box1case4} alt="case-studies-4" />
          </div>
        </section>
    );
};

export default MainTwo;