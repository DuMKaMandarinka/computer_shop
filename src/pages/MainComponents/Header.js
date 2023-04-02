import './Header.css'
import logo from "./logo.png";
import vector from "./Vector.png";
import basket from "./Basket.png";
import like from "./Like.png";
import profile from "./Profile.png";


function Header(){
    return(

        <div className="header">
        <div className="header-text">
          <span>Магазины</span>
          <span>Доставка и оплата</span>
          <span>Акции</span>
        </div>

        <div className="header-image">
          <img src={logo} alt="logo" width="150px" />
        </div>
        <div className='header-address'>
          <span>pccomp46@gmail.com</span>
        </div>
        {/* <div>
           <form action="" method="get">
           <input name="s" placeholder="Искать здесь..." type="search"/>
           <button type="submit"><img src={vector} alt='vector'/></button>
           </form>
        </div> */}

        <div className="header-icons">
          <div className="like">
          <img src={like} alt="logo" />
          </div>
          <div className="profile">
          <img src={profile} alt="logo" />
          </div>
          <div className="basket">
          {/* <img src={basket} alt="logo" width="30px" heigth="23px"/> */}
          <img src={basket} alt="logo"/>
          <div className="count-basket">1</div>
          </div>
        </div>
      </div>
    )
}

export default Header;