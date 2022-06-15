import React from "react";
import './aiyo-ui.css';

import { NextPage } from './next-page';
export class AiyoUI extends React.Component {
    render() {
        return (
            <div className="content aiyo-ui-container">
                <div className="container">
                    <div className="aiyo-ui-show"></div>
                    <div className="introduce aiyo-ui-introduce">
                        <span className="title">Aiyo UI</span>
                        <span className="title">Use react and typescript.</span>
                        <span>包含布局类，呈现类和交互类的通用型组件</span>
                        <span>
                            <a href="../../build-ui/index.html">Goto See</a>
                            <a href="https://github.com/aiyo-w/aiyo-ui" className="link-github"> </a>
                        </span>
                    </div>
                </div>
                <NextPage />
            </div>
        );
    }
}