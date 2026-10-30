import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">

      {/* 背景 */}
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>

      {/* 装飾 */}
      <div className="hero-line hero-line-left"></div>
      <div className="hero-line hero-line-right"></div>

      {/* メインコンテンツ */}
      <div className="hero-content">

        <div className="hero-label">
          <span className="hero-label-line"></span>
          LOGISTICS / HUMAN RESOURCES / WEB
        </div>

        <h1 className="hero-title">
          BEYOND
          <br />
          <span>THE FUTURE.</span>
        </h1>

        <h2 className="hero-subtitle">
          挑戦する人と、未来を創る。
        </h2>

        <p className="hero-description">
          物流・人材・Webの力で、
          <br />
          ビジネスの可能性を広げる。
        </p>

        <div className="hero-buttons">

          <a href="#services" className="hero-btn-primary">
            OUR SERVICES
            <span>↗</span>
          </a>

          <a href="#contact" className="hero-btn-secondary">
            CONTACT
            <span>↗</span>
          </a>

        </div>

      </div>

      {/* 下部 */}
      <div className="hero-bottom">

        <div className="hero-bottom-left">
          PROVIA © 2026
        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div className="hero-scroll-line"></div>
        </div>

      </div>

    </section>
  );
}

export default Hero;