import React from "react";

class Post extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            text: null,
            embeds: [],
            id: null,
            date: null,
            tags: [],
        };
    }


}

export default Post;