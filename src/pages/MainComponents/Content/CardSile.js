import "./CardSile.css";
import sile_product from "../../../image_product/eb1.jpg";

function CardSale() {
  return (
    <div className="card">
      <div className="card_sile_top">
        <div className="sile_text">
          <label>Акция</label>
        </div>
        <div className="sile_price">190000</div>
      </div>
      <div className="image_card_sile_container">
        <div className="last_price_container">
          <div className="last_price">
            <div className="last_price_number">225000</div>
            <div className="line_last_price">
              <hr />
            </div>
          </div>
        </div>
        <div className="image_card_sile">
          <img src={sile_product} style={{ width: "160px", height: "175px" }} />
        </div>
        <div className="sile_product_name">Эльбрус 8CB</div>
      </div>
      <div className="card_sile_bottom">
        <div className="card_sile_bottom_text">Акция действует до</div>
        <div className="card_sile_bottom_date">31.01.2023</div>
      </div>
    </div>
  );
}

export default CardSale;
