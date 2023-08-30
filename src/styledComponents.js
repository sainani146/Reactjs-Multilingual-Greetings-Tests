import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 666px) {
    margin-top: 200px;
  }
`
export const Title = styled.h1`
  font-family: 'roboto';
  font-size: 30px;
`
export const ButtonsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`
export const ImgContainer = styled.img`
  width: 50%;
`
