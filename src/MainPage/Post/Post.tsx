import React from "react";
import './Post.scss';
import SpotifyEmbed from "../../GlobalComponents/SpotifyEmbed/SpotifyEmbed"
import YoutubeEmbed from "../../GlobalComponents/YoutubeEmbed/YoutubeEmbed";
import DropDown from "../../GlobalComponents/DropDown/DropDown";

type PostData = {
    title: string;
    text: string;
    embeds: Array<string>;
    id: number,
    date: string,
    tags: Array<string>,
    user: string
}

type PostState = {
    title: string;
    text: string;
    embeds: Array<string>;
    id: number,
    date: string,
    tags: Array<string>,
    user: string,
    tagsOpened: boolean
}


class Post extends React.Component<PostData, PostState> {
    constructor(props: PostData) {
        super(props);
        this.state = {
            title: props.title,
            text: props.text,
            embeds: props.embeds,
            id: props.id,
            date: props.date,
            tags: props.tags,
            user: props.user,
            tagsOpened: false,
        };
    }

    toggleTagDropdown(curState: boolean) {
        this.setState({ tagsOpened: !curState });
    }

    getEmbeddedComponent(link: string) {
        console.log(link)
        if (link.includes("spotify")) {
            console.log("spotify")
            return (<SpotifyEmbed wide link={link}></SpotifyEmbed>)
        }
        else if (link.includes("youtube")) {
            link = link.replace("watch?v=", "embed/");
            return (<YoutubeEmbed link={link}></YoutubeEmbed>)
        }
        else if (link.includes("youtu.be")) {
            link = link.replace("youtu.be", "youtube.com/embed/");
            return (<YoutubeEmbed link={link}></YoutubeEmbed>)
        }
        else { return }
    }


    render() {
        return (
            <div className="postCell">
                <a className="postTitle adjustableHeaderText"> {this.state.title} </a>
                <DropDown isOpened={false} text={"[ Read More ]"}>
                    <p> {this.state.text} </p>
                    <div>
                        {this.state.embeds.map(this.getEmbeddedComponent)}
                    </div>
                </DropDown>
                <DropDown isOpened={false} text={"[ Tags ]"}>
                    <p> {this.state.tags} </p>
                </DropDown>
                <div style={{ display: "flex" }}>
                    <div className="footerItem" style={{ width: "80%" }}>
                        <a className="optionalText dateItem adjustableText">
                            Posted by
                            <span className="clickable"> {this.state.user}</span>, on {this.state.date}
                        </a>
                    </div>
                    <div className="footerItem clickable idItem" style={{ width: "20%" }}>
                        <a className="adjustableText" style={{ textAlign: "right", justifySelf: "right" }}>
                            [ {this.state.id} ]
                        </a>
                    </div>

                </div>
            </div>
        )
    }


}
export type { PostData };
export default Post;