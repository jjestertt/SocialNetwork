import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import style from './Hero.module.css';
import Menu from './Menu/Menu.jsx';
import Profile from './Profile/Profile.jsx';
import Messages from './Messages/Messages.jsx';
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";


const Hero = (props) => {
    return (
        <BrowserRouter>
            <section className={style.hero}>
                <div className="container">
                    <div className={style.wrapper}>
                        <Menu/>
                        <div className={style.content}>
                            <Route path="/profile" render={() => <Profile posts={props.posts}/> }/>
                            <Route path="/messages" render={() => <Messages dialogs={props.dialogs} messages={props.messages} />}/>
                            <Route path="/news" component={News}/>
                            <Route path="/music" component={Music}/>
                            <Route path="/settings" component={Settings}/>
                        </div>
                    </div>
                </div>
            </section>
        </BrowserRouter>
    );
}

export default Hero;