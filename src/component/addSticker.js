import React from "react"
import DateTimePicker from 'react-datetime-picker'

class AddSticker extends React.Component {
    stickerAdd = {}
    constructor(props) {
        super(props)

        if (props.sticker) {
            this.state = {
                id: props.sticker.id,
                title: props.sticker.title,
                description: props.sticker.description,
                stickerColor: props.sticker.stickerColor,
                deadline: props.sticker.deadline
            }
        } else {
            this.state = {
                id: 0,
                title: "",
                description: "",
                stickerColor: "",
                deadline: null
            }
        }
        this.state.stickerColor = "minor"

    }
    render() {
        return (<div >
            <div className="sticker" style={{ backgroundColor: this.state.stickerColor }}>
                <div className={this.state.stickerColor} >
                    <form ref={(el) => this.myForm = el}>
                        <input value={this.state.title} className="title" placeholder="Title" onChange={(e) => this.setState({ title: e.target.value })} />
                        <input value={this.state.description} className="description" placeholder="Description" onChange={(e) => this.setState({ description: e.target.value })} />
                        <button className="add-button" type="button" onClick={() => {
                            this.myForm.reset()
                            if (this.props.onAdd) {
                                this.props.onAdd({
                                    id: this.state.id,
                                    title: this.state.title,
                                    description: this.state.description,
                                    stickerColor: this.state.stickerColor,
                                    deadline: this.state.deadline
                                })
                            } else {
                                console.log(this.state)
                                this.props.onEdit({
                                    id: this.state.id,
                                    title: this.state.title,
                                    description: this.state.description,
                                    stickerColor: this.state.stickerColor,
                                    deadline: this.state.deadline
                                })
                            }
                        }}>Add</button>
                        <p className="choose-radio">
                            <input type={"radio"} name="urgency" />
                            <label className="radio-style" for="urgent" onClick={(e) => this.setState({ stickerColor: "#c98787" })}>Urgent</label>
                            <input type={"radio"} name="urgency" />
                            <label className="radio-style" for="medium" onClick={(e) => this.setState({ stickerColor: "#c29d85" })}>Medium</label>
                            <input type={"radio"} name="urgency" />
                            <label className="radio-style" for="minor" onClick={(e) => this.setState({ stickerColor: "#f4eee3" })}>Minor</label>
                        </p>
                        <input value={this.state.deadline} type={"datetime-local"} className="deadline" onChange={(e) => this.setState({deadline: e.target.value})}/>

                    </form>
                </div>

            </div>

        </div>

        )
    }

}

export default AddSticker