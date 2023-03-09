import React from 'react'
import ComponeyLogo from "../../assets/images/companyLogo.svg"

const Footer = () => {
    return (
        <div className='footer__Container'>
            <div className='footer__firstWrapper'>
                <div className='container'>
                    <img className='logo__footer' src={ComponeyLogo} alt='Componey Logo' />
                    <p className='Footer__message'>Facebook can help your large, medium or small business grow. Get the latest news for advertisers and more on our <a href='#' style={{ color: "#fff" }}>Meta for Business Page.</a></p>
                    <div className='row'>
                        <div className='col-lg col-6 footer'>
                            <ul>
                                <li>
                                    <p className='fontbold'>Marketing on Facebook</p>
                                    <p>Success Stories</p>
                                    <p>Measurement</p>
                                    <p>Industries</p>
                                    <p>Inspiration</p>
                                    <p>Events</p>
                                    <p>News</p>
                                    <p>Site map</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg col-6 footer'>
                            <ul>
                                <li>
                                    <p className='fontbold'>Marketing objectives</p>
                                    <p>Build your presence</p>
                                    <p>Create awareness</p>
                                    <p>Drive discovery</p>
                                    <p>Generate leads</p>
                                    <p>Generate leads</p>
                                    <p>Boost sales</p>
                                    <p>Earn loyalty</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg col-6 footer'>
                            <ul>
                                <li>
                                    <p className='fontbold'>Facebook Pages</p>
                                    <p>Get started with Pages</p>
                                    <p>Setting up your Page</p>
                                    <p>Manage your Facebook Page</p>
                                    <p>Promote your Page</p>
                                    <p>Messaging on your Page</p>
                                    <p>Page Insights</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg footer'>
                            <ul>
                                <li>
                                    <p className='fontbold'>Facebook ads</p>
                                    <p>Get started with ads</p>
                                    <p>Buying Facebook ads</p>
                                    <p>Ad formats</p>
                                    <p>Ad placement</p>
                                    <p>Choose your audience</p>
                                    <p>Measure your ads</p>
                                    <p>Managing your ads</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg col-6 footer'>
                            <ul>
                                <li>
                                    <p className='fontbold'>Resources</p>
                                    <p>Ads Guide</p>
                                    <p>Business Help Centre</p>
                                    <p>Meta Audience Network</p>
                                    <p>Meta Blueprint</p>
                                    <p>Meta for Developers</p>
                                    <p>Meta Business Partners</p>
                                    <p>Instagram Business</p>
                                    <p>Support</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom__footer'>
                <div className='container'>
                    <ul><li>English (UK)</li><li>English (US)</li><li>Español</li><li>Português (Brasil)</li><li>Français (France)</li><li>Español (España)</li><li>More languages</li></ul>
                    <ul><li>© 2022 Meta</li><li>About</li><li>Developers</li><li>Careers</li><li>Privacy</li><li>Cookies</li><li>Terms</li><li>Help Centre</li></ul>
                </div>
            </div>
        </div>
    )
}

export default Footer