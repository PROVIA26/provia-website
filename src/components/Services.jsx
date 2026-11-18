import "../styles/services.css";

const services = [
  {
    number: "01",
    english: "LOGISTICS",
    japanese: "軽貨物運送事業",
    catchphrase: "届ける、その先の価値まで。",
    description:
      "PROVIAは滋賀県を拠点に、企業間配送・個人宅配送・医療配送・スポット配送・チャーター便などの軽貨物配送サービスを提供しています。滋賀県の草津市・守山市・栗東市・野洲市・湖南市・大津市をはじめ、京都府・大阪府にも対応。通常配送から冷凍・冷蔵配送まで、企業様の物流ニーズに合わせた柔軟な配送体制を構築します。",
    tags: [
      "企業間配送",
      "個人宅配送",
      "医療配送",
      "スポット配送",
      "チャーター便",
      "冷凍・冷蔵配送",
    ],
    image: "/service-logistics.png",
    imageLabel: "MOVING YOUR BUSINESS FORWARD",
    theme: "light",
  },
  {
    number: "02",
    english: "HUMAN\nRESOURCES",
    japanese: "人材サービス事業",
    catchphrase: "人の可能性が、企業を動かす。",
    description:
      "PROVIAでは滋賀県を中心に、軽貨物ドライバーの確保や配送現場の運営支援を行っています。ドライバー不足にお悩みの運送会社様や物流企業様に対し、配送業界で培った現場経験を活かした人材サービスを提供。企業様の安定した配送体制づくりをサポートします。",
    tags: [
      "ドライバー人材提供",
      "配送現場の運営支援",
      "人材確保サポート",
    ],
    image: "/service-human.png",
    imageLabel: "CONNECTING PEOPLE & OPPORTUNITIES",
    theme: "dark",
  },
  {
    number: "03",
    english: "WEB\nSOLUTIONS",
    japanese: "Web制作事業",
    catchphrase: "想いを、伝わるカタチに。",
    description:
      "PROVIAでは、滋賀県をはじめ全国の企業様・個人事業主様向けに、ホームページ制作やランディングページ（LP）制作を行っています。新規ホームページの開設から既存サイトのリニューアルまで、デザイン性・操作性・スマートフォンでの見やすさを重視したWebサイトを制作し、事業の魅力を伝えるお手伝いをします。",
    tags: [
      "ホームページ制作",
      "LP制作",
      "サイトリニューアル",
      "スマートフォン対応",
    ],
    image: "/service-web.png",
    imageLabel: "DESIGNING DIGITAL EXPERIENCES",
    theme: "light",
  },
];

function ServiceBlock({ service }) {
  return (
    <article
      className={`provia-service-block provia-service-${service.theme}`}
    >
      <div className="provia-service-container">
        <div className="provia-service-visual" data-aos="fade-up">
          <div
            className="provia-service-image"
            style={{
              backgroundImage: `linear-gradient(
                180deg,
                rgba(7, 13, 22, 0.05) 0%,
                rgba(7, 13, 22, 0.6) 100%
              ), url("${service.image}")`,
            }}
          >
            <span className="provia-service-image-number">
              {service.number}
            </span>

            <span className="provia-service-image-caption">
              {service.imageLabel}
            </span>
          </div>

          <div className="provia-service-visual-line" />
        </div>

        <div className="provia-service-info" data-aos="fade-up">
          <div className="provia-service-small-heading">
            <span className="provia-service-small-line" />
            BUSINESS {service.number}
          </div>

          <h3 className="provia-service-english">
            {service.english.split("\n").map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </h3>

          <p className="provia-service-japanese">
            {service.japanese}
          </p>

          <div className="provia-service-divider" />

          <h4 className="provia-service-catchphrase">
            {service.catchphrase}
          </h4>

          <p className="provia-service-description">
            {service.description}
          </p>

          <div className="provia-service-tags">
            {service.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function Services() {
  return (
    <section className="provia-services" id="services">
      <div className="provia-services-intro">
        <div className="provia-services-intro-inner">
          <div
            className="provia-services-heading"
            data-aos="fade-up"
          >
            <div className="provia-services-label">
              <span />
              03 / OUR SERVICES
            </div>

            <h2>
              WHAT
              <br />
              WE DO<span>.</span>
            </h2>
          </div>

          <div
            className="provia-services-intro-text"
            data-aos="fade-up"
          >
            <span>OUR BUSINESS</span>

            <h3>
              可能性を広げる、
              <br />
              3つの事業。
            </h3>

            <p>
              PROVIAは滋賀県を拠点に、
              <br />
              軽貨物配送・人材サービス・Web制作を展開。
              <br />
              物流、人材、そしてWebの力で、
              <br />
              お客様のビジネスを多角的にサポートします。
            </p>
          </div>
        </div>
      </div>

      <div className="provia-services-list">
        {services.map((service) => (
          <ServiceBlock
            key={service.number}
            service={service}
          />
        ))}
      </div>

      <div className="provia-services-bottom">
        <div className="provia-services-bottom-inner">
          <p>
            YOUR CHALLENGE.
            <br />
            OUR COMMITMENT.
          </p>

          <a href="#contact">
            お仕事のご相談はこちら
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;