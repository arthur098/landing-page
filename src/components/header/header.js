import React from "react";
import './header.css';
import logo from "../../assets/images/logo.svg";
import arrowTop from '../../assets/images/icon-arrow-down.svg';
import todoListLogo from '../../assets/images/icon-todo.svg';
import calendarLogo from '../../assets/images/icon-calendar.svg';
import remindersLogo from '../../assets/images/icon-reminders.svg';
import planningLogo from '../../assets/images/icon-planning.svg';
import closeMenuBtn from '../../assets/images/icon-close-menu.svg';
import hamburgMenu from '../../assets/images/icon-menu.svg';

export class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {toggle: [
                { toggled: false },
                { toggled: false }
            ]};
        this.handleEvent = this.handleEvent.bind(this);
        this.escFunction = this.escFunction.bind(this);
        this.clickHamburgMenu = this.clickHamburgMenu.bind(this);
    }

    escFunction(event) {
        if(event.key === 'Escape') {
            this.setState(prevState => ({
                toggle: [
                    { toggled: false },
                    { toggled: false }
                ]
            }));
        }
    }

    handleEvent(event) {
        const target = event.currentTarget;
        this.setState(prevState => ({
            toggle: [
                { toggled: target.dataset.index === '0' ? !prevState.toggle[parseInt(target.dataset.index)].toggled : false },
                { toggled: target.dataset.index === '1' ? !prevState.toggle[parseInt(target.dataset.index)].toggled : false }
            ]
        }));
    }

    clickHamburgMenu() {
        document.getElementsByClassName('menu-section')[0].classList.toggle('active');
        document.getElementsByClassName('menu-backdrop')[0].classList.toggle('display-none');
        const body = document.getElementsByTagName('body')[0];
        window.scroll(0, 0);
        body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
    }

    componentDidMount() {
        document.addEventListener('keydown', this.escFunction, false)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.escFunction, false)
    }

    render() {
        return (
            <header className="main-header">
                <a href="javascript:void(0);" style={{margin: 0}}>
                    <img src={logo} alt="logo"/>
                </a>
                <div className="menu-backdrop display-none">
                </div>
                <div className="menu-section">
                    <ul className="main-header-menu">
                        <li>
                            <a href="javascript:void(0);" onClick={this.clickHamburgMenu}>
                                <img src={closeMenuBtn} alt=""/>
                            </a>
                        </li>
                        <li>
                            <a onClick={this.handleEvent} href="javascript:void(0);" data-index="0" className={`link-dropdown-menu ${this.state.toggle[0].toggled ? 'active' : ''}`}>Features <img src={arrowTop} alt=""/></a>
                            <ul className="dropdown-menu first">
                                <li><a href="javascript:void(0);"><img src={todoListLogo} alt=""/>Todo List</a></li>
                                <li><a href="javascript:void(0);"><img src={calendarLogo} alt=""/>Calendar</a></li>
                                <li><a href="javascript:void(0);"><img src={remindersLogo} alt=""/>Reminders</a></li>
                                <li><a href="javascript:void(0);"><img src={planningLogo} alt=""/>Planning</a></li>
                            </ul>
                        </li>
                        <li>
                            <a onClick={this.handleEvent} href="javascript:void(0);" data-index="1" className={`link-dropdown-menu ${this.state.toggle[1].toggled ? 'active' : ''}`}>Company <img src={arrowTop} alt=""/></a>
                            <ul className="dropdown-menu">
                                <li><a href="javascript:void(0);">History</a></li>
                                <li><a href="javascript:void(0);">Our Team</a></li>
                                <li><a href="javascript:void(0);">Blog</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0);" className="link-dropdown-menu">Carrers</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" className="link-dropdown-menu">About</a>
                        </li>
                    </ul>
                    <div className="buttons">
                        <button type="button" className="btn-login">Login</button>
                        <button type="button" className="btn">Register</button>
                    </div>
                </div>
                <div className="hamburg-menu">
                    <a href={'javascript:void(0);'} onClick={this.clickHamburgMenu}>
                        <img src={hamburgMenu} alt=""/>
                    </a>
                </div>
          </header>
        );
    }
}
