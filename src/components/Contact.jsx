function Contact() {
  return (
    <section id="contact" className="section">
      <h2>お問い合わせ</h2>

      <form
        action="https://formspree.io/f/mlgyobgk"
        method="POST"
      >
        <input type="text" name="name" placeholder="お名前" required />

        <input type="email" name="email" placeholder="メールアドレス" required />

        <textarea name="message" placeholder="お問い合わせ内容" required />

        <button type="submit" className="primary-btn">
          送信する
        </button>
      </form>
    </section>
  );
}

export default Contact;