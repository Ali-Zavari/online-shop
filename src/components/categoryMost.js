import React from "react";
import styled from "styled-components";
import SingleCategory from "./singleCategory";
import data from '../data/data';


const CategoryMost =()=>{

  const [{khorak}] = data;

  return(
    <Wrapper>
      <div className="container">
        {
          khorak.map((cata)=>{
            const {name}=cata;
            
            return <SingleCategory {...cata} key={name}/>
          })
        }
      </div>
    </Wrapper>
  )
} 
const Wrapper=styled.section`
  padding-right:16px;
  padding-left:16px;
  margin:0 auto;
  width:100%;
  max-width:1336px;
  .container{
    margin-top:24px;
    margin-right:0;
    margin-left:0;
    display:flex;
    flex-wrap:wrap;
  }

`

export default CategoryMost;
