import logo from './logo.svg';
import './App.css';
import Thaifood from './Component.js/Thaifood';
import Newwelcom from './Component.js/Newwelcom';
import Whoarewe from './Component.js/Whoarewe';
import Move from './Component.js/Move';
import Menu from './Component.js/Menu';
import Menuhits from './Component.js/Menuhits';
import Menutitle from './Component.js/Menutitle';
import Reward from './Component.js/Reward';
import News from './Component.js/News';
import Video from './Component.js/Video';
import Review from './Component.js/Review';
import Email from './Component.js/Email';
import Question from './Component.js/Question';
import Location from './Component.js/Location';
import Lest from './Component.js/Lest';
import Nawbar from './Component.js/Nawbar';
import Ani from './Component.js/Ani';
import Drapdown from './Component.js/Drapdown';
function kathir(Menuhits){
  return(
    <>
    <div style={{display:"flex"}}>
    <Menu
    images={Menuhits.images}
    name={Menuhits.name}
    title={Menuhits.title}
    price={Menuhits.price}
    dis={Menuhits.dis}
   
    />
     </div>
     </>
  )
}
function App() {

  return (
    <>
    <Nawbar/>
    <Thaifood/>
    <Newwelcom/>
    <Whoarewe/>
    <Move/>
    <br/><br/>
    
    <Menutitle/> 
    
    <div  style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",padding:"10px 50px"}}>{Menuhits.map(kathir)}</div>
    <br/><br/>
    <Reward/> 
    <br/><br/>
  <News/><br/>
  <Video/>
  <br/><br/>
  <Review/>
  <Email/><br/><br/>
  <Question/><br/><br/>
  <Location/>
  <Lest/>
  
  
    </>
  );
}

export default App;
