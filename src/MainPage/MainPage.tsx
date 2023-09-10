import React from "react";
import './MainPage.scss';
import Post from "./Post/Post";
import SubmissionForm from "./SubmissionForm/SubmissionForm";
import PageBrowser from "./PageBrowser/PageBrowser";
import TagDropDown from "./TagDropDown/TagDropDown";
import type { PostData } from "./Post/Post";
import { text } from "body-parser";
import DropDown from "../GlobalComponents/DropDown/DropDown";

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
            <span className="headerGroup adjustableText">
                <div className="headerColumn headerColumnLeft">
                    <pre className="adjustableLogo" style={{ color: "green" }}>
                        {logo}
                    </pre>
                </div>
                <div className="headerColumn headerColumnRight">
                    <span style={{
                        display: "table-cell",
                        verticalAlign: "middle",
                        lineHeight: "normal",
                    }}>
                        <p>Welcome, <span className="clickable">Jupajupe</span></p>
                        <p><span className="clickable">1</span> Unread Post(s)</p>
                        <p>2 Total Post(s)</p>
                    </span>
                </div>
            </span>
        </div>
    )
}

type MainPageState = {
    tagDropDownOpened: boolean;
    submissionDropDownOpened: boolean
}

class MainPage extends React.Component<{}, MainPageState> {
    constructor(props: MainPageState) {
        super(props);
        this.state = {
            tagDropDownOpened: false,
            submissionDropDownOpened: false,
        };
    }


    postDatas: Array<PostData> = [
        {
            title: "Rug Song",
            text: "I'm a Rug, I'm a ruggy Rug, I'm a Rug Rug ruggy ruggy Rug",
            embeds: [
                "https://open.spotify.com/track/0TJuwc5F6GtI3WjU4DZIqT?si=f411c7f544d0460f",
            ],
            id: 3,
            date: new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }),
            tags: ["rug"],
            user: "Jupajupe"
        },
        {
            title: "Dep's Reply",
            text: "Aaaaannngghhhh?",
            embeds: [
                "https://open.spotify.com/track/4eBCTzBsSjYgrLH5clQf2x?si=53850f56cbaf4cb1",
                "https://open.spotify.com/track/4VnDmjYCZkyeqeb0NIKqdA?si=6d51d1fb80b74c17",
                "https://youtu.be/4K8IEzXnMYk?si=T2XVcwUoXLgksVQQ"
            ],
            id: 2,
            date: new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }),
            tags: ["practicegf"],
            user: "Deputy"
        },
        {
            title: "Love Letter to Dep",
            text: "I'm going to kiss dep, and hug him and squeeze him, and most importantly please him.",
            embeds: [],
            id: 1,
            date: new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }),
            tags: ["dep", "love"],
            user: "Jupajupe"
        },
    ];

    renderPostItems() {
        return this.postDatas.map((postData) =>
            <div> <Post {...postData}></Post></div>
        );
    }


    toggleTagDropdown(curState: boolean) {
        this.setState({ tagDropDownOpened: !curState });
    }

    render() {
        let posts = [];
        for (var i = 0; i < this.postDatas.length; i++) {
            posts.push(<Post {...this.postDatas[i]}></Post>);
        }


        return (
            <div className="mainColumn">
                <span style={{ flexDirection: "column" }}>
                    <Header />
                    <div style={{
                        borderStyle: "solid none",
                        borderWidth: "2px",
                        margin: "10px",
                    }}>
                        <TagDropDown
                            isOpened={this.state.tagDropDownOpened}
                            clickHandler={() => this.toggleTagDropdown(this.state.tagDropDownOpened)}
                            tags={[]}
                        />
                        <DropDown
                            isOpened={this.state.submissionDropDownOpened}
                            clickHandler={() => this.toggleTagDropdown(this.state.submissionDropDownOpened)}
                            text={"[ New Post ]"}
                        >
                            <SubmissionForm />
                        </DropDown>
                    </div>
                    <PageBrowser />
                    {this.renderPostItems()}
                    <PageBrowser />
                </span>
            </div>
        )
    }
}

export default MainPage;