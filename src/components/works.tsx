import React from "react";
import './works.css';
import { NextPage } from "./next-page";

import { Button } from './button'

export class Works extends React.Component {
    render() {
        return (
            <div className="content works-container">
                <div className="container">
                    <div className="game2048-show"></div>
                    <div className="game2048-introduce">
                        <h1>GAME 2048</h1>
                        <p>这里介绍一些玩法，这里介绍一些玩法，这里介绍一些玩法</p>
                        <Button>PLAY</Button>
                    </div>
                </div>
                <NextPage />
            </div>
        );
    }
}