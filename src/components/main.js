import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export const Main = (props) => {

        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Main Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button
                            className="btn btn-primary"
                            onClick={() => props.changeUsername()}>Change the Username</button>
                    </div>
                </div>
            </div>
        );
    
}