import "../styles/about.css";

function About() {
  const businesses = [
    {
      number: "01",
      english: "LOGISTICS",
      japanese: "軽貨物運送事業",
      description:
        "PROVIAは滋賀県を拠点に、企業間配送・医療配送・スポット配送・チャーター便などの軽貨物配送サービスを展開しています。滋賀・京都・大阪を中心に、企業様の多様な物流ニーズに迅速かつ丁寧に対応します。",
    },
    {
      number: "02",
      english: "HUMAN RESOURCES",
      japanese: "人材サービス事業",
      description:
        "滋賀県を中心に、軽貨物ドライバーの確保や配送現場の運営をサポートしています。ドライバーを必要とする企業様と働く人をつなぎ、安定した物流体制の構築を支援します。",
    },
    {
      number: "03",
      english: "WEB SOLUTIONS",
      japanese: "ホームページ・LP制作事業",
      description:
        "PROVIAでは、企業様や個人事業主様向けのホームページ制作・ランディングページ（LP）制作を行っています。デザイン性と使いやすさを重視し、事業の魅力が伝わるWebサイトを制作します。",
    },
  ];

  return (
    <section className="provia-about" id="about">

      {/* ABOUT INTRO */}
      <div className="provia-about-inner">

        <div className="provia-about-heading" data-aos="fade-up">
          <div className="provia-section-label">
            <span className="provia-label-line"></span>
            01 / ABOUT US
          </div>

          <h2 className="provia-about-title">
            WHO
            <br />
            WE ARE<span>.</span>
          </h2>
        </div>

        <div className="provia-about-intro" data-aos="fade-up">
          <p className="provia-about-catch">
            挑戦を、
            <br />
            可能性に変える。
          </p>

          <p className="provia-about-description">
            PROVIAは、滋賀県を拠点に、
            軽貨物運送事業・人材サービス事業・
            ホームページ制作事業を展開しています。
            <br />
            <br />
            滋賀県・京都府・大阪府を中心に、
            個人宅配送や企業間配送などの物流サービス、
            ドライバーの確保・配送現場の運営支援、
            企業様向けのWebサイト制作を提供しています。
            <br />
            <br />
            私たちは、物流・人材・Webの3つの事業を通じて、
            お客様の課題と真摯に向き合い、
            人と企業をつなぐ新たな価値の創造に挑戦します。
            <br />
            <br />
            挑戦する人と、未来を創る。
            <br />
            PROVIAは、これからも挑戦し続けます。
          </p>
        </div>

      </div>

      {/* BUSINESS AREAS */}
      <div className="provia-business-area">

        <div className="provia-business-heading" data-aos="fade-up">
          <span>OUR BUSINESS FIELDS</span>
          <h3>3つの事業領域。</h3>
        </div>

        <div className="provia-business-grid">
          {businesses.map((business) => (
            <div
              className="provia-business-item"
              key={business.number}
              data-aos="fade-up"
            >
              <div className="provia-business-top">
                <span>{business.number}</span>
                <span className="provia-business-arrow">↗</span>
              </div>

              <div className="provia-business-content">
                <h4>{business.english}</h4>
                <h5>{business.japanese}</h5>
                <p>{business.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* NUMBERS */}
      <div className="provia-numbers">

        <div className="provia-numbers-inner">

          <div className="provia-numbers-heading" data-aos="fade-up">
            <span>PROVIA IN NUMBERS</span>
            <h3>
              数字で見る
              <br />
              PROVIA.
            </h3>
          </div>

          <div className="provia-numbers-grid">

            <div className="provia-number-item" data-aos="fade-up">
              <div className="provia-number-value">
                10<span>+</span>
              </div>
              <p>取引企業数</p>
              <small>PARTNER COMPANIES</small>
            </div>

            <div className="provia-number-item" data-aos="fade-up">
              <div className="provia-number-value">
                20<span>+</span>
              </div>
              <p>稼働ドライバー数</p>
              <small>ACTIVE DRIVERS</small>
            </div>

            <div className="provia-number-item" data-aos="fade-up">
              <div className="provia-number-value">
                24<span>H</span>
              </div>
              <p>サポート体制</p>
              <small>SUPPORT SYSTEM</small>
            </div>

          </div>

        </div>

      </div>

      {/* CEO MESSAGE */}
      <div className="provia-message" id="message">

        <div className="provia-message-inner">

          <div className="provia-message-left" data-aos="fade-up">

            <div className="provia-message-label">
              <span className="provia-label-line"></span>
              02 / MESSAGE
            </div>

            <h2>
              MESSAGE
              <span>.</span>
            </h2>

            <p className="provia-message-en">
              CHALLENGE THE PRESENT.
              <br />
              CREATE THE FUTURE.
            </p>

          </div>

          <div className="provia-message-right" data-aos="fade-up">

            <h3>
              挑戦する人と、
              <br />
              未来を創る。
            </h3>

            <p>
              PROVIAは、「挑戦する人と未来を創る」という理念のもと、
              新たな価値の創造に取り組んでいます。
            </p>

            <p>
              私たちは、一人ひとりの挑戦が、
              企業や社会の成長につながると考えています。
            </p>

            <p>
              物流・人材・Webという異なる事業領域においても、
              大切にしているのは、人とのつながりと信頼です。
            </p>

            <p>
              これからも現状に満足することなく、
              常に挑戦し続ける企業でありたいと考えています。
            </p>

            <div className="provia-ceo">

              <span>REPRESENTATIVE</span>

              <div className="provia-ceo-name">
                <small>代表</small>
                <strong>斉藤 光輝</strong>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;