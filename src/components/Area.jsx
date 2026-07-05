import "../styles/area.css";

function Area() {
  return (
    <section className="area">
      <div className="container">

        <h2>対応エリア</h2>

        <p className="area-text">
          PROVIAでは滋賀県全域を中心に、
          軽貨物配送・建設業・人材派遣サービスを提供しております。
        </p>

        <div className="area-list">
          <span>大津市</span>
          <span>草津市</span>
          <span>守山市</span>
          <span>栗東市</span>
          <span>野洲市</span>
          <span>湖南市</span>
          <span>甲賀市</span>
          <span>東近江市</span>
          <span>近江八幡市</span>
          <span>彦根市</span>
          <span>長浜市</span>
          <span>米原市</span>
        </div>

        <p className="area-bottom">
          上記以外の地域につきましても、お気軽にお問い合わせください。
        </p>

      </div>
    </section>
  );
}

export default Area;