import "../styles/recruit.css";

const recruitFeatures = [
  {
    number: "01",
    english: "NO EXPERIENCE\nREQUIRED",
    title: "未経験から挑戦できる",
    description:
      "配送経験がない方も歓迎。業務に必要な知識や配送の流れを学びながら、安心して仕事をスタートできる環境を整えています。",
  },
  {
    number: "02",
    english: "FLEXIBLE\nWORK STYLE",
    title: "自分に合った働き方",
    description:
      "案件によって勤務時間や稼働日数はさまざま。ライフスタイルや希望に合わせて、働き方をご相談いただけます。",
  },
  {
    number: "03",
    english: "VEHICLE\nSUPPORT",
    title: "車両リース相談可能",
    description:
      "配送用の車両をお持ちでない方もご相談ください。案件や条件に応じて、車両リースのご案内が可能です。",
  },
];

function Recruit() {
  return (
    <section className="provia-recruit" id="recruit">
      <div className="provia-recruit-inner">
        <div className="provia-recruit-top" data-aos="fade-up">
          <div className="provia-recruit-label">
            <span className="provia-recruit-label-line" />
            05 / RECRUIT
          </div>

          <div className="provia-recruit-heading">
            <h2>
              BUILD YOUR
              <br />
              FUTURE<span>.</span>
            </h2>

            <div className="provia-recruit-heading-bottom">
              <p className="provia-recruit-jp-title">
                挑戦する仲間と、
                <br />
                次の未来へ。
              </p>

              <p className="provia-recruit-lead">
                新しい一歩が、未来を変える。
                <br />
                PROVIAは、挑戦する人を応援します。
                <br />
                経験よりも、前に進もうとする気持ちを大切に。
                <br />
                私たちと一緒に、新しい可能性を広げませんか。
              </p>
            </div>
          </div>
        </div>

        <div className="provia-recruit-divider" />

        <div className="provia-recruit-features">
          {recruitFeatures.map((feature) => (
            <article
              className="provia-recruit-feature"
              key={feature.number}
              data-aos="fade-up"
            >
              <div className="provia-recruit-feature-top">
                <span className="provia-recruit-feature-number">
                  {feature.number}
                </span>

                <span className="provia-recruit-feature-arrow">
                  ↗
                </span>
              </div>

              <h3 className="provia-recruit-feature-en">
                {feature.english.split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h3>

              <h4 className="provia-recruit-feature-title">
                {feature.title}
              </h4>

              <p className="provia-recruit-feature-description">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        <div className="provia-recruit-bottom" data-aos="fade-up">
          <div className="provia-recruit-bottom-text">
            <span>JOIN OUR TEAM</span>

            <h3>
              あなたの挑戦を、
              <br />
              ここから。
            </h3>

            <p>
              募集案件や勤務条件など、
              <br />
              まずはお気軽にお問い合わせください。
            </p>
          </div>

          <a href="#contact" className="provia-recruit-button">
            <span>応募・お問い合わせ</span>
            <span className="provia-recruit-button-arrow">↗</span>
          </a>
        </div>

        <div className="provia-recruit-footer">
          <span>PROVIA / RECRUITMENT</span>
          <span>CHALLENGE CREATES THE FUTURE.</span>
        </div>
      </div>
    </section>
  );
}

export default Recruit;