import React from 'react';
import Header from './component/header';
import Sticker from './component/sticker';
import AddSticker from './component/addSticker';
import userEvent from '@testing-library/user-event';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      headerTitle: "TO-DO",
      stickerList: [
        {
          id: 1,
          title: "Chores",
          description: "Do the dishes after lunch",
          stickerColor: "",
          deadline: null
        },
       
      ]
    }
    this.addSticker = this.addSticker.bind(this)
    this.deleteSticker = this.deleteSticker.bind(this)
    
    this.inputClick = this.inputClick.bind(this)
  }


  render() {

    return (<div>
      <Header title={this.state.headerTitle}
        onClick={this.inputClick} />

      <main className='sticker-container'>
        <AddSticker onAdd={this.addSticker} />
        {this.state.stickerList.map((el) => (
          <Sticker onEdit={this.addSticker} onDelete={this.deleteSticker} key={el.title} sticker={el} /> 
        ))}
      </main>

    </div>
    );
  }

  deleteSticker(id) {
    this.setState({
      stickerList: this.state.stickerList.filter((el) => el.id !== id)
    })
    this.print()
  }

  addSticker(sticker) {
    if (sticker.id && sticker.id !== 0) {
      let stickerList = this.state.stickerList
      for (let i = 0; i < stickerList.length; i++) {
        if (stickerList[i].id === sticker.id) {
          stickerList[i] = sticker
        }
      }
      this.setState({ stickerList: stickerList })
    } else {
      sticker.id = this.state.stickerList.length + 1
      this.setState({ stickerList: [...this.state.stickerList, sticker ] })
    }
    this.print()
  }

  inputClick() {
    let headerTitleChange = this.state.headerTitle == "TO-DO" ? "TO-DO TO-DO TO-DO..." : "TO-DO";
    this.setState({ headerTitle: headerTitleChange })
  }

  print() {
    console.log(this.state.stickerList)
  }
}

export default App;
