import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import { InboxIcon, PhoneIcon, LocationMarkerIcon, LoginIcon, UsersIcon, LinkIcon } from '@heroicons/react/outline'

const Footer = () => {
    return (
        <div className={css.footerWrapper}>
            <hr />
            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={Logo} alt="" />
                    <span>Ethereal Beauty Co.</span>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact Us</span>
                        <span className={css.pngLine}>
                            <LocationMarkerIcon className={css.icon} />
                            <span>111 North Avenue Orlando, FL 32801</span>
                        </span>
                        <span className={css.pngLine}>
                            <PhoneIcon className={css.icon} />
                            <span>352-306-4415</span>
                        </span>
                        <span className={css.pngLine}>
                            <InboxIcon className={css.icon} />
                            <a href="mailto:support@etherealbeauty.com">support@etherealbeauty.com</a>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <LoginIcon className={css.icon} />
                            <span>Sign In</span>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <UsersIcon className={css.icon} />
                            <span>About Us</span>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <LinkIcon className={css.icon} />
                            <span>Safety Privacy & Terms</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className={css.copyright}>
                <span>© 2023 Ethereal Beauty Co.</span>
                <span>All rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer