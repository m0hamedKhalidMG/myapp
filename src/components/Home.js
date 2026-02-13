import React from 'react';
import styled from 'styled-components';
import batryImage from '../images/m.jpeg';

const PageContainer = styled.div`
  font-family: '29LT Riwaya', sans-serif;
  direction: rtl;
  background-color: #f1ede1;
  text-align: center;
  padding: 40px 20px;
  position: relative;
`;


const ArabicTitle = styled.h1`
  color: #6b0f1a;
  font-size: 42px;
  margin-bottom: 30px;

  @media (min-width: 1024px) {
    font-size: 60px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width:  400px;
  height: 400px;
  margin: 0 auto;
  background-image: url(${batryImage});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

const EnglishText = styled.h2`
  margin-top: 30px;
  color: #6b0f1a;
  font-size: 28px;
  direction: ltr;

  @media (min-width: 1024px) {
    font-size: 36px;
  }
`;

const Home = () => {
  return (
    <PageContainer>


      <ArabicTitle>
        بوصلتنا نحو أجمل الوجهات
      </ArabicTitle>

      <ImageWrapper />

      <EnglishText>
        Our compass to the most beautiful destinations
      </EnglishText>

    </PageContainer>
  );
};

export default Home;
