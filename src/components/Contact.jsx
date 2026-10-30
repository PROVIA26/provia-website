import "../styles/contact.css";

function Contact() {
  return (
    <section className="provia-contact" id="contact">
      <div className="provia-contact-inner">

        {/* HEADER */}
        <div className="provia-contact-header">

          <div className="provia-contact-heading">
            <div className="provia-contact-label">
              <span className="provia-contact-label-line"></span>
              CONTACT US
            </div>

            <h2>
              LET'S
              <br />
              <span>CONNECT.</span>
            </h2>
          </div>

          <div className="provia-contact-intro">
            <span>お問い合わせ</span>

            <h3>
              新しい可能性を、
              <br />
              ここから。
            </h3>

            <p>
              配送のご依頼、人材に関するご相談、
              Webサイト制作のご依頼など、
              お気軽にお問い合わせください。
              <br />
              お客様の課題に寄り添い、
              最適なご提案をいたします。
            </p>
          </div>

        </div>

        {/* CONTENT */}
        <div className="provia-contact-content">

          {/* LEFT */}
          <div className="provia-contact-info">

            <div className="provia-contact-info-top">
              <span>START A CONVERSATION</span>

              <h3>
                YOUR NEXT STEP
                <br />
                STARTS HERE.
              </h3>

              <p>
                小さなご相談から大きなプロジェクトまで。
                <br />
                PROVIAが新たな挑戦をサポートします。
              </p>
            </div>

            <div className="provia-contact-info-bottom">

              <div className="provia-contact-info-item">
                <span>EMAIL</span>

                <a href="mailto:provia.26.saito@gmail.com">
                  provia.26.saito@gmail.com
                </a>
              </div>

              <div className="provia-contact-info-item">
                <span>BUSINESS AREA</span>
                <p>SHIGA / KYOTO / OSAKA</p>
              </div>

              {/* 事業内容を日本語に変更 */}
              <div className="provia-contact-info-item">
                <span>BUSINESS</span>

                <p>
                  軽貨物運送事業
                  <br />
                  人材サービス事業
                  <br />
                  Webサイト制作事業
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="provia-contact-form-wrapper">

            <div className="provia-contact-form-heading">
              <span>INQUIRY FORM</span>
              <h3>お問い合わせフォーム</h3>
              <p>
                必要事項をご入力のうえ、送信してください。
              </p>
            </div>

            <form
              className="provia-contact-form"
              action="https://formspree.io/f/mlgyobgk"
              method="POST"
            >

              <div className="provia-contact-field">
                <label htmlFor="contact-name">
                  お名前 <span>必須</span>
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="山田 太郎"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="provia-contact-field">
                <label htmlFor="contact-company">
                  会社名・屋号
                </label>

                <input
                  id="contact-company"
                  type="text"
                  name="company"
                  placeholder="株式会社〇〇"
                  autoComplete="organization"
                />
              </div>

              <div className="provia-contact-field-row">

                <div className="provia-contact-field">
                  <label htmlFor="contact-email">
                    メールアドレス <span>必須</span>
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="provia-contact-field">
                  <label htmlFor="contact-phone">
                    電話番号
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="090-0000-0000"
                    autoComplete="tel"
                  />
                </div>

              </div>

              <div className="provia-contact-field">
                <label htmlFor="contact-category">
                  お問い合わせ種別 <span>必須</span>
                </label>

                <select
                  id="contact-category"
                  name="category"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    お問い合わせ内容を選択してください
                  </option>

                  <option value="配送のご依頼">
                    配送のご依頼
                  </option>

                  <option value="人材サービスのご相談">
                    人材サービスのご相談
                  </option>

                  <option value="Webサイト制作のご依頼">
                    Webサイト制作のご依頼
                  </option>

                  <option value="採用・求人について">
                    採用・求人について
                  </option>

                  <option value="その他">
                    その他
                  </option>
                </select>
              </div>

              <div className="provia-contact-field">
                <label htmlFor="contact-message">
                  お問い合わせ内容 <span>必須</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="7"
                  placeholder="お問い合わせ内容をご入力ください。"
                  required
                ></textarea>
              </div>

              <div className="provia-contact-submit">
                <p>
                  ご入力いただいた情報は、
                  お問い合わせへの対応のために使用します。
                </p>

                <button type="submit">
                  <span>送信する</span>
                  <span className="provia-contact-submit-arrow">
                    ↗
                  </span>
                </button>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;