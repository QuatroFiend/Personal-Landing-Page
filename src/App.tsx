import React from 'react';
import './App.css';
import s from './style.module.css';
import { ReactComponent as Telegram } from "./img/Telegram.svg";
import { ReactComponent as GitHub } from "./img/GitHub.svg";
import { ReactComponent as Linkedin } from "./img/Linkedin.svg";
import { ReactComponent as CV } from "./img/cv.svg";
import { ReactComponent as Web } from "./img/website.svg";
import avatar from "./img/avatar.jpg";

function App() {
    return (
        <>
            <div className={"gradient-background"}>
            <div className="App">
                <header className="App-header">
                    <div className={s.avatar}>
                        <img alt="" src={avatar}/>
                    </div>
                    <span className={s.userName}>QuatroFiend</span>
                    <div className={s.buttonsBlock}>
                        <button className={s.linkedButton}>
                            <div className={s.buttonContent}>
                                <Linkedin className={s.icon}/> <a className={s.link}
                                                                   href={"https://www.linkedin.com/in/olek-salnikał-337315318/"}>Linkedin</a>
                            </div>
                        </button>
                        <button className={s.linkedButton}>
                            <div className={s.buttonContent}>
                                <Telegram className={s.icon}/> <a className={s.link}
                                                                  href={"https://t.me/quatrodhaoregu"}>Telegram</a>
                            </div>
                        </button>
                        <button className={s.linkedButton}>
                            <div className={s.buttonContent}>
                                <GitHub className={s.icon}/> <a className={s.link}
                                                                href={"https://github.com/QuatroFiend"}>GitHub</a>
                            </div>
                        </button>
                        <button className={s.linkedButton}>
                            <div className={s.buttonContent}>
                                <Web className={s.icon}/> <a className={s.link}
                                                                 href={"https://quatrofiend.github.io/portfolio-start-project-main/"}>Portfolio</a>
                            </div>
                        </button>
                        <button className={s.linkedButton}>
                            <div className={s.buttonContent}>
                                <CV className={s.icon}/> <a className={s.link}
                                                                   href={"https://drive.google.com/file/d/1_3x2FbjS-tCA1AP2MAblTygSUHgoNZOp/view?usp=sharing"}>CV</a>
                            </div>
                        </button>
                    </div>
                    <span className={`${s.footerSpan} ${s.shineText}`}>第四個惡魔</span>
                </header>
            </div>
            </div>
        </>
    );
}

export default App;
