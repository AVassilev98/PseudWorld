import React from "react";
import './MainPage.scss';

const Header = (props: any) => {
    var logo = String.raw`
    ▀▀•          ▪▀▀▀         .▀▀
    ▪▪▪.        ▄██▄▄▀▪▪▪▀▪. ▌███. ▀▄▄▀▪ •▄█▌
    ▪▄████████▄▄▀ ▀██▄▄███████.•▄██..████▌ ▄██•
    ▪███▀▪▪▀▄███▪ .▄█▪ .▀████▌  •▄█.▪██▄█▀.██▪
    .▄██.   •▀▪    ▀█▌   ▪██▄.   ▪█▀▪█▌▪█▀•█▄
    ▀██•          ▀██▄▀▀▄█▄•    ▪█▄▀█▪ ▀▄•█▀
    •██▀          ▄██▀▌███▀     ▪████. ▪█▀█▀
    ▪███▪  •▀▀▀. •███. •▪▪      ▀███▄. ▪███▌
    .▀▄█▄▌▄██▄  ▪███.          ▀▀▀▪.  ▀███▀
    ▪▄▄█▄▀.  ▪▪▪▪                  ▪▄▄▄•
`;

    return (
        <div className="header">
            <span className="headerGroup">
                <div className="headerColumn headerColumnLeft">
                    <pre>
                        {logo}
                    </pre>
                </div>
                <div className="headerColumn headerColumnRight">
                    <span style={{
                        display: "table-cell",
                        verticalAlign: "middle",
                        lineHeight: "normal",
                    }}>
                        <p>Welcome, Rug</p>
                        <p>0 Unread Posts</p>
                        <p>0 Total Posts</p>
                    </span>
                </div>
            </span>
        </div>
    )
}


class MainPage extends React.Component {

    render() {
        return (
            <Header />
        )
    }
}

export default MainPage;