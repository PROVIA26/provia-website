import "../styles/message.css";

function Message() {
  return (
    <section className="message" id="message">
      <div className="message-container">

        <p className="message-label">MESSAGE</p>

        <h2>
          すべてのドライバーが<br />
          安心して働ける会社へ
        </h2>

        <p className="message-text">
          PROVIAは「人」を中心に考える物流会社です。<br />
          働く人が安心できる環境がなければ、良いサービスは生まれない。<br />
          <br />
          私たちは失敗を恐れず挑戦し続ける人を全力で支え、<br />
          共に未来を作る仲間を増やしていきます。
          <br /><br />
          挑戦する人と、未来を創る。
        </p>

        <div className="message-name">
          代表　斉藤光輝
        </div>

      </div>
    </section>
  );
}

export default Message;