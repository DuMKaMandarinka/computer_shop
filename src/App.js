import Header from './pages/MainComponents/Header.js';
import Menu from './pages/MainComponents/Menu.js';
import Slider from './pages/MainComponents/Content/Slider.js'
import CardSale from './pages/MainComponents/Content/CardSile.js';
import './App.css'
import Search from './pages/MainComponents/MainPage/Search.js';
import ChooseGoods from './pages/MainComponents/MainPage/ChooseGoods.js';
import Popular from './pages/MainComponents/MainPage/Popular.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <div className="container_sliger_cardsile">
      <Slider/>
      <CardSale/>
      </div>
      <Search/>
      <ChooseGoods/>
      <Popular/>
    </div>
  );
}

export default App;
