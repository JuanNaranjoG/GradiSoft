import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faPinterest, faGithub } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
    return (
        <footer className="page-footer font-small cyan darken-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 py-5">
                        <div className="mb-5 flex-center">
                            {/* Facebook */}
                            <a className="fb-ic" href="/#">
                                <FontAwesomeIcon icon={faFacebookF} size="2x" className="text-white mr-md-5 mr-3 w" />
                            </a>
                            {/* Twitter */}
                            <a className="tw-ic" href="/#">
                                <FontAwesomeIcon icon={faTwitter} size="2x" className="text-white mr-md-5 mr-3 w" />
                            </a>
                            {/* Linkedin */}
                            <a className="li-ic" href="/#">
                                <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="text-white mr-md-5 mr-3 w" />
                            </a>
                            {/* Instagram */}
                            <a className="ins-ic" href="/#">
                                <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white mr-md-5 mr-3 w" />
                            </a>
                            <a className="git-ic" href="/#">
                                <FontAwesomeIcon icon={faGithub} size="2x" className="text-white mr-md-5 mr-3 w" />
                            </a>
                            {/* Pinterest */}
                            <a className="pin-ic" href="/#">
                                <FontAwesomeIcon icon={faPinterest} size="2x" className="text-white mr-md-5 mr-3 w" />
                            </a>

                        </div>
                    </div>
                </div >
            </div>
            <div className="page-subfooter text-center py-3">© 2020 Copyright:
               <a href="https://gradisoft.com/"className="text-white" > GradiSoft.com</a>
            </div>
        </footer >
    )
}
