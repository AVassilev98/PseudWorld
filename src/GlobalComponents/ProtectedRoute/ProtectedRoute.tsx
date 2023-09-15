import { Navigate } from "react-router-dom";
import React from "react";

type PrivateRouteProps = {
    children: React.ReactNode;
    signedIn: boolean;
};
type PrivateRouteState = {
    children: React.ReactNode;
    signedIn: boolean;
}

class PrivateRoute extends React.Component<PrivateRouteProps, PrivateRouteState> {
    constructor(props: PrivateRouteProps) {
        super(props);
        this.state = {
            children: props.children,
            signedIn: props.signedIn,
        };
    }

    render() {
        return this.state.signedIn ? (
            <>{this.state.children}</>
        ) : (
            <Navigate
                to="/login"
            />
        )
    }
}
export default PrivateRoute