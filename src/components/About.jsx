import "../styles/about.css";

function About() {
  const businesses = [
    {
      number: "01",
      english: "LOGISTICS",
      japanese: "軽貨物運送事業",
      description:
        "企業間配送・医療配送・スポット配送など、多様な物流ニーズに対応。スピードと品質を追求した配送サービスを提供します。",
    },
    {
      number: "02",
      english: "HUMAN RESOURCES",
      japanese: "人材サービス事業",
      description:
        "ドライバーの確保や配送現場の運営をサポート。企業と働く人をつなぎ、双方の成長を支えます。",
    },
    {
      number: "03",
      english: "WEB SOLUTIONS",
      japanese: "ホームページ・LP制作事業",
      description:
        "企業の魅力を最大限に引き出すWebサイトを制作。デザイン性と使いやすさを両立し、ビジネスの成長を支援します。",
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
            PROVIAは、物流・人材・Webの3つの事業を軸に、
            新たな価値の創造に挑戦する企業です。
            <br />
            <br />
            変化し続ける社会の中で、
            私たちは既存の枠にとらわれることなく、
            お客様の課題と真摯に向き合います。
            <br />
            <br />
            人と企業をつなぎ、
            その先にある未来を創造していきます。
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