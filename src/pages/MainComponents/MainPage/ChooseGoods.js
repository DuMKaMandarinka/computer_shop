import "./ChooseGoods.css"
import processor from "../../../menu_images/menu_Images1.jpg";
import motherboard from "../../../menu_images/menu_Images2.jpg"
import video_card from "../../../menu_images/menu_Images3.jpg"
import RAM from "../../../menu_images/menu_Images4.jpg"
import frame from "../../../menu_images/menu_Images5.jpg"
import power_unit from "../../../menu_images/menu_Images6.jpg"
import cooler from "../../../menu_images/menu_Images7.jpg"
import HDD from "../../../menu_images/menu_Images8.jpg"
import assembly from "../../../menu_images/menu_Images9.jpg"


function ChooseGoods(){
   return(
   <div className="container_on_choose_goods">


    <div className="choose_goods_container">
      <div className="choose_goods_container_body">
          <div className="choose_goods_container_body_item">
               Процессоры
          </div>
          <div className="choose_goods_container_body_more">
            <div className="choose_goods_container_body_more_text">
               Подробнее
            </div>
            <div className="choose_goods_container_body_more_item">
            &#10095;
            </div>
          </div>
      </div>
      <div className="choose_goods_container_image">
         <img src={processor}/>
      </div>
    </div>


    <div className="choose_goods_container">
      <div className="choose_goods_container_body">
          <div className="choose_goods_container_body_item">
               Материнские платы
          </div>
          <div className="choose_goods_container_body_more">
            <div className="choose_goods_container_body_more_text">
               Подробнее
            </div>
            <div className="choose_goods_container_body_more_item">
            &#10095;
            </div>
          </div>
      </div>
      <div className="choose_goods_container_image">
         <img src={motherboard}/>
      </div>
    </div>


    <div className="choose_goods_container">
      <div className="choose_goods_container_body">
          <div className="choose_goods_container_body_item">
               Видеокарты
          </div>
          <div className="choose_goods_container_body_more">
            <div className="choose_goods_container_body_more_text">
               Подробнее
            </div>
            <div className="choose_goods_container_body_more_item">
            &#10095;
            </div>
          </div>
      </div>
      <div className="choose_goods_container_image">
         <img src={video_card}/>
      </div>
    </div>

    <div className="choose_goods_container">
      <div className="choose_goods_container_body">
          <div className="choose_goods_container_body_item">
               Видеокарты
          </div>
          <div className="choose_goods_container_body_more">
            <div className="choose_goods_container_body_more_text">
               Подробнее
            </div>
            <div className="choose_goods_container_body_more_item">
            &#10095;
            </div>
          </div>
      </div>
      <div className="choose_goods_container_image">
         <img src={RAM}/>
      </div>
    </div>

    <div className="choose_goods_container">
      <div className="choose_goods_container_body">
          <div className="choose_goods_container_body_item">
               Корпуса
          </div>
          <div className="choose_goods_container_body_more">
            <div className="choose_goods_container_body_more_text">
               Подробнее
            </div>
            <div className="choose_goods_container_body_more_item">
            &#10095;
            </div>
          </div>
      </div>
      <div className="choose_goods_container_image">
         <img src={frame}/>
      </div>
    </div>

    <div className="choose_goods_container">
      <div className="choose_goods_container_body">
          <div className="choose_goods_container_body_item">
               Блок питания
          </div>
          <div className="choose_goods_container_body_more">
            <div className="choose_goods_container_body_more_text">
               Подробнее
            </div>
            <div className="choose_goods_container_body_more_item">
            &#10095;
            </div>
          </div>
      </div>
      <div className="choose_goods_container_image">
         <img src={power_unit}/>
      </div>
    </div>

    <div className="choose_goods_container">
      <div className="choose_goods_container_body">
          <div className="choose_goods_container_body_item">
               Охлаждение компьютера
          </div>
          <div className="choose_goods_container_body_more">
            <div className="choose_goods_container_body_more_text">
               Подробнее
            </div>
            <div className="choose_goods_container_body_more_item">
            &#10095;
            </div>
          </div>
      </div>
      <div className="choose_goods_container_image">
         <img src={cooler}/>
      </div>
    </div>


    <div className="choose_goods_container">
      <div className="choose_goods_container_body">
          <div className="choose_goods_container_body_item">
               Жесткие диски
          </div>
          <div className="choose_goods_container_body_more">
            <div className="choose_goods_container_body_more_text">
               Подробнее
            </div>
            <div className="choose_goods_container_body_more_item">
            &#10095;
            </div>
          </div>
      </div>
      <div className="choose_goods_container_image">
         <img src={HDD}/>
      </div>
    </div>

    <div className="choose_goods_container">
      <div className="choose_goods_container_body">
          <div className="choose_goods_container_body_item">
               Готовые сборки
          </div>
          <div className="choose_goods_container_body_more">
            <div className="choose_goods_container_body_more_text">
               Подробнее
            </div>
            <div className="choose_goods_container_body_more_item">
            &#10095;
            </div>
          </div>
      </div>
      <div className="choose_goods_container_image">
         <img src={assembly}/>
      </div>
    </div>


     </div>
   )
}

export default ChooseGoods