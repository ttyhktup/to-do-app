import React from "react"
import { BsFillXSquareFill, BsFillPencilFill } from 'react-icons/bs'
import AddSticker from "./addSticker"

class Sticker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editForm: false
    }
  }
  sticker = this.props.sticker
  render() {
    if (this.state.editForm) {
      return (<AddSticker sticker={this.sticker} onEdit={this.props.onEdit}/>)
    }
    return (
      <div>
        <div className="sticker" style={{ backgroundColor: this.sticker.stickerColor }}>
        <BsFillXSquareFill onClick={() => this.props.onDelete(this.sticker.id)} className="edit-delete-button" />
        <BsFillPencilFill onClick={() => this.setState({
          editForm: !this.state.editForm 
        })} className="edit-delete-button" />

        <h3 className="sticker-title">{this.sticker.title}</h3>
        <p className="sticker-description">{this.sticker.description}</p>
        <div><div className="sticker-deadline">{this.sticker.deadline}</div>  </div>
        </div>
      </div>
    )
  }
}

export default Sticker