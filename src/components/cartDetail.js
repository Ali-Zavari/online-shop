import React, { useState } from "react";
import styled from "styled-components";
import {RiCheckboxBlankFill} from 'react-icons/ri';
import {IoIosArrowBack} from 'react-icons/io';
import pic from '../utils/images/360d6643c1b7bd28ed208426792b395d85e18589_1651391693.jpg';
import {VscCircleLargeFilled} from 'react-icons/vsc';
import {BiSave} from 'react-icons/bi';
import {TbTruckDelivery,TbPointFilled} from 'react-icons/tb';
import {FaSpaceShuttle} from 'react-icons/fa';
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai';


const CartDetail = ()=>{

  const [checkbox,setCheckBox] = useState(false);
  return(
    <Wrapper>
      <div className="head-container">
        <span className="text cart-amount">کالا: 2</span>
        <a className="cart-view text">
          مشاهده سبد خرید
          <div className="info-icon">
            <IoIosArrowBack/>
          </div>
        </a>
      </div>
      {/* body */}
      <div className="body-container">
        <div className="list-container">
          {/* cartList */}
          <div className="cart-list-grid">
            {/* picture */}
            <div className="pic-list">
              <a className="pic-link" href='#'>
                <picture>
                  <img className="image-pic" src={pic} width="130px" />
                </picture>
              </a>
            </div>
            {/* description */}
            <div className="desc-list">
              <div>
                <h3 className="desc-text">گوشی موبایل سامسونگ مدل Galaxy A23 SM-A235 دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت </h3>
                <div className="color-desc">
                  <div className="color-desc-icon">
                    <VscCircleLargeFilled size={20} color="black"/>
                  </div>
                  <p className="color-icon-name">مشکی</p>
                </div>
                <div className="anbar-desc">
                  <span className="anbar-location">
                    <div className="drive-ersal">
                      <BiSave size={20} color="#19bfd3"/>
                    </div>
                    <span className="mahal-ersal">موجود در انبار دیجی کالا</span>
                  </span>
                  <ul className="anbar-ersal">
                    <li className="anbar-ersal-list">
                      <div className="location-point">
                        <div style={{display:'flex'}}>
                          <TbPointFilled size={13} color="#19bfd3"/>
                        </div>
                        <span className="bullet-top"></span>
                        <span className="bullet-bottom"></span>
                      </div>
                      <div className="drive-ersal">
                        <TbTruckDelivery size={20} color="#e6123d" style={{transform:'scaleX(-1)'}}/>
                      </div>
                      <p className="mahal-ersal">ارسال دیجی کالا</p>
                    </li>
                    <li className="anbar-ersal-list">
                      <div className="location-point">
                        <div style={{display:'flex'}}>
                          <TbPointFilled size={13} color="#19bfd3"/>
                        </div>
                        <span className="bullet-top"></span>
                      </div>
                      <div className="drive-ersal">
                        <FaSpaceShuttle size={21} color="#1028ff" style={{transform:'rotate(-90deg)'}}/>
                      </div>
                      <p className="mahal-ersal">ارسال فوری(شهرتهران)</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* increase or decrease */}
            <div className="increase">
              <div className="increase-justify">
                <div className="increase-button">
                  <AiOutlinePlus size={20}/>
                </div>
                <span className="amount-show">
                  <span className="amount-show-number">2</span>
                  <small className="amount-max">حداکثر</small>
                </span>
                <div className="decrease-button">
                  <AiOutlineMinus size={20}/>
                </div>
              </div>
            </div>
            {/* amount */}
            <div className="amount">
              <div className="amount-number">
                <span className="amount-number-fee">17,198,000</span>
                <div className="rial-icons">
                  ریال
                </div>
              </div>
            </div>
          </div>
          {/* ensurance */}
          <div className="ensurance">
            <div className="checkbox-container">
              <input type="checkbox" className="checkbox-input"/>
              <span className="checkbox-icon">
                <RiCheckboxBlankFill size={20} fill="currentColor" color={!checkbox?'white':'#0e92c5'} onClick={()=>setCheckBox(!checkbox)}/>
              </span>
            </div>
            <div className="checkbox-desc">
              <div className="text">بیمه تجهیزات دیجیتال - بیمه پارسیان </div>
              <div className="ensurance-fee">
                <div className="ensurance-number">
                  <span className="amount-number-fee-small">234,350</span>
                </div>
                ریال
              </div>
            </div>
            <div className="checkbox-info text">
              جزییات
              <div className="info-icon">
                <IoIosArrowBack/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="footer-container">
        <div className="final-order">
          <p className="text-p">مبلغ قابل پرداخت</p>
          <div className="order-ammount">
            <span className="amount-number-fee">17,198,000</span>
            <div className="rial-icon">
              ریال
            </div>
          </div>
        </div>
        <a href="#" className="final-register">
          <div className="register-button">ورود و ثبت سفارش</div>
        </a>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  position:absolute;
  z-index:9999;
  top:100%;
  left:0;
  width:400px;
  border-radius:8px;
  box-shadow:0 1px 1px rgba(0,0,0,0.14),0 4px 8px rgba(0,0,0,0.3); 
  background-color:#fff;
  display:visible;
  .head-container{
    display:flex;
    align-items:center;
    padding:12px 8px;
    justify-content:space-between;
  }
  .body-container{
    max-height:360px;
    overflow:auto;
    padding:12px 8px;
  }
  .text{
    font-size:1rem;
    font-weight:400;
    line-height:2.17;
  }
  .text-p{
    font-size:1rem;
    font-weight:400;
    line-height:1.2;
    margin:0 0 5px 0;
  }
  .cart-amount{
      color:#5a5c7a;
    }
  .cart-view{
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:row;
      margin-right:auto;
      color:#19bfd3;
    }
  .body-container{
      max-height:360px;
      overflow:auto;
    }
  .list-container{
      padding-top:16px
      padding-bottom:16px
      margin-right:12px;
      margin-left:12px;
    }
  .cart-list-grid{
      display:grid;
      grid-template-columns:116px 1fr;
      grid-row-gap:12px;
    }
  .pic-list{
      display:flex;
      flex-direction:column;
      align-items:center;
    }
  .pic-link{
    position:relative;
    width:114px;
    height:114px;
  }
  .image-link{
    object-fit:contain;
    width:100%;
    opacity:1;
    transition:opacity 0.2s; 
    display:inline-block;
    position:relative;
    overflow:hidden;
  }
    
  .desc-list{
      overflow:hidden;
    }

  .increase{
      display:flex;
      align-items:center;
      flex-direction:column;
    }
    
  .amount{
      display:flex;
      align-items:center;
      justify-content:space-between;
      margin-right:30px;
    }
  .amount-number{
      display:flex;
      justify-content:flex-start;
      align-items:center;
      margin-left:16px;
    }
  .amount-number-fee{
      font-size:1.3rem;
      font-weight:700;
      line-height:1.2;
  }
  .amount-number-fee-small{
    font-size:1.2rem;
    font-weight:700;
    line-height:2;
  }
  .rial-icon{
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-right:4px;
    }
  .ensurance{
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:20px 12px 20px 12px;
      margin-top:calc(12px);
      border:1px solid #e0e0e6;
      border-radius:8px;

  }
  .ensurance-fee{
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  .checkbox-container{
      margin-left:16px;
      display:flex;
      align-items:center;
      cursor:pointer;
      padding-top:4px;
      padding-bottom:4px;
    }
  .checkbox-input{
      position:absolute;
      visibility:hidden;
      background-color:transparent;
    }
  .checkbox-icon{
      display:inline-flex;
      justify-content:center;
      align-items:center;
      cursor:pointer;
      border-radius:4px;
      flex-shrink:0;
      border:0.2rem solid #3f4064;
      background-color:#fff;
      width:10px;
      height:10px;
      transition:all 0.15s cubic-bezier(0.4,0,0.2,1);
    }
  .checkbox-desc{
      display:flex;
      align-items:flex-start;
      flex-direction:column;
      justify-content:space-between;
      flex-grow:1;
    }
  .ensurance-number{
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:4px;
      color:#3f4064;
      flex-grow:1;
      padding-top:4px;
      flex-direction:column;
      margin-left:4px;
    }
  .checkbox-info{
      display:flex;
      align-items:center;
      align-self:flex-end;
      cursor:pointer;
      color:#19bfd3;
    }
  .footer-container{
      display:flex;
      align-items:center;
      position:relative;
      padding:8px 12px 8px 12px;
      border-top:1px solid #f1f2f4;
    }
  .final-order{
      display:flex;
      flex-direction:column;
      margin-left: auto;
      padding-top:10px;
      padding-bottom:10px;
    }
  .order-ammount{
      display:flex;
      align-items:center;
      justify-content:center;
      margin-top:5px;
    }
  .final-register{
      display:flex;
      align-items:center;
      position:relative;
      background-color:#ef4056;
      color:#fff;
      border:1px solid #ef4056;
      border-radius:4px;
      padding:calc(12px) calc(16px);
      margin-right:auto;
      user-select:none;
      cursor:pointer;
      outline:none;
      overflow:hidden;
      transition:all 0.3s ease-in-out;
    }
  .register-button{
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    flex-grow:1;
  }
  .desc-list{
    overflow:hidden;
    margin-right:20px;
  }
  .desc-text{
    font-size:1rem;
    font-weight:700rem;
    line-height:1.2;
    color:#23254e;
    margin-bottom:8px;
  }
  .color-desc{
    display:flex;
  }
  .color-desc-icon{
    display:flex;
    align-items:center;
    margin-left:4px;
    margin-top:4px;
  }
  .color-icon-name{
    font-size:1rem;
    font-weight:400;
    line-height:1.2;
    color:#5a5c7a;
  }
  .anbar-desc{
    display:flex;
    flex-direction:column;
    width:100%;
    position:relative;
  }
  .anbar-location{
    display:flex;
    align-items:center;
    margin-bottom:4px;
  }
  .anbar-ersal{
    display:flex;
    flex-direction:column;
  }
  .anbar-ersal-list{
    display:flex;
    align-items:center;
    margin-left:12px;
  }
  .location-point{
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    align-self:stretch;
    width:18px;
    min-width:18px;
  }
  .drive-ersal{
    display:flex;
    margin-right:4px;
    margin-left:4px;
  }
  .mahal-ersal{
    font-size:1rem;
    font-weight:400;
    line-height:1.2;
    color: #767790;
  }
  .bullet-top{
    display:block;
    position:absolute;
    height:calc(50% - 5px);
    left:50%;
    transform:translateX(-50%);
    width:1px;
    top:0;
    background-color:#e0e0e6;
  }
  .bullet-bottom{
    display:block;
    position:absolute;
    height:calc(50% - 5px);
    width:1px;
    left:50%;
    transform:translateX(-50%);
    bottom:0;
    background-color:#e0e0e6;
  }
  .increase{
    display:flex;
    align-items:center;
    flex-direction:column;
    margin-right:20px;
  }
  .increase-justify{
    display:flex;
    align-items:center;
    justify-content:space-between;
    user-select:none;
    border-radius:8px;
    width:102px;
    max-width:102px;
    min-height:44px;
    max-height:44px;
    padding-right:16px;
    padding-left:16px;
    border:1px solid #e0e0e6;
  }
  .increase-button{
    display:flex;
    cursor:pointer;
    color:#ef4056;
  }
  .decrease-button{
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    color:#ef4056;
    cursor:pointer;
  }
  .amount-show{
    display:flex;
    flex-direction:column;
  }
  .amount-show-number{
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    font-size:1rem;
    font-weight:700;
    line-height:1.2;
    max-height:20px;
    top:4px;
    color:#ef4056;
  }
  .amount-max{
    font-size:1rem;
    font-weight:400;
    line-height:1.2;
    color:#c3c3ce;
  }
`
export default CartDetail;

