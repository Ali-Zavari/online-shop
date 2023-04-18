import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {RiMenuFill} from 'react-icons/ri';
import {IoStorefrontSharp} from 'react-icons/io5';
import {GiPyre} from 'react-icons/gi';
import {TbShoppingCartDiscount} from 'react-icons/tb';
import {CiPercent} from 'react-icons/ci';
import {SlLocationPin} from 'react-icons/sl';

const ScrollFadeMenu=()=>{

  const [showTopBtn, setShowTopBtn] = useState(false);
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 100) {                
    //             setShowTopBtn(true);
    //         } else {
    //             setShowTopBtn(false);
    //         }
    //     });
    // }, []);

    // const goToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior:'smooth',
    //     });
    // };
    useEffect(()=>{
    let oldValue = 0;
    window.addEventListener('scroll', ()=>{
      let newValue = window.pageYOffset;
      if(oldValue - newValue < 0){
          setShowTopBtn(true);
      } else if(oldValue - newValue > 0){
          setShowTopBtn(false);
      }
      oldValue = newValue;
      });
    },[])
    
    
    // if(showTopBtn){
    return (
        <Wrapper style={{transform:`${showTopBtn?'translateY(-90%)':"translateY(0)"}`}}>
            <div className="container">
              <div className="category">
                <div className="category-container">
                  <div className="category-items">
                    <div className="category-sub-items">
                      <div className="category-icon">
                        <RiMenuFill size={20}/>
                      </div>
                      دسته بندی کالاها
                    </div>
                  </div>
                </div>
                <div className="sub-category">
                  <div className="market">
                    <a className="market-link">
                      <div className="market-icon"> 
                        <IoStorefrontSharp/>
                      </div>
                      سوپرمارکت
                    </a>
                  </div>
                  <div className="best-sold">
                    <a className="market-link">
                      <div className="market-icon">
                        <GiPyre/>
                      </div>
                      پرفروش ترین ها
                    </a>
                  </div>
                  <div className="offer">
                    <a className="market-link">
                      <div className="market-icon">
                        <TbShoppingCartDiscount/>
                      </div>
                      تخفیف ها وپیشنهادها
                    </a>
                  </div>
                  <div className="wonder">
                    <a className="market-link">
                      <div className="market-icon">
                        <CiPercent/>
                      </div>
                      شگفت انگیزها
                    </a>
                  </div>
                </div>
                <div className="sub-category">
                  <div className="market">
                    <a className="market-link">
                      سوالی دارید ؟
                    </a>
                  </div>
                  <div className="offer">
                    <a className="market-link">
                      دردیجی کالا بفروشید !
                    </a>
                  </div>
                </div>
              </div>
              <div className="category">
                <div className="sub-category">
                  <div className="offer">
                    <a className="market-link">
                      <div className="market-icon">
                        <SlLocationPin/>
                      </div>
                      <div className="location-text">ارسال به تهران</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </Wrapper>
    );
    // }
}
const Wrapper=styled.section`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    flex-grow:1;
    transition:all 0.3s linear;
    min-height:36px;
    background-color:#fff;
    flex-direction:column;
    direction:rtl;
    position:sticky;
    top:60px;
    z-index:998;
    border-bottom:1px solid rgba(158, 159, 177,0.5);
  
  .container{
    display:flex;
    flex-grow:1;
    width:100%;
    margin:0 auto;
    justify-content:space-between;
    padding-right:5px;
    padding-left:5px;
    position:relative;
    max-width:1675px;
    .location{
      display:flex;
      align-items:center;
      cursor:pointer;
      padding-bottom:5px;

    }
    .category{
      display:flex;
      align-self:stretch;
      position:relative;
      align-items:center;

    }
    .category-container{
      display:flex;
      position:relative;
      margin-left:15px;
    }
    .category-items{
      display:flex;
      align-items:center;
      height:100%;

    }
    .category-sub-items{
      display:flex;
      align-items:center;
      cursor:pointer;
      white-space:nowrap;
      font-size:1rem;
      font-weight:700;
      line-height:2.15;
      color:#3f4064;
    }
    .category-icon{
      display:flex;
      margin-left:5px;
      color:#9e9fb1;
    }
    .sub-category{
      display:flex;
      position:relative;
    }
    .market::before{
      content:"";
      width:1px;
      transform:translateY(-50%);
      top:50%;
      right:0;
      position:absolute;
      background-color:#e0e0e6;
      height:16px;
    }
    .market{
      display:flex;
      align-items:center;
      padding-right:5px;
      padding-left:5px;
      height:100%;
      margin-right:10px;
      margin-left:10px;
    }
    .market-link{
      display:flex;
      align-items:center;
      cursor:pointer;
      white-space:nowrap;
      font-size:0.9rem;
      font-weight:400;
      line-height:2.17;
      color:#5a5c7a;
    }
    .market-icon{
      display:flex;
      margin-left:5px;
      color:#9e9fb1;
    }
    .best-sold{
      display:flex;
      align-items:center;
      padding-right:5px;
      padding-left:5px;
      margin-right:10px;
      margin-left:10px;
      height:100%;
    }
    .offer{
      display:flex;
      align-items:center;
      padding-right:5px;
      padding-left:5px;
      margin-right:10px;
      margin-left:10px;
      height:100%;
    }
    .wonder{
      display:flex;
      align-items:center;
      padding-right:5px;
      padding-left:5px;
      margin-right:10px;
      margin-left:10px;
      height:100%;
    }
    .location-text{
      font-size:1rem;
      font-weight:400;
      line-height:2.17;
      display:-webkit-box;
      -webkit-line-clamp:1;
      -webkit-box-orient:vertical;
      overflow:hidden;
      margin-right:10px;
      color:#3f4064;
    }
  }
`
export default ScrollFadeMenu;


