import {Component} from 'react'
import {
  MainContainer,
  Title,
  ButtonsContainer,
  ImgContainer,
} from './styledComponents'

import Buttons from './Components/Buttons'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeTab: languageGreetingsList[0]}

  onChangeTab = id => {
    const index = languageGreetingsList.findIndex(e => e.id === id)
    this.setState({activeTab: languageGreetingsList[index]})
  }

  render() {
    const {activeTab} = this.state
    const tab = activeTab.id

    return (
      <MainContainer>
        <Title>Multilingual Greetings</Title>
        <ButtonsContainer>
          {languageGreetingsList.map(each => (
            <Buttons
              key={each.id}
              data={each}
              tab={tab}
              onChangeTab={this.onChangeTab}
            />
          ))}
        </ButtonsContainer>
        <ImgContainer src={activeTab.imageUrl} alt={activeTab.imageAltText} />
      </MainContainer>
    )
  }
}

export default App
