import React from "react";
import "./LoginPage.scss"
import { Auth } from 'aws-amplify';
import { Navigate } from "react-router-dom";

const logo = String.raw
    `••▀▀▀▀••▪                                                                              
▪•▀•••••▀▀▀•••                                                                         
.▀•..•▄▄▄▄▄▀▀▀▀▀••                                                                     
 ▪▀•▪▀▄••▪▪••▀▀▀▄▀▀▀•▪                                                                 
  ▪▀••▄•.▪••▪▪••••▀▀▄▄▀▀•                                                              
   .••▀▄•▪•▪•••••••••▀▀▀▄▀▀•                                                           
     •▀•▄▀•••••▄▄▄▄▀▀▀▀••▀▀▄▄▀•    .••••••••••▪.                                       
      .•▀▀▀••••▄▀•••••▀▀▀▀▀•▀▀▄▄•••••••••••▀▀▀▀▀▄▀▀•▪                                  
        •▀▀▀▀▀•▀▄▀•••..▪▪•▀▀▀••••▪.▪••▪.•••••▀▀•▀▀▀▄▄▀▀•                               
          •▀▀▀▀••▄••▪     .▪•••..▪•. .••..•••••▀▀▀▀▀▀▀▄▄▄▀•                            
            •▀▀▀••▄▀••....▪▪▪▪•••..▪▪▪..••▪▪••••••▀▀▀▀▀▀▄▄▄▀▪                          
             .•▀▀▀•▀▄▀•••▪...▪••••▪▪..▪▪..•••▪••••••▀▀▀▀▀▄▄▄▄▀.                        
               .▀▀▄▀•▀▀▀▀▀▪....▪▪••••....▪▪▪•••••••••▀▀▀▀▀▀▄▄▄▄▪                       
                 .▀▀▄▀▀▀▀▀▀•.......••••.....▪•••••••▀▀▀▀▀▀▀▀▄▄▄▄•                      
                   .▀•••▀▀▄▀▀•▪..▪▪..•••▪..▪••••••••••▀▀▀▀▀▀▀▄▄▄█▪                     
                    ▪ ••••▀▀▄▄▀•▪...▪▪.▪•••▪▪•••••••••▀▀▀▀▀▀▀▀▀▄█▄                     
                    •.  •▀•••▀▄▄▀•▪. .▪▪..•▀••••••••▀▀••▀▀▀▀▀▀▄▄▄█•                    
                    • . . •▀▀••▀▄▄▀•▪▪  ▪••••▀▀•••••••▀▀▀▀▀▀▀▀▀▄▄█▄                    
                    •.  ..  ••▀▀▀▀▄▄▄▀••▪••••••▀▀▀▀•▀▀▀▀▀▀▀▀▀▀▀▄▄██                    
                    ••..  .   .•▀▀▀▀▄▄▄▀••••••••••▀▀▀▀▀▀▀▀▀▀▀▀▄▄▄██                    
                     ▀•... .     •▀▀▀▀▀▄▄▄▀•••••••••▀▀▀▀▀▀▀▀▀▄▄▄▄█▄                    
                     .▀•▪.▪...     ▪•▀▀▀▀▄▄▄▀▀•••••••▀▀▀▀▀▀▀▄▄▄▄██•                    
                      ▪▀▀•▪▪▪..•▪   ..•▀▀▀▀▀▄▄▄▀▀•••••▀▀▀▀▀▀▄▄▄▄█▄                     
                       .▀▄•••••▪...   .▪••▀▀▀▀▀▄█▄▀▀▀▀▀▀▀▀▄▀▄▄▄█▄.   ••▀▪              
                         •▄▄▀•••••▪•••▪.▪•▪•▀▀▀▀▀▄▄█▄▄▄▄▀▀▄▄▄██▄▪.•▀▀▀▄▄▄▀▪            
                          .•▄▄▄▀••▀•••••••••••▀▀▀▀▀▀▄▄▄▄▄▄▄▄██▀  .▀▄▄▀▀▀▄▄▄▀.          
                             •▄▄▄▄▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▄▄▄██▄▪     ▀▄▄▄▀▀▄▄▄▄•.        
                               .▀▀▄▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄▄▄▄▄▀▀▄▄▄▄▀▀▀▀▀▄▄▄▄▀▀▀▄▄▄▄•       
                                  .•▀▀▄▄▄█▄▄▄▄█████▄▄▄▀▀▄▄▄▄▀▀▀▄▄▄▄▄▄▄▄▀▀▀▀▀▀▄▄▄▀▪     
                                         ▪•••••••▪.      •▀▄▄▄▄▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▄▄▄▄▀    
                                                            ▪▀▄▄▄▄▄▄▀▀▀▀▀▀▀▀▀▀▀▄▄▄▄▄•  
                                                               .•▀▄▄▄▄▄▄▀▀▀▀▀▀▀▀▄▀▄▄▄• 
                                                                   •▀▀▄▄▄▄▄▄▄▄▄▄█▀▀▄▄▄•
                                                                       •▀▀▄▄▄▄▄▄▄▄▄▄▄▄▄
                                                                           ▪•▀▀▄▄▄▄▄▄▄▄
                                                                                .••••• `;

type LoginPageState = {
    signingUp: boolean
    username: string
    password: string
    secretKey: string
    errorMessage: string
    signedIn: boolean,
}

type LoginPageProps = {
    onUserSigninSuccess: Function,
    signedIn: boolean,
}

type SignUpParameters = {
    username: string;
    password: string;
    secretKey: string;
};

export async function SendSignupRequest({ username, password, secretKey }: SignUpParameters) {
    try {
        const { user } = await Auth.signUp({
            username: username,
            password: password,
            attributes: {
                "custom:secretKey": secretKey,
            },
            autoSignIn: {
                enabled: true,
            },
        });
        return Promise.resolve(user);

    } catch (error) {
        return Promise.reject(error);
    }
}

type SignInParameters = {
    username: string;
    password: string;
};

export async function SendSigninRequest({ username, password }: SignInParameters) {
    try {
        const { user } = await Auth.signIn({
            username: username,
            password: password,
        });
        return Promise.resolve(user);
    }
    catch (error) {
        return Promise.reject(error);
    }
}

class LoginPage extends React.Component<any, LoginPageState> {
    constructor(props: LoginPageProps) {
        super(props);
        this.state = {
            signingUp: false,
            username: "",
            password: "",
            secretKey: "",
            errorMessage: "",
            signedIn: false,
        };
        this.clickSigninButton = this.clickSigninButton.bind(this);
        this.clickSignupButton = this.clickSignupButton.bind(this);
    }

    clickSignupButton() {
        if (!this.state.signingUp) {
            this.setState({ signingUp: true })
            return;
        }

        SendSignupRequest({ username: this.state.username, password: this.state.password, secretKey: this.state.secretKey })
            .then(
                (user) => {
                    this.props.onUserSigninSuccess(user);
                },
                (err) => {
                    this.setState({ errorMessage: err.message });
                }
            );
    }

    clickSigninButton() {
        SendSigninRequest({ username: this.state.username, password: this.state.password })
            .then(
                (user) => {
                    this.props.onUserSigninSuccess(user);
                },
                (err) => {
                    this.setState({ errorMessage: err.message });
                }
            );
    }

    render() {
        const isSigningUp = this.state.signingUp;
        let loginButton;
        let signupTextArea;
        let errorMessageBlock;

        if (isSigningUp) {
            signupTextArea = <textarea className="loginText" placeholder="Signup Keyword"
                onChange={(e) => { this.setState({ secretKey: e.target.value }) }}>
            </textarea>;
        }
        else {
            loginButton = <a className="loginButton  clickable" onClick={this.clickSigninButton}> [ Login ] </a>;
        }

        if (this.state.errorMessage != "") {
            errorMessageBlock = <a className="loginMessageText">{this.state.errorMessage}</a>
        }

        return (
            <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
                <div className="outerContainer">
                    <pre className="logo">{logo}</pre>
                    <div className="loginContainerOuter">
                        <div className="loginContainerInner">
                            <a className="loginMessageText"> Welcome To Club Pseud World</a>
                            <div>
                                <textarea className="loginText" placeholder="Username"
                                    onChange={(e) => { this.setState({ username: e.target.value }) }}>
                                </textarea>
                            </div>
                            <div>
                                <textarea className="loginText" placeholder="Password"
                                    onChange={(e) => { this.setState({ password: e.target.value }) }}>
                                </textarea>
                            </div>
                            {signupTextArea}
                            <div className="loginButtonContainer">
                                {loginButton}
                                <a className="loginButton clickable" onClick={this.clickSignupButton}> [ Signup ]</a>
                            </div>
                            {errorMessageBlock}
                        </div>
                        {this.props.signedIn && <Navigate to={'/'}></Navigate>}
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;