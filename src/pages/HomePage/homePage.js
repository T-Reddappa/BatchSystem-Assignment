import React from "react";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="top-container">
        <img
          className="first-blur-background"
          src="/assets/blur1.png"
          alt="blur"
        />
        <div className="top-left-container">
          <p className="header">
            Make The Best <br /> Financial Decisions
          </p>
          <p className="top-text">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            <br />
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="action-buttons">
            <button className="start-btn">
              Get Started{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>
            </button>
            <button className="watch-video-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000"
              >
                <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
              Watch Video
            </button>
          </div>
          <img
            className="top-left-image"
            src="/assets/image02.png"
            alt="image"
          />
        </div>
        <div className="top-right-container">
          <img
            className="top-right-image"
            src="/assets/mobiles.png"
            alt="image"
          />
        </div>
      </div>

      <div className="features-container">
        <div className="features-container-left">
          <img
            className="features-container-left-img"
            src="/assets/favImg.png"
            alt="image"
          />
        </div>
        <div className="features-container-right">
          <div className="features-header">
            <p className="section-header">FEATURES</p>
            <h1>Uifry Premium</h1>
          </div>
          <div className="feature">
            <img src="/assets/star.png" alt="cube" />
            Budgeting Intervals
          </div>
          <p className="section-text">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            <br />
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="feature">
            <img src="/assets/cube-02.png" alt="cube" />
            Budgeting Intervals
          </div>
          <p className="section-text">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            <br />
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="feature">
            <img src="/assets/cube-04.png" alt="cube" /> Budgeting Intervals
          </div>
          <p className="section-text">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            <br />
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
        </div>
      </div>

      <div className="advantages-container">
        <div className="advantages-top-container">
          <div className="advantages-container-top-left">
            <p className="section-header">ADVANTAGES</p>
            <h1>Why Choose Uifry?</h1>
            <div className="notification">
              <img src="/assets/notifIcon.png" alt="notificationIcon" />
              Clever Notifications
            </div>
            <p className="section-text">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              <br />
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              <br />
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              <br />
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              <br />
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
          <div className="advantages-container-top-right">
            <img
              className="advantages-top-right-img"
              src="/assets/specs3.png"
              alt="advantages-img"
            />
          </div>
        </div>

        <div className="advantages-botttom-container">
          <div className="advantages-bottom-left">
            <img
              className="advantages-bottom-left-img"
              src="/assets/advantage2.png"
              alt="advantages-img"
            />
          </div>
          <div className="advantages-bottom-right">
            <div className="advntg-section-header">
              <div className="icon-container">
                <img src="/assets/star-05.png" alt="star" />
              </div>
              <span>Fully Customizable</span>
            </div>
            <p className="section-text">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              <br />
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              <br />
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              <br />
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              <br />
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="testimonal-header">
          <p>TESTIMONAL</p>
          <h1>
            What Our Users
            <br />
            Say About Us?
          </h1>
        </div>
        <div className="testimonal-container">
          <div className="testimonal-left">
            <img
              className="testimonal-img"
              src="/assets/testimonal.png"
              alt="testimoanl-img"
            />
          </div>
          <div className="testimonal-right">
            <p className="testimonal-header">
              The Best financial accounting
              <br /> app Ever!
            </p>
            <p className="section-text">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </p>
            <div>
              <img src="/assets/testimonalImages.png" alt="testimonalImages" />
              <p>Nick Jonas</p>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-container">
        <p className="section-header">FAQ</p>
        <h1>
          Frequently Asked <br /> Questions
        </h1>
        <div className="faq-grid">
          <div className="colored">
            <h3>
              The Best financial accounting
              <br /> app Ever!
            </h3>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              <br />
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div>
            <h3>
              The Best financial accounting
              <br /> app Ever!
            </h3>
            <p className="section-text">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              <br />
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div>
            <h3>
              The Best financial accounting
              <br /> app Ever!
            </h3>
            <p className="section-text">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              <br />
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="colored">
            <h3>
              The Best financial accounting
              <br /> app Ever!
            </h3>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              <br />
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="colored">
            <h3>
              The Best financial accounting
              <br /> app Ever!
            </h3>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              <br />
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div>
            <h3>
              The Best financial accounting
              <br /> app Ever!
            </h3>
            <p className="section-text">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              <br />
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
        </div>
      </div>

      <div className="bottom-banner">
        <div className="banner-section-text">
          <p className="banner-header">Ready To Get Started?</p>
          <p className="banner-text">
            Risus habitant leo egestas mauris diam eget morbi tempus
            <br /> vulputate.
          </p>
          <button className="banner-btn">
            Download App <img className="apple-logo" src="/assets/Vector.png" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
