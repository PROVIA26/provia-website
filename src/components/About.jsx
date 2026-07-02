function About() {
  return (
    <section id="about" className="section">
      <h2>会社情報</h2>

      <p>
        PROVIAは軽貨物配送を中心に、
        ドライバーと企業をつなぐ物流サービスを展開しています。
      </p>

      <div className="stats">
        <div>
          <h3>10社 ⤴︎
          </h3>
          <p>取引企業数</p>
        </div>

        <div>
          <h3>20台 ⤴︎
          </h3>
          <p>稼働ドライバー</p>
        </div>

        <div>
          <h3>24h</h3>
          <p>サポート体制</p>
        </div>
      </div>

      <div id="message" className="message">
        <h3>代表挨拶</h3>

        <p>
          PROVIAは「挑戦する人と未来を創る」を理念に、
          軽貨物業界に全く新しい価値を提供しています。
          ドライバーのことを一番に考え、安心して働きやすい環境を整えることで、
          物流業界全体の発展に貢献していきます。
        </p>

        <p className="ceo-name">代表　斉藤 光輝</p>
      </div>
    </section>
  );
}

export default About;