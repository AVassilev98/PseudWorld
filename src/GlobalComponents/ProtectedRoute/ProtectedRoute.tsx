import { Navigate, useLocation } from "react-router-dom";
import { Auth } from 'aws-amplify'
import React from "react";

type PrivateRouteProps = {
    children: React.ReactNode;
    signedIn: boolean;
};

class PrivateRoute extends React.Component<PrivateRouteProps> {
    constructor(props: PrivateRouteProps) {
        super(props);
        this.state = {
        };
    }

    render() {
        console.log(this.props.signedIn);
        return this.props.signedIn ? (
            <>{this.props.children}</>
        ) : (
            <Navigate
                to="/login"
            />
        )
    }
}
export default PrivateRoute