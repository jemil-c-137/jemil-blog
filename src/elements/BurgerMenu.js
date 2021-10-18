import styled from "styled-components"

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  transition: all 0.3s;
  transform: ${props => (props.show ? "translateX(0)" : "translateX(120%)")};
  background: ${props => props.theme.global.bg};
  overflow: hidden;
  border: 5px dashed red;
  border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
  border-image-slice: 1;


  ul {
    font-size: 2rem;
  }

  li:not(:last-child) {
    margin-bottom: 4rem;
  }
`

export const Burger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;
  position: relative;

  div {
    width: 1.5rem;
    height: 0.1rem;
    background: ${props => props.theme.global.color};
    border-radius: 1px;
    transform-origin: 1px;
  }
`
