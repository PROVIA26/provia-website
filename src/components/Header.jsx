function Header() {
  return (
    <header className="header">
      <div className="logo">PROVIA</div>

      <nav className="nav">
        <a href="#about">会社情報</a>
        <a href="#message">代表挨拶</a>
        <a href="#services">事業内容</a>
        <a href="#recruit">採用情報</a>
        <a href="#contact" className="contact-btn">
          お問い合わせ
        </a>
      </nav>
    </header>
  );
}

export default Header;