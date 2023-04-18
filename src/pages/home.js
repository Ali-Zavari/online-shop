import Delete from "../components/delete";
import ScrollFadeMenu from "../components/scrollFadeMenu";
import TopMenu from "../components/topMenu";
import SliderTop from "../components/slider";
import Swiper from "../components/swiper";

const Home = ()=>{

  return(
    <div>
      <TopMenu/>
      <ScrollFadeMenu/>
      <SliderTop/>
      <Swiper/>
      <Delete/>
    </div>
  )
}
export default Home;
