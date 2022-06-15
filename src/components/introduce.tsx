import React from 'react';
import './introduce.css';

import { Button } from './button'
import { NextPage } from './next-page';

export class Introduce extends React.Component {

    gotoWorks() {
    }

    render() {
        return (
            <div className="content introduction-container" >
                <div className='introduction-sky'>
                    <div className='cloud-1'></div>
                    <div className='cloud-2'></div>
                    <div className='sun'></div>
                </div>
                <div className="introduction-layout">
                    <div className="aiyo-avatar">
                        <p>hello</p>
                        <span></span>
                    </div>
                    <div className="introduce aiyo-introduction">
                        <span className='title'>欢迎来到我的主页！</span>
                        <span>该网站用于展示我前端学习中做的一些小项目</span>
                        <span>
                            <a href="#Game2048">查看作品</a>
                        </span>
                        {/* <Button onClick={this.gotoWorks}>查看作品</Button> */}
                    </div>
                </div>
                <NextPage />
            </div>);
    }
}
