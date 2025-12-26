import footerIcons1 from "../assets/icons/instagram-1.svg"
import footerIcons2 from "../assets/icons/facebook-2.svg"
import footerIcons3 from "../assets/icons/twitter-3.svg"
import footerIcons4 from "../assets/icons/linkedIn-4.svg"

const Footer = () => {
    return (
      <footer>
        <section className="footer">
          <div>
            <p>Copyright © 2020 Invoriem</p>
          </div>

          <div className="footer-icons">
            <p>info@invoriem.com</p>

            <section>
              <img src={footerIcons1} alt="instagram" />
              <img src={footerIcons2} alt="facebook" />
              <img src={footerIcons3} alt="twitter" />
              <img src={footerIcons4} alt="linkedIn" />
            </section>
          </div>
        </section>
      </footer>
    );
};

export default Footer;