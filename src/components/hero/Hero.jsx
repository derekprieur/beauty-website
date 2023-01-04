import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import { RiShoppingBagFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Hero = () => {
    const transition = { duration: 3, type: 'spring' }
    const isMobile = window.innerWidth < 640
    return (
        <div className={css.container}>
            {/* left side */}
            <div className={css.h_sides}>
                <span className={css.text1}>Skin Protection Cream</span>
                <div className={css.text2}>
                    <span className={css.headerText}>Trendy Collection</span>
                    <span>Why wait? Get in on the trend and upgrade your skin care regimen today!</span>
                </div>
            </div>
            {/* middle hero image */}
            <div className={css.wrapper}>
                {isMobile ?
                    <motion.div transition={transition} initial={{ top: '-2rem' }} whileInView={{ top: '0rem' }} className={css.circle}></motion.div> :
                    <motion.div transition={transition} initial={{ bottom: '2rem' }} whileInView={{ bottom: '0rem' }} className={css.circle}></motion.div>
                }
                {isMobile ?
                    <motion.img transition={transition} initial={{ top: '5rem' }} whileInView={{ top: '3rem' }} src={HeroImg} alt="main-page-image" width={600} /> :
                    <motion.img transition={transition} initial={{ bottom: '-2rem' }} whileInView={{ bottom: '0rem' }} src={HeroImg} alt="main-page-image" width={600} />}
                <motion.div transition={transition} initial={{ right: isMobile ? '4%' : '4%' }} whileInView={{ right: isMobile ? '-2%' : '2%' }} className={css.cart2}>
                    <RiShoppingBagFill />
                    <div className={css.signup}>
                        <span>Best Signup Offers</span>
                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </motion.div>
            </div>
            {/* right side */}
            <div className={css.h_sides}>
                <div className={css.rightAlign}>
                    <span className={css.headerText}>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>
                <div className={css.rightAlign}>
                    <span className={css.headerText}>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    )
}

export default Hero