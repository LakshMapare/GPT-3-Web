import "./footer.css";
import gpt3logo from "../../assets/logo.svg";
import github from "../../assets/github.svg";

import instagram from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <div>
          <p>Request Early Access</p>
        </div>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links-logo">
          <img src={gpt3logo} alt="logo" />
          <p>Laksh Tech , Pune</p>
        </div>

        <div className="gpt3__footer-links-div">
          <h4>Links</h4>
          <p>
            <a href="https://github.com/LakshMapare" target="blank_">
              <img src={github} alt="Github " />
              Github
            </a>
          </p>
          {/* <p>
            <a
              href="https://www.linkedin.com/in/dhairya-majmudar/"
              target="blank_"
            >
              <img src={linkedIn} alt="Github " />
              LinkedIn
            </a>
          </p> */}
          <p>
            <a
              href="https://www.instagram.com/laksh_mapare/"
              target="blank_"
            >
              <img src={instagram} alt="Instagram " />
              InstaGram
            </a>
          </p>
        </div>

        <div className="gpt3__footer-links-div">
          <h4>Education</h4>
          <p>CSMSS Aurangabad</p>
          <p>Batch 2020</p>
        
        </div>

        <div className="gpt3__footer-links-div">
          <h4>Get in Touch</h4>
         
          <p>8208344698</p>
          <p>laxmikantmapare1997@gmail.com</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>Made with ❣️ by Laxmikant Mapare</p>
      </div>
    </div>
  );
};
export default Footer;
