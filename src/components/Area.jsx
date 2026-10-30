import "../styles/area.css";

const areas = [
  {
    number: "01",
    english: "SHIGA",
    japanese: "滋賀県",
    label: "MAIN AREA",
    cities: [
      "大津市",
      "草津市",
      "守山市",
      "栗東市",
      "野洲市",
      "湖南市",
      "甲賀市",
      "東近江市",
      "近江八幡市",
      "彦根市",
      "長浜市",
      "米原市",
    ],
  },
  {
    number: "02",
    english: "KYOTO",
    japanese: "京都府",
    label: "SERVICE AREA",
    cities: [
      "京都市全域",
      "宇治市",
      "城陽市",
      "八幡市",
      "京田辺市",
      "木津川市",
      "福知山市",
    ],
  },
  {
    number: "03",
    english: "OSAKA",
    japanese: "大阪府",
    label: "SERVICE AREA",
    cities: [
      "大阪市全域",
      "高槻市",
      "茨木市",
      "吹田市",
      "枚方市",
      "寝屋川市",
      "東大阪市",
    ],
  },
];

function Area() {
  return (
    <section className="provia-area" id="area">
      <div className="provia-area-inner">

        <div className="provia-area-header">
          <div className="provia-area-heading">
            <div className="provia-area-label">
              <span className="provia-area-label-line"></span>
              OUR NETWORK
            </div>

            <h2>
              OUR
              <br />
              <span>COVERAGE.</span>
            </h2>
          </div>

          <div className="provia-area-intro">
            <span>対応エリア</span>

            <h3>
              地域に根ざし、
              <br />
              より広いフィールドへ。
            </h3>

            <p>
              PROVIAは滋賀県を拠点に、
              京都府・大阪府を中心としたエリアで
              事業を展開しています。
              <br />
              地域とのつながりを大切にしながら、
              お客様の多様なニーズにお応えします。
            </p>
          </div>
        </div>

        <div className="provia-area-grid">
          {areas.map((area) => (
            <div className="provia-area-card" key={area.number}>

              <div className="provia-area-card-top">
                <span>{area.number}</span>
                <span>{area.label}</span>
              </div>

              <div className="provia-area-card-title">
                <h3>{area.english}</h3>
                <p>{area.japanese}</p>
              </div>

              <div className="provia-area-card-divider"></div>

              <div className="provia-area-cities">
                {area.cities.map((city) => (
                  <span key={city}>{city}</span>
                ))}
              </div>

            </div>
          ))}
        </div>

        <div className="provia-area-bottom">
          <div>
            <span>BEYOND THE AREA</span>
            <p>
              記載のない地域についても、
              <br />
              まずはお気軽にご相談ください。
            </p>
          </div>

          <a href="#contact" className="provia-area-button">
            お問い合わせ
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Area;