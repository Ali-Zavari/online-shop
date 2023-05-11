import React from "react";
import styled from "styled-components";

const SingleCategory = ({name,image})=>{

  return(
    <Wrapper>
      <div>
        {/* <div>{name}</div> */}
        <img src={image} alt="pic" className="image"/>
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
  width:calc((100%-48px)/4.2);
  display:block;
  position:relative;
  margin-right:10px;
  margin-top:0;
  border-radius:16px;
  .image{
  object-fit:cover;
  border-radius:16px;
  opacity:1;
  transition:opacity 0.2s;
  display:inline-block;
  width:100%;
  position:absolute;
  left:0;
  top:0;
  overflow:hidden;
}
`



export default SingleCategory;
