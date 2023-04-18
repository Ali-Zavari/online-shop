import React from "react";
import styled from "styled-components";

const SwiperData=({name,price})=>{
  return(
    <Wrapper>
      <a className="container">
        <div className="inner-container">
          <div className="main-section">
            <div className="image-container">
              <div className="image-section">
                <img className="image" src="https://dkstatics-public.digikala.com/digikala-products/be7140faa89bf7df55512407a3ca3b898657b96b_1662469751.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"/>
              </div>
            </div>
            <div className="info-container">
              <div className="info-section">
                <div className="current-fee">
                  <div className="discount">
                    <span className="discount-text">47%</span>
                  </div>
                  <div className="fee">
                    <span>169000 تومان</span>
                  </div>
                </div>
                <div className="last-fee">
                  <div className="fee-section"><del>318000</del></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width:auto;
  height:auto;
  margin-left:2px;
  display:block;
  flex-shrink:0;
  position:relative;
  transition-property:transform,-webkit-transform;
  
  .container{
    width:182px;
    min-width:182px;
    max-width:182px;
    padding-right:16px;
    padding-left:16px;
    margin-left:0px;
    height:100%;
    padding-top:12px;
    padding-bottom:12px;
    cursor:pointer;
    position:relative;
    background-color:#fff;
    overflow:hidden;
    display:block;
    background-color:#fff;
  }
  .inner-container{
    overflow:hidden;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:stretch;
    cursor:pointer;
  }
  .main-section{
    position:relative;
    display:flex;
    flex-direction:column;
    cursor:pointer;
  }
  .image-container{
    margin-bottom:4px;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:stretch;
    cursor:pointer;
  }
  .image-section{
    margin-right:auto;
    margin-left:auto;
    align-items:stretch;
    display:flex;
    cursor:pointer;
    width:150px;
    height:150px;
    margin-bottom:4px;
  }
  .image{
    object-fit:contain;
    opacity:1;
    transition:opacity 0.2s ease;
    display:inline-block;
    border-radius:8px;
    width:100%;
    position:relative;
    overflow:hidden;
    cursor:pointer;
  }
  .info-container{
    display:flex;
    flex-direction:column;
    flex-grow:1;
    justify-content:flex-start;
    align-items:stretch;
    cursor:pointer;
  }
  .info-section{
    padding-top:4px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:stretch;
    cursor:pointer;
  }
  .current-fee{
    display:flex;
    justify-content:space-between;
    align-items:center;
    cursor:pointer;
  }
  .discount{
    height:30px;
    width:34px;
    color:#fff;
    padding-right:4px;
    padding-left:4px;
    border-radius:16px;
    background-color:#ef394e;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .discount-text{
    font-size:0.9rem;
    font-weight:500;
    line-height:2;
  }
  .fee{
    font-size:1rem;
    font-weight:500;
    line-height:2;
    gap:4px;
    display:flex;
    color:#3f4064;
    flex-grow:1;
    justify-content:flex-end;
    align-items:center;
    cursor:pointer;
  }
  .last-fee{
    padding-left:20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    cursor:pointer;
  }
  .fee-section{
    font-size:1rem;
    font-weight:400;
    line-height:2;
    color:#c3c3ce;
    margin-right:auto;
    text-decoration:line-through;
    display:block;
    align-self:flex-end;
    cursor:pointer;
  }

`

export default SwiperData;
