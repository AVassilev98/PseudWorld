import React from "react";
import "./LoginPage.scss"

type LoginPageState = {
    signingUp: boolean
}

class LoginPage extends React.Component<{}, LoginPageState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            signingUp: false,
        };
        this.signup = this.signup.bind(this);
    }

    signup() {
        this.setState({ signingUp: true })
    }

    render() {
        const isSigningUp = this.state.signingUp;
        let loginButton;
        let signupTextArea;

        if (isSigningUp) {
            signupTextArea = <textarea className="loginText" placeholder="Signup Keyword"></textarea>;
        }
        else {
            loginButton = <a className="loginButton  clickable"> [ Login ] </a>;
        }

        return (
            <div className="loginContainerOuter">
                <div className="loginContainerInner">
                    <div>
                        <textarea className="loginText" placeholder="Username"></textarea>
                    </div>
                    <div>
                        <textarea className="loginText" placeholder="Password"></textarea>
                    </div>
                    {signupTextArea}
                    <div className="loginButtonContainer">
                        {loginButton}
                        <a className="loginButton clickable" onClick={this.signup}> [ Signup ]</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;