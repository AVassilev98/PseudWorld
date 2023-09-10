import React from "react";
import "./SubmissionForm.scss"

class SubmissionForm extends React.Component {
    render() {
        return (
            <div className="submissionContainer">
                <textarea className="titleText" placeholder="Title..." />
                <textarea className="formText" placeholder="Write..." />
                <textarea className="titleText" placeholder="Tags..." />
                <div style={{ textAlign: "right", justifyContent: "end", paddingTop: "5px" }}>
                    <a className="clickable"> [ Submit ]</a>
                </div>
            </div>
        );
    }
}

export default SubmissionForm