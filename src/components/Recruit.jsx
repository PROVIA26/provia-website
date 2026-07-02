function Recruit() {
  return (
    <section id="recruit" className="section">
      <h2>採用情報</h2>

      <p>
        PROVIAでは軽貨物ドライバーを積極採用しています。
        未経験からでも安心して始められる環境です。
      </p>

      <div className="salary-box">
        <h3>収入例</h3>
        <p>
          ・未経験：月25万〜35万円<br />
          ・経験者：月35万〜50万円以上可
        </p>
      </div>

      <div className="flow-box">
        <h3>1日の流れ（例）</h3>
        <p>
          8:00 出勤<br />
          9:00 配送開始<br />
          12:00 休憩<br />
          18:00 終了
        </p>
      </div>

      <div className="recruit-box">
        <h3>募集内容</h3>
        <ul>
          <li>軽貨物ドライバー</li>
          <li>普通免許のみOK</li>
          <li>未経験歓迎</li>
        </ul>
      </div>

      <a href="#contact" className="primary-btn">
        今すぐ応募する
      </a>
    </section>
  );
}

export default Recruit;