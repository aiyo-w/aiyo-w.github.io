import React from "react";
import './static-web.css';

export class StaticWeb extends React.Component {
    render() {
        return (
            <div id="StaticWeb" className="content static-web-container">
                <div className="static-web-box">
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