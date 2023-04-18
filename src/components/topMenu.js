import React,{useState,useEffect} from "react";
import styled from "styled-components";
import{RiSearchLine,RiShoppingCartLine} from 'react-icons/ri';
import {TbLogin} from 'react-icons/tb';
import pic from '../utils/images/logo.svg';
import CartDetail from "./cartDetail";


const TopMenu=()=>{
  const [showCartDetail,setShowCartDetail] = useState(false);

  
  return(
    <Wrapper>
      <div className="container">
        <div className="content-container">
          <div className="logo">
            <a className="logo-section" href="#">
              <div className="logo-pic" >
                <img className="image" src={pic} alt="pic"/>
              </div>
            </a>
            <div className="input-section">
              <div className="input-row">
                <div className="input-field">
                  <div className="input-container">
                    <div className="search-icon-container">
                      <RiSearchLine size={15} className="icon"/>
                    </div>
                    <div className="search-text">
                      <input className="input-field" type="text"/>
                      <div className="input-text">جستجو</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart">
            <a className="register" href='#'>
              <div className="register-link">
                <div className="register-logo">
                <TbLogin size={25}/>
                </div>
                ورود | ثبت نام
              </div>
            </a>
            <div className="cart-section" onMouseOver={()=>setShowCartDetail(true)} onMouseLeave={()=>setShowCartDetail(false)}>
              <a className="cart-link">
                <div className="cart-icon">
                  <span>
                  <RiShoppingCartLine  style={{transform:'scaleX(-1)'}} size={27} />
                  </span>
                </div>
                <div className="cart-count"> 
                  2
                </div>
              </a>
              {showCartDetail&&<CartDetail />}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display:relative;
  width:100%;
  background-color:#fff;
  position:sticky;
  top:0;
  z-index:999;
  .container{
    display:flex;
    justify-content:space-between;
    flex-grow:1;
    width:1200px;
    margin:0 auto;
    padding:0 10px 0 10px;
  }
  .content-container{
    width:100%;
    padding:10px 0 10px 0;
    display:flex;
    position:relative;
    direction:rtl;
  }
  .logo{
    display:flex;
    align-items:center;
    flex-grow:1;
    flex:1 1;
  }
  .logo-section{
    margin-left:5px;
    flex-shrink:0;
  }
  .logo-pic{
    width:115px;
    height:30px;
  }
  .image{
    width:100%;
    display:inline-block;
    overflow:hidden;
    position:relative;
    object-fit:contain;
  }
  .input-section{
    display:flex;
    flex-grow:1;
    margin-left:auto;
  }
  .input-row{
    position:relative;
    width:600px;
  }
  .input-field{
    display:flex;
    align-items:center;
    transition:all linear 0.3s;
    flex-grow:1;
    border-radius:5px;
    white-space:nowrap;
    overflow:hidden;
    font-size:1.5rem;
    margin-right:5px;
  }
  .input-container{
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-grow:1;
    min-width:0;
  }
  .search-icon-container{
    display:flex;
    cursor:pointer;
  }
  .icon{
    width:24px;
    height:24px;
    fill:#9e9fb1;
  }
  .search-text{
    display:flex;
    flex-direction:row;
    position:relative;
    flex-grow:1;
    padding-top:2px;
    padding-bottom:2px
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .input-field{
    display:flex;
    align-items:center;
    height:1;
    border:none;
    background-color:#f1f2f4;
    text-indent:55px;
  }
  .input-field:focus{
    outline:none;
  }
  .input-text{
    display:flex;
    align-items:center;
    font-size:1rem;
    font-weight:400;
    line-height:2.17;
    color:#767790;
    position:absolute;
    top:0;
    right:10px;
    text-indent:0px;
  }
  .cart{
    display:flex;
    align-items:center;
    justify-content:flex-end;
  }
  .logo-pic{
    margin-left:5px;
    flex-shrink:0;
  }
  
  .register{
    display:flex;
    position:relative;
    align-items:center;
    user-select:none;
    font-size:1rem;
    border:1px solid #e0e0e6;
    padding:calc(4px) calc(16px);
    border-radius:5px;
    white-space:nowrap;
    flex-shrink:0;
    margin-left:30px;
  }
  .register:hover{
    cursor:pointer;
  }
  .register-link{
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    flex-grow:1;
  }
  .register-logo{
    display:flex;
    margin-left:5px;
  }
  .cart-section{
    display:flex;
    flex-direction:column;
    position:relative;
  }
  .cart-link{
    display:inline-flex;
    position:relative;
    padding-top:5px;
    padding-bottom:5px;
    padding-left:0px;
    background-color:#fff;
    border-radius:5px;
  }
  .cart-icon{
    display:flex;
  }
  .cart-count{
    display:flex;
    position:absolute;
    top:21px;
    left:20px;
    align-items:center;
    justify-content:center;
    color:white;
    background-color:red;
    margin-right:0 ;
    margin-bottom:0;
    font-size:0.8rem;
    border-radius:5px;
    padding-left:6px;
    padding-right:6px;
  }
  
  
`
export default TopMenu;