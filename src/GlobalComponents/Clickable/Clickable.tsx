import React from "react";

type ClickableProps = {
    text: string
    clickHandler: Function
}

class Clickable extends React.Component<ClickableProps, {}> {
    constructor(props: ClickableProps) {
        super(props);
    }

    render() {
        return (
            <a className="Clickable" onClick={this.props.clickHandler()}> {this.props.text} </a>
        )
    }
}