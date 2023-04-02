import slide1 from './slide1.jpg'
import slide2 from './slide2.jpg'
import slide3 from './slide3.jpg'
import slide4 from './slide4.jpg'
import './Slider.css'

function Slider() {
  return (
    
      <div className="slideshow-container">
      <div className="mySlides_fade1">
          <div className="numbertext">1 / 3</div>
          <div className="slide-image">
          <img src={slide1} 
          style=
          {{width:"800px",
            height:"400px"
          }} 
          />
          </div>
          <div className="text">Подпись текст</div>
        </div>
        <a className="prev" onClick={()=>console.log('click1')}>
          &#10094;
        </a>
        <a className="next" onClick={()=>console.log('click1')}>
          &#10095;
        </a>
        <div style={{textAlign:"center"}}>
        <span className="dot" onClick={()=>console.log('click1')}></span>
        <span className="dot" onClick={()=>console.log('click1')}></span>
        <span className="dot" onClick={()=>console.log('click1')}></span>
      </div>
      </div>
      /* <div className="slideshow-container">
        <div className="mySlides_fade1">
          <div className="numbertext">1 / 3</div>
          <img src={slide1} 
          style=
          {{width:"870px",
            height:"400px"
          }} 
          />
          <div className="text">Подпись текст</div>
        </div>

        <div className="mySlides_fade2">
          <div className="numbertext">2 / 3</div>
          <img src={slide2} style=
          {{width:"870px",
          height:"400px"
          }}
          />
          <div className="text">Подпись два</div>
        </div>

        <div className="mySlides_fade3">
          <div className="numbertext">3 / 3</div>
          <img src={slide3} style=
          {{width:"870px",
          height:"400px"
          } }
          />
          <div className="text">Подпись три</div>
        </div>

        <a className="prev" onClick={()=>console.log('click1')}>
          &#10094;
        </a>
        <a className="next" onClick={()=>console.log('click1')}>
          &#10095;
        </a>
      </div>

      <div style={{textAlign:"center"}}>
        <span className="dot" onClick={()=>console.log('click1')}></span>
        <span className="dot" onClick={()=>console.log('click1')}></span>
        <span className="dot" onClick={()=>console.log('click1')}></span>
      </div> */
  );
}

export default Slider