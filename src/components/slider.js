import React from "react";
import ImageGallery from 'react-image-gallery';
import styled from "styled-components";

const SliderTop = ()=>{
  const images = [
    {
      original: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/038b4d2d8331c3510e7eecbceead428dd5ab3490_1679493632.jpg?x-oss-process=image/quality,q_95/format,webp' ,
    },
    {
      original: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/038b4d2d8331c3510e7eecbceead428dd5ab3490_1679493632.jpg?x-oss-process=image/quality,q_95/format,webp',
    },
    {
      original: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/038b4d2d8331c3510e7eecbceead428dd5ab3490_1679493632.jpg?x-oss-process=image/quality,q_95/format,webp' ,
    },{
      original : 'https://dkstatics-public.digikala.com/digikala-adservice-banners/038b4d2d8331c3510e7eecbceead428dd5ab3490_1679493632.jpg?x-oss-process=image/quality,q_95/format,webp',
    },
  ];
  return(
    <Wrapper>
          <ImageGallery  showBullets={true} showNav={true} showIndex={false} showFullscreenButton={false} showPlayButton={false} autoPlay={true} slideDuration={1200} showThumbnails={false} items={images} />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  width:100%;
  margin-top:10px;
`
export default SliderTop;
