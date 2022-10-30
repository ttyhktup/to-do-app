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
      <div className="sticker-container">
        <div className="sticker">
        <BsFillXSquareFill onClick={() => this.props.onDelete(this.sticker.title)} className="edit-delete-button" />
        <BsFillPencilFill onClick={() => this.setState({
          editForm: !this.state.editForm 
        })} className="edit-delete-button" />

        <h3>{this.sticker.title}</h3>
        <p>{this.sticker.description}</p>

        </div>
      </div>
    )
  }
}

export default Sticker