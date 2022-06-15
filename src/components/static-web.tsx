import React from "react";
import './static-web.css';
import sketchimg from './images/sketch.png';
import wowimg from './images/wow.png';

export class StaticWeb extends React.Component {
    render() {
        return (
            <div className="content static-web-container">
                <div className="container">
                    <div className="static-web-show sketch">
                        <div className="img">
                            <div>
                                <a href="../../sketch/sketch.html">Goto See</a>
                            </div>
                        </div>
                        <div className="text">
                            <span className='title'>静态网页展示</span>
                        </div>
                    </div>
                    <div className="static-web-show wow">
                        <div className="text">
                            <span className='title'>使用HTML5+CSS3+JS</span>
                        </div>
                        <div className="img">
                            <div>
                                <a href="../../wow/blizzardgames.html">Goto See</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}