import React from "react"

class AddSticker extends React.Component {
    stickerAdd = {}
    constructor(props) {
        super(props)
        if (props.sticker) {
            this.state = {
                id: props.sticker.id,
                title: props.sticker.title,
                description: props.sticker.description
            }
        } else {
            this.state = {
                id: 0,
                title: "",
                description: ""
            }
        }
    }
    render() {
        return (<div className="sticker-container">
            <div className="sticker">
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
                            })
                        } else {
                            this.props.onEdit({
                                id: this.state.id,
                                title: this.state.title,
                                description: this.state.description,
                            })
                        }
                    }}>Add</button>
                </form>
            </div>

        </div>

        )
    }
}

export default AddSticker