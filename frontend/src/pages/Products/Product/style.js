import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  gap:15px;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Text = styled.h5`
font-size:20px;
`
const Container = styled.div`
  margin: 5px;
  min-width: 280px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
  height: 320px;
  display: flex;
  align-items: center;
  gap:15px;
  background-color: #fff;
  border-radius: 20px;
  flex-direction:column;
  position: relative;
  &:hover ${Info} {
  border-radius: 20px;
  opacity: 1;
  }
`;

const Image = styled.img`
  height: 70%;
  border-radius: 20px;
  width: 100%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

export { Info, Container, Image, Icon, Text };
