import {Component} from 'react'

import {Popup} from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  BgContainer,
  ScoreContainer,
  ScoreBg,
  Btn,
  GameContainer,
  Image,
  ImagesContainer,
  CustomButton,
  RuleBtn,
  RuleContainer,
  RuleImage,
  CloseBtn,
  Heading,
  Headings,
  PlayBtn,
  Paragraphs,
} from './styledcomponents'

class GameItem extends Component {
  state = {
    score: 0,
    isShow: true,
    imgUrl: '',
    randomImage: '',
    gameStatus: '',
  }

  renderBtn = () => (
    <Popup modal trigger={<RuleBtn>RULES</RuleBtn>}>
      {close => (
        <RuleContainer className="pop-con">
          <CloseBtn
            type="button"
            onClick={() => close()}
            // testid="closeButton"
            className="close-btn"
          >
            <RiCloseLine />
          </CloseBtn>

          <RuleContainer>
            <RuleImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </RuleContainer>
        </RuleContainer>
      )}
    </Popup>
  )

  onRock = () => {
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * choicesList.length)
    //  console.log(randomNumber)
    // console.log(choicesList[randomNumber].id)

    if (choicesList[randomNumber].id === 'PAPER') {
      this.setState({
        gameStatus: 'YOU LOSE',
        randomImage: choicesList[randomNumber].imageUrl,
      })
      this.setState(prev => ({score: prev.score - 1}))
    } else if (choicesList[randomNumber].id === 'SCISSORS') {
      this.setState({
        gameStatus: 'YOU WON',
        randomImage: choicesList[randomNumber].imageUrl,
      })
      this.setState(prev => ({score: prev.score + 1}))
    } else {
      this.setState({
        gameStatus: 'IT IS DRAW',
        randomImage: choicesList[randomNumber].imageUrl,
      })
    }

    this.setState(prev => ({
      isShow: !prev.isShow,
      imgUrl:
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    }))
  }

  onPaper = () => {
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * choicesList.length)
    //  console.log(randomNumber)

    if (choicesList[randomNumber].id === 'SCISSORS') {
      this.setState({
        gameStatus: 'YOU LOSE',
        randomImage: choicesList[randomNumber].imageUrl,
      })
      this.setState(prev => ({score: prev.score - 1}))
    } else if (choicesList[randomNumber].id === 'ROCK') {
      this.setState({
        gameStatus: 'YOU WON',
        randomImage: choicesList[randomNumber].imageUrl,
      })
      this.setState(prev => ({score: prev.score + 1}))
    } else {
      this.setState({
        gameStatus: 'IT IS DRAW',
        randomImage: choicesList[randomNumber].imageUrl,
      })
    }

    this.setState(prev => ({
      isShow: !prev.isShow,
      imgUrl:
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    }))
  }

  onScissor = () => {
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * choicesList.length)
    //  console.log(randomNumber)
    //  console.log(choicesList[randomNumber].id)

    if (choicesList[randomNumber].id === 'PAPER') {
      this.setState({
        gameStatus: 'YOU WON',
        randomImage: choicesList[randomNumber].imageUrl,
      })
      this.setState(prev => ({score: prev.score + 1}))
    } else if (choicesList[randomNumber].id === 'ROCK') {
      this.setState({
        gameStatus: 'YOU LOSE',
        randomImage: choicesList[randomNumber].imageUrl,
      })
      this.setState(prev => ({score: prev.score - 1}))
    } else {
      this.setState({
        gameStatus: 'IT IS DRAW',
        randomImage: choicesList[randomNumber].imageUrl,
      })
    }

    this.setState(prev => ({
      isShow: !prev.isShow,
      imgUrl:
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    }))
  }

  onPlay = () => {
    this.setState(prev => ({
      isShow: !prev.isShow,
    }))
  }

  render() {
    const {score, isShow, imgUrl, gameStatus, randomImage} = this.state
    return (
      <BgContainer>
        <ScoreContainer>
          <Headings>
            Rock <br />
            Paper <br />
            Scissors
          </Headings>
          <ScoreBg>
            <Heading>Score</Heading>
            <Heading>{score}</Heading>
          </ScoreBg>
        </ScoreContainer>

        {isShow ? (
          <GameContainer>
            <ImagesContainer>
              <CustomButton
                type="button"
                data-testid="rockButton"
                onClick={this.onRock}
              >
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
                  alt="ROCK"
                />
              </CustomButton>

              <CustomButton
                type="button"
                data-testid="scissorsButton"
                onClick={this.onScissor}
              >
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
                  alt="SCISSORS"
                />
              </CustomButton>
            </ImagesContainer>
            <CustomButton
              type="button"
              data-testid="paperButton"
              onClick={this.onPaper}
            >
              <Image
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
                alt="PAPER"
              />
            </CustomButton>
          </GameContainer>
        ) : (
          <GameContainer>
            <ImagesContainer>
              <div>
                <Paragraphs>YOU</Paragraphs>
                <Image src={imgUrl} alt="your choice" />
              </div>
              <div>
                <Paragraphs>OPPONENT</Paragraphs>
                <Image src={randomImage} alt="opponent choice" />
              </div>
            </ImagesContainer>
            <Btn>
              <Paragraphs>{gameStatus}</Paragraphs>
              <PlayBtn onClick={this.onPlay}>PLAY AGAIN</PlayBtn>
            </Btn>
          </GameContainer>
        )}

        {this.renderBtn()}
      </BgContainer>
    )
  }
}

export default GameItem
