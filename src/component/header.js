import React from "react"

class Header extends React.Component {
    render() {
        return (
            <header onClick={this.props.onClick} className="header" >
                {this.props.title}
                
            </header>
        )
    }
}

export default Header