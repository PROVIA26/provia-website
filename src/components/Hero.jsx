import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <img src="/logo.png" alt="PROVIA" className="hero-logo" />

      <h1>PROVIA</h1>

      <h2>挑戦する人と、未来を創る。</h2>

      <p>
        軽貨物業界に革新を。<br />
        物流を、もっとスマートに。
      </p>

      <div className="hero-buttons">
        <a href="#contact" className="primary-btn">
          お問い合わせ
        </a>

        <a href="#services" className="link-btn">
          事業内容を見る
        </a>
      </div>
    </section>
  );
}

export default Hero;