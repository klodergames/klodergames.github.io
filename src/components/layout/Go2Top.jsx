import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronUp } from 'react-icons/fa';


const StyledGo2Top = styled.a`
  display: none;
  position: fixed;
  bottom: 16px;
  right: 16px;
  cursor: pointer;
  background: var(--primary-color);
  padding: 16px 8px 8px 8px;
  color: white;
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: 16px;
  z-index: 15;
  text-decoration: none;

  &:hover {
    background-color: var(--hover-color);
    color: white;
  }
`;

const fn = () => {
  const el = document.querySelector('.go2top');
  if (el.style.display === 'block') {
    if (window.scrollY < 200) {
      el.style.display = 'none';
    }
  } else {
    if (window.scrollY > 200) {
      el.style.display = 'block';
    }
  }
};

const Go2Top = () => {
  useEffect(() => {
    window.addEventListener('scroll', fn);
    return () => {
      window.removeEventListener('scroll', fn);
    };
  }, []);
  return (
    <StyledGo2Top href="#" className={'go2top'}>
      <FaChevronUp size={25} />
    </StyledGo2Top>
  );
};

export default Go2Top;
