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
          title: "1",
          description: "1"
        },
        {
          id: 2,
          title: "2",
          description: "2"
        },
        {
          id: 3,
          title: "3",
          description: "3"
        },
        {
          id: 4,
          title: "4",
          description: "4"
        }
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

      <main>
        <AddSticker onAdd={this.addSticker} />
        {this.state.stickerList.map((el) => (
          <Sticker onEdit={this.addSticker} onDelete={this.deleteSticker} key={el.title} sticker={el} />
        ))}
      </main>

    </div>
    );
  }

  deleteSticker(title) {
    this.setState({
      stickerList: this.state.stickerList.filter((el) => el.title !== title)
    })
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
      const id = this.state.stickerList.length + 1
      this.setState({ stickerList: [...this.state.stickerList, { id, ...sticker }] })
    }

  }

  inputClick() {
    let headerTitleChange = this.state.headerTitle == "TO-DO" ? "TO-DO TO-DO TO-DO..." : "TO-DO";
    this.setState({ headerTitle: headerTitleChange })
  }
}

export default App;
