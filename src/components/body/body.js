import React from 'react';
import './body.css';
import introImage from '../../assets/images/image-hero-desktop.png'
import introImageMobile from '../../assets/images/image-hero-mobile.png'
import databizImage from '../../assets/images/client-databiz.svg'
import audiophileImage from '../../assets/images/client-audiophile.svg'
import meetImage from '../../assets/images/client-meet.svg'
import makerImage from '../../assets/images/client-maker.svg'

export class Body extends React.Component {
    mediaQuery = true;

    componentDidMount() {
        window.addEventListener('resize', (event) => {
            this.mediaQuery = event.currentTarget.screen.width > 375;
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', undefined, false);
    }

    render() {
        return (
            <div className="container">
                <div className="info">
                    <h1 className="title">Make <br/> remote work</h1>
                    <p className="description">Get your team in sync, no matter your location. Steamline processes,
                        create team rituals, and watch productivity soar.</p>
                    <button type="button" className="btn-learn-more">Learn More</button>
                    <div className="clients">
                        <img src={databizImage} alt=""/>
                        <img src={audiophileImage} alt=""/>
                        <img src={meetImage} alt=""/>
                        <img src={makerImage} alt=""/>
                    </div>
                </div>

                <div className="info-image">
                    <img src={this.mediaQuery ? introImage : introImageMobile} alt=""/>
                </div>
            </div>
        );
    }
}