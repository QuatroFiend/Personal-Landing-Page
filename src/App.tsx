import React from 'react';
import './App.css';
import s from './style.module.css';
import {ReactComponent as Telegram} from "./img/Telegram.svg";
import {ReactComponent as GitHub} from "./img/GitHub.svg";
import {ReactComponent as Linkedin} from "./img/Linkedin.svg";
import {ReactComponent as CV} from "./img/cv.svg";
import {ReactComponent as Web} from "./img/website.svg";
import avatar from "./img/pea.jpg";

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
                                <a className={s.link}
                                   href={"https://www.linkedin.com/in/oleg-salnika%C5%82-976868366/"}>
                                    <div className={s.buttonContent}>
                                        <Linkedin className={s.icon}/>
                                        Linkedin
                                    </div>
                                </a>
                            </button>
                            <button className={s.linkedButton}>
                                <a className={s.link}
                                   href={"https://t.me/quatrodhaoregu"}>
                                    <div className={s.buttonContent}>
                                        <Telegram className={s.icon}/>
                                        Telegram
                                    </div>
                                </a>
                            </button>
                            <button className={s.linkedButton}>
                                <a className={s.link}
                                   href={"https://github.com/QuatroFiend"}>
                                    <div className={s.buttonContent}>
                                        <GitHub className={s.icon}/>
                                        GitHub
                                    </div>
                                </a>
                            </button>
                            <button className={s.linkedButton}>
                                <a className={s.link}
                                   href={"https://quatrofiend.github.io/portfolio-start-project-main/"}>
                                    <div className={s.buttonContent}>
                                        <Web className={s.icon}/>
                                        Portfolio
                                    </div>
                                </a>
                            </button>
                            <button className={s.linkedButton}>
                                <a className={s.link}
                                   href={"https://docs.google.com/document/d/1Tgi6wQrtXuBbedQcYtTaEbgrBGvO-nGqxBewC3JG18A/edit?usp=sharing"}>
                                    <div className={s.buttonContent}>
                                        <CV className={s.icon}/>CV
                                    </div>
                                </a>
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
