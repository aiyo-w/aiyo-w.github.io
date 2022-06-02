import React from "react";
import './aiyo-ui.css';

export class AiyoUI extends React.Component {
    render() {
        return (
            <div className="content aiyo-ui-container">
                <div className="container">
                    <div className="aiyo-ui-show"></div>
                    <div className="introduce aiyo-ui-introduce">
                        <span className="title">Aiyo UI</span>
                        <span className="title">Use react and typescript.</span>
                        <span>这里介绍一些玩法，这里介绍一些玩法，这里介绍一些玩法</span>
                        <span>
                            <a href="../../build-ui/index.html">Goto See</a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}