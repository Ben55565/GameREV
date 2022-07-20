import React, { useState } from "react";
import "./Footer.css";

const d = new Date();
let year = d.getFullYear();
// THIS IS FOR EMAIL VALIDATION, CURRENTLY THIS IS EXTRA WHEN THERES TIME
let email = "";
function setEmail(e) {
  email = e.target.value;
  console.log(email);
}

function Footer() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="footer">
      <footer>
        <h4 className="footer-year"> © GameRev Ben Daniels {year}</h4>
        <div className="footer-items">
          {clicked ? (
            <>
              <h2 className="registered">Thank You For Joining!</h2>
            </>
          ) : (
            <>
              <h3 className="sign-up">Sign For Updates</h3>
              <span className="input-section">
                <input
                  type="text"
                  placeholder="exemple@mail.com"
                  className="input"
                  onChange={(e) => setEmail(e)} // HERE AS WELL, SET EMAIL IS EXTRA
                ></input>
                <button
                  type="submit"
                  className="submit"
                  onClick={() => setClicked(true)}
                >
                  Submit
                </button>
              </span>
            </>
          )}

          <span className="icons">
            <a href="https://www.facebook.com/get.out.from.my.page">
              <i className="fa-brands fa-facebook icon"></i>
            </a>
            <a href="https://github.com/Ben55565">
              <i className="fa-brands fa-github icon"></i>
            </a>
            <a href="mailto:cisbhtkx@gmail.com">
              <i className="fa-solid fa-at icon"></i>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
