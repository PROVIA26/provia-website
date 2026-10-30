import { useEffect, useState, useRef } from "react";
import "../styles/header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollLockRef = useRef(null);

  // スクロール時のヘッダー背景変更
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // スマホメニュー表示中のスクロール制御
  useEffect(() => {
    if (menuOpen) {
      scrollLockRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow =
        scrollLockRef.current ?? "";
    }

    return () => {
      document.body.style.overflow =
        scrollLockRef.current ?? "";
    };
  }, [menuOpen]);

  // 指定したセクションに移動
  const navigateTo = (event, sectionId) => {
    event.preventDefault();

    const target = document.getElementById(sectionId);

    // メニューを閉じる
    setMenuOpen(false);

    // スクロール禁止を解除
    document.body.style.overflow = "";

    if (!target) {
      console.warn(`セクション #${sectionId} が見つかりません`);
      return;
    }

    // メニューが閉じた後にスクロール
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const headerHeight =
          document.querySelector(".header")?.offsetHeight || 72;

        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          headerHeight;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: "smooth",
        });

        // URLのハッシュも更新
        window.history.replaceState(
          null,
          "",
          `#${sectionId}`
        );
      });
    });
  };

  return (
    <header
      className={`header ${scrolled ? "header-scrolled" : ""} ${
        menuOpen ? "header-menu-open" : ""
      }`}
    >
      <div className="header-inner">

        {/* ロゴ */}
        <a
          href="#hero"
          className="header-logo"
          onClick={(event) => navigateTo(event, "hero")}
          aria-label="PROVIA トップへ戻る"
        >
          <img
            src="/logo.png"
            alt=""
            className="header-logo-image"
          />

          <span className="header-logo-text">
            PROVIA<span className="header-logo-dot">.</span>
          </span>
        </a>

        {/* ナビゲーション */}
        <nav
          id="provia-navigation"
          className={`header-nav ${menuOpen ? "active" : ""}`}
        >
          <a
            href="#about"
            onClick={(event) => navigateTo(event, "about")}
          >
            ABOUT
            <span>会社情報</span>
          </a>

          <a
            href="#message"
            onClick={(event) => navigateTo(event, "message")}
          >
            MESSAGE
            <span>代表挨拶</span>
          </a>

          <a
            href="#services"
            onClick={(event) => navigateTo(event, "services")}
          >
            SERVICES
            <span>事業内容</span>
          </a>

          <a
            href="#recruit"
            onClick={(event) => navigateTo(event, "recruit")}
          >
            RECRUIT
            <span>採用情報</span>
          </a>

          <a
            href="#contact"
            className="header-contact"
            onClick={(event) => navigateTo(event, "contact")}
          >
            CONTACT
            <span>お問い合わせ ↗</span>
          </a>
        </nav>

        {/* スマホメニューボタン */}
        <button
          type="button"
          className={`header-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          aria-controls="provia-navigation"
        >
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Header;