import React, { Children } from "react";

type DropDownProps = {
    isOpened: boolean;
    text: string;
    clickHandler?: Function
    children: React.ReactNode
}

type DropDownState = {
    isOpened: boolean;
    clickHandler: Function
}


class DropDown extends React.Component<DropDownProps, DropDownState>
{
    constructor(props: DropDownProps) {
        super(props);
        this.state = {
            isOpened: false,
            clickHandler: this.handleClick,
        };
    }

    handleClick() {
        this.setState({
            isOpened: !this.state.isOpened
        },);
    }

    render() {
        return (
            <div>
                <p>
                    <span onClick={() => this.handleClick()} className="clickable"> {this.state.isOpened ? "▼ " : "▶ "} {this.props.text}</span>
                </p>
                {this.state.isOpened ? this.props.children : <div />}
            </div>
        )
    }

}

export type { DropDownProps };
export default DropDown;