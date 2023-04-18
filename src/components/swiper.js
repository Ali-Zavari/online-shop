import React from "react";
import styled from "styled-components";
import SwiperData from "./swiper-data";
import data from '../data/data';
import pic1 from '../utils/images/Amazings.svg';
import pic2 from '../utils/images/box.png';
import {IoIosArrowBack} from 'react-icons/io';

const Swiper = ()=>{
  // const [{mobile:[{name,price}]}] = data;
  const [{mobile}] = data;
  // const [{name}] = mobile;
  // console.log([mobile])
  // console.log(name)
  return(
    <Wrapper>
      <div className="container">
        <div className="main-container">
        <div className="head-cart">
          <div className="cart-contain">
            <a href="#" className="cart-section">
              <div className="cart-section-text">
                <img className="cart-section-text-img" src={pic1}/>
              </div>
              <div className="cart-section-image">
                <img className="cart-section-image-pic" src={pic2}/>
              </div>
              <div className="cart-section-botton">
                مشاهده همه
                <IoIosArrowBack size={14}/>
              </div>
            </a>
          </div>
        </div>
          {
            mobile.map((datas)=>{
              const {name} = datas;
              return <SwiperData {...datas} key={name}/>
            })
          }
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper  = styled.section`
  display:flex;
  flex-wrap:nowrap;
  justify-content:stretch;
  overflow:hidden;
  position:relative;
  padding-right:2px;
  padding-left:2px;
  margin-top:24px;
  padding-top:20px;
  padding-bottom:20px;
  border-radius:16px;
  direction:rtl;
  background-color:#ef4056;
  width:60%;
  margin:20px auto;
  .container{
    touch-action:pan-y;
    position:relative;
    overflow:hidden;
    list-style:none;
    padding:0;
    z-index:1;
    margin-left:auto;
    margin-right:auto;
  }
  .main-container{
    transform:translate3d(0,0,0);
    transition-duration:0;
    transition-timing-function:ease-in-out;
    margin:0 auto;
    position:relative;
    width:100%;
    height:100%;
    display:flex;
    z-index:1;
    box-sizing:content-box;
    transition-property:transform;
    border-top-right-radius:16px;
    border-bottom-right-radius:16px;
  }
  .head-cart{
    width:auto;
    height:auto;
    margin-left:2px;
    display:block;
    flex-shrink:0;
    position:relative;
    transition-property:transform;
  }
  .cart-contain{
    margin-top:auto;
    margin-bottom:auto;
    margin-right:20px;
    margin-left:8px;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  .cart-section{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  .cart-section-text{
    width:92px;
    height:77px;
    cursor:pointer;
  }
  .cart-section-text-img{
    object-fit:contain;
    opacity:1;
    transition:opacity 0.2s ease;
    display:inline-block;
    width:100%;
    overflow:hidden;
    position:relative;
  }
  .cart-section-image{
    width:145px;
    height:115px;
    margin-top:8px;
    display:block;
  }
  .cart-section-image-pic{
    object-fit:contain;
    opacity:1;
    transition:opacity 0.2s ease;
    display:inline-block;
    width:100%;
    overflow:hidden;
    position:relative;
  }
  .cart-section-botton{
    font-size:1rem;
    font-weight:500;
    line-height:2;
    color:#fff;
    margin-top:4px;
    display:flex;
    justify-content:center;
    align-items:center;
  }
`

export default Swiper;
