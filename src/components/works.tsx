import React from "react";
import './works.css';
import { NextPage } from "./next-page";

import { Button } from './button'

export class Works extends React.Component {
    render() {
        return (
            <div id="Game2048" className="content works-container">
                <div className="container">
                    <div className="introduce game2048-introduce">
                        <span className="title">GAME 2048</span>
                        <span>这里介绍一些玩法，这里介绍一些玩法，这里介绍一些玩法</span>
                        <span>
                            <a href="../../build-game/index.html">Goto Play</a>
                        </span>
                    </div>
                    <div className="game2048-show"></div>
                </div>
                <NextPage />
            </div>
        );
    }
}