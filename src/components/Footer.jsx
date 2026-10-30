import "../styles/footer.css";

function Footer() {
  return (
    <footer className="provia-footer" id="footer">
      <div className="provia-footer-inner">

        <div className="provia-footer-top">
          <div className="provia-footer-top-label">
            <span className="provia-footer-line"></span>
            THE NEXT CHAPTER
          </div>

          <h2>
            LET'S BUILD
            <br />
            <span>THE FUTURE.</span>
          </h2>

          <div className="provia-footer-top-bottom">
            <p>
              挑戦する人と、未来を創る。
              <br />
              その一歩を、PROVIAとともに。
            </p>

            <a href="#contact" className="provia-footer-contact-btn">
              CONTACT US
              <span>↗</span>
            </a>
          </div>
        </div>

        <div className="provia-footer-main">

          <div className="provia-footer-brand">
            <a href="#hero" className="provia-footer-logo">
              PROVIA<span>.</span>
            </a>

            <p>
              挑戦する人と、未来を創る。
              <br />
              物流、人材、Webの力で、
              <br />
              新たな可能性を切り拓く。
            </p>
          </div>

          <div className="provia-footer-column">
            <h3>NAVIGATION</h3>

            <nav aria-label="フッターナビゲーション">
              <a href="#about">ABOUT</a>
              <a href="#message">MESSAGE</a>
              <a href="#services">SERVICES</a>
              <a href="#recruit">RECRUIT</a>
              <a href="#area">AREA</a>
              <a href="#contact">CONTACT</a>
            </nav>
          </div>

          <div className="provia-footer-column">
            <h3>BUSINESS</h3>

            <div className="provia-footer-business">
              <p>軽貨物運送事業</p>
              <p>人材サービス事業</p>
              <p>Webサイト制作事業</p>
            </div>
          </div>

          <div className="provia-footer-column provia-footer-company">
            <h3>COMPANY</h3>

            <div className="provia-footer-company-info">
              <p>
                <span>代表者</span>
                斉藤 光輝
              </p>

              <p>
                <span>所在地</span>
                〒524-0043
                <br />
                滋賀県守山市二町町280-66
              </p>

              <p>
                <span>電話番号</span>
                <a href="tel:07084944484">
                  070-8494-4484
                </a>
              </p>

              <p>
                <span>メールアドレス</span>
                <a href="mailto:provia.26.saito@gmail.com">
                  provia.26.saito@gmail.com
                </a>
              </p>
            </div>
          </div>

        </div>

        <div className="provia-footer-large-logo" aria-hidden="true">
          PROVIA<span>.</span>
        </div>

        <div className="provia-footer-bottom">
          <span>© 2026 PROVIA. All Rights Reserved.</span>

          <a href="#hero" aria-label="ページの先頭へ戻る">
            BACK TO TOP ↑
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;