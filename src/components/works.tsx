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
                        <span>
                            4x4棋盘
                            <br />
                            <br />
                            通过方向键移动数字方块，将接触到的数字相同方块合并
                            <br />
                            <br />
                            出现2048时获得胜利，格子全部填满且相邻格子都不相同，游戏失败</span>
                        <span>
                            <a href="https://github.com/aiyo-w/game2048" className="link-github"> </a>
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