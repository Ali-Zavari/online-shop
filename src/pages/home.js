import Delete from "../components/delete";
import ScrollFadeMenu from "../components/scrollFadeMenu";
import TopMenu from "../components/topMenu";
import SliderTop from "../components/slider";
import Swiper from "../components/swiper";
import CategoryMost from "../components/categoryMost";

const Home = ()=>{

  return(
    <div>
      <TopMenu/>
      <ScrollFadeMenu/>
      <SliderTop/>
      <Swiper/>
      <CategoryMost/>
      <Delete/>
    </div>
  )
}
export default Home;
