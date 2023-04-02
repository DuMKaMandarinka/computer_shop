import "./Popular.css"
import popular from './../../../popular_goods/popular1.jpg'

function Popular(){
    return(
        <div className="popular_container">
           <div className="popular_container_goods">
              <div className="popular_container_goods_header">
                 Популярные товары
              </div>
              <div className="popular_container_goods_content">
                  <div className="popular_container_good">
                    <div className="popular_container_good_like">
                      <div>
                      &#9825; 
                      </div>  
                    </div>
                    <div className="popular_container_good_img">
                        <img src={popular}/>
                    </div>
                    <div className="popular_container_good_text">
                      RTX 3060 GAMING X 12G
                    </div>
                    <div className="popular_container_good_price">
                      38789
                    </div>
                    <div className="popular_container_good_buy">
                      <div className="popular_container_good_buy_basket">
                        &#128722;
                      </div>
                    </div>
                  </div>
                  
                  <div className="popular_container_good">
                    <div className="popular_container_good_like">
                      <div>
                      &#9825; 
                      </div>  
                    </div>
                    <div className="popular_container_good_img">
                        <img src={popular}/>
                    </div>
                    <div className="popular_container_good_text">
                      RTX 3060 GAMING X 12G
                    </div>
                    <div className="popular_container_good_price">
                      38789
                    </div>
                    <div className="popular_container_good_buy">
                      <div className="popular_container_good_buy_basket">
                        &#128722;
                      </div>
                    </div>
                  </div> 


                  <div className="popular_container_good">
                    <div className="popular_container_good_like">
                      <div>
                      &#9825; 
                      </div>  
                    </div>
                    <div className="popular_container_good_img">
                        <img src={popular}/>
                    </div>
                    <div className="popular_container_good_text">
                      RTX 3060 GAMING X 12G
                    </div>
                    <div className="popular_container_good_price">
                      38789
                    </div>
                    <div className="popular_container_good_buy">
                      <div className="popular_container_good_buy_basket">
                        &#128722;
                      </div>
                    </div>
                  </div> 


                  <div className="popular_container_good">
                    <div className="popular_container_good_like">
                      <div>
                      &#9825; 
                      </div>  
                    </div>
                    <div className="popular_container_good_img">
                        <img src={popular}/>
                    </div>
                    <div className="popular_container_good_text">
                      RTX 3060 GAMING X 12G
                    </div>
                    <div className="popular_container_good_price">
                      38789
                    </div>
                    <div className="popular_container_good_buy">
                      <div className="popular_container_good_buy_basket">
                        &#128722;
                      </div>
                    </div>
                  </div> 

                
              </div>
           </div>
        </div>
    )
}

export default Popular