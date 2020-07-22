import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
    onSubmit = (param) => {
        if (param == "fb")
            window.location.href = "https://www.facebook.com/radhikachhibber03";
        else if (param == "linkedin")
            window.location.href = "https://www.linkedin.com/in/radhika-chhibber/";
        else if (param == "github")
            window.location.href = "https://github.com/radhikachhibber";
        else
            window.location.href = " https://www.instagram.com/radhika_chhibber/";
    }
    render() {
        return (
            <div className="bg-dark p-3 position-absolute mb-0 col-md-12">
                <div className="row p-3">
                    <div className="col-md-3 text-light">© RADHIKA CHHIBBER - 2020
                </div>
                    <div className="col-md-9 text-right text-light">
                        <FontAwesomeIcon className="pointer ml-3" icon={faFacebook} onClick={() => { this.onSubmit("fb") }} />
                        <FontAwesomeIcon className="pointer ml-3" icon={faLinkedin} onClick={() => { this.onSubmit("linkedin") }} />
                        <FontAwesomeIcon className="pointer ml-3" icon={faGithub} onClick={() => { this.onSubmit("github") }} />
                        <FontAwesomeIcon className="pointer ml-3" icon={faInstagram} onClick={() => { this.onSubmit("insta") }} />
                    </div></div>
            </div>
        )
    }
}

export default Footer