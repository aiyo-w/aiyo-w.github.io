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
                    <div className="aiyo-introduction">
                        <h1>你好啊！兄弟们</h1>
                        <p>这里就放一些自己的介绍啥的吧，我也不知道说啥!</p>
                        <Button onClick={this.gotoWorks}>查看作品</Button>
                    </div>
                </div>
                <NextPage />
            </div>);
    }
}
