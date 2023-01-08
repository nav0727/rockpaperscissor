import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #223a5f;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: 'Roboto';
  justify-content: center;
`

export const ScoreContainer = styled.div`
  border: 1px solid #fff;
  display: flex;
  background-color: transparent;
  width: 80vw;
  padding: 10px 20px 10px 20px;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 70vw;
  }
`

export const ScoreBg = styled.div`
  background-color: #fff;
  color: #223a5f;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 150px;
  margin-left: 2vw;
  text-align: center;
  justify-content: center;
  align-self: center;
  @media screen and (max-width: 678px) {
    width: 100px;
  }
`
export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ImagesContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-self: center;
  width: 80%;
  padding: 15px;
`
export const Image = styled.img`
  height: 50px;
  width: 60px;
  border-radius: 100px;
  margin: 10px;
  @media screen and (min-width: 768px) {
    width: 160px;
    height: 150px;
    border-radius: 100px;
  }
`
export const CustomButton = styled.button`
  background-color: transparent;
  margin-left: 10vw;
  outline: none;
  border: none;
`

export const RuleBtn = styled.button`
  align-self: flex-end;
  margin-right: 5vw;
  padding: 15px;
  border-radius: 5px;
  border: none;
  color: #223a5f;
  font-weight: bold;
  font-family: 'Roboto';
`
export const RuleContainer = styled.div`
  height: 300px;
  background-color: #fff;
  display: flex;
  width: 300px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 54vw;
    height: 80vh;
  }
`
export const RuleImage = styled.img`
  height: 250px;
  align-self: center;
  @media screen and (min-width: 768px) {
    height: 70vh;
    width: 50vw;
  }
`
export const CloseBtn = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: 1px solid gold;
  margin: 10px;
`
export const Heading = styled.p`
  font-weight: bold;
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 20px;
`
export const Headings = styled.h1`
  font-weight: bold;
  color: #fff;
  font-family: 'Roboto';
`
export const PlayBtn = styled.button`
  align-self: center;
  margin-right: 5vw;
  padding: 15px;
  border-radius: 5px;
  border: none;
  color: #223a5f;
  font-weight: bold;
  font-family: 'Roboto';
  margin-top: 2vh;
  margin-left: 4vw;
`

export const Paragraphs = styled.p`
  font-weight: bold;
  color: #fff;
  font-family: 'Roboto';
`
export const Btn = styled.div`
  text-align: center;
  align-items: center;
  align-self: center;
`
