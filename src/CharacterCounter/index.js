import {Component} from 'react'

import {v4} from 'uuid'

import {
  MainContainer,
  LeftMaintContainer,
  HeadContainer,
  RightMaintContainer,
  NoUserListImage,
  Input,
  Div,
  AddButton,
  CharListUl,
  Para,
} from './Css'

class CharacterCounter extends Component {
  state = {charactersList: [], inputText: ''}

  renderZerolistVIew = () => {
    return (
      <div>
        <NoUserListImage
          src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
          alt="no user inputs"
        />
      </div>
    )
  }

  renderListView = () => {
    const {charactersList} = this.state
    return (
      <CharListUl>
        {charactersList.map(each => (
          <li key={each.id}>
            <Para>
              {each.charName} : <span>{each.charName.length}</span>
            </Para>
          </li>
        ))}
      </CharListUl>
    )
  }

  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onClickToAdd = event => {
    event.preventDefault()
    const {inputText} = this.state
    const newObject = {
      charName: inputText,
      id: v4(),
    }
    this.setState(prevState => ({
      charactersList: [...prevState.charactersList, newObject],
    }))
    this.setState({inputText: ''})
  }

  render() {
    const {charactersList, inputText} = this.state

    return (
      <MainContainer>
        <LeftMaintContainer>
          <HeadContainer>Count the characters like a Boss...</HeadContainer>
          {charactersList.length === 0
            ? this.renderZerolistVIew()
            : this.renderListView()}
        </LeftMaintContainer>
        <RightMaintContainer>
          <HeadContainer center="center" color="#ffc533">
            Character Counter
          </HeadContainer>
          <Div onSubmit={this.onClickToAdd}>
            <Input
              value={inputText}
              onChange={this.onChangeInputText}
              placeholder="Enter the Characters here"
              type="text"
            />
            <AddButton type="submit">Add</AddButton>
          </Div>
        </RightMaintContainer>
      </MainContainer>
    )
  }
}

export default CharacterCounter
