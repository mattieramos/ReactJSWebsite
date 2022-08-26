import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faGoogleDrive,
} from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['a', 't', 't', 'h', 'e', 'w', ',']
    const jobArray = ['C', '.', 'S', '.', ' ', ' ', 'G', 'r', 'a', 'd', 'u', 'a', 't', 'e', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <span className={`${letterClass} _13`}>,</span>
                        <br />
                        <span className={`${letterClass} _14`}>I</span>
                        <span className={`${letterClass} _15`}>'</span>
                        <span className={`${letterClass} _16`}>m</span>
                        <img
                            src={LogoTitle}
                            alt="developer"
                        />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22}
                        />
                    </h1>
                    <h2>Software Engineering / Media Specialist / Tech Enthusiast</h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                    <br />
                    &nbsp;
                    &nbsp;
                    <i>
                        <a
                            href="https://www.linkedin.com/in/matthew-lamar-ramos/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="3x" color="#ffd700" />
                        </a>
                        &nbsp;
                        &nbsp;
                        <a
                            href="https://github.com/mattieramos"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} size="3x" color="#ffd700" />
                        </a>
                        &nbsp;
                        &nbsp;
                        <a
                            href="https://drive.google.com/file/d/1yIwGfJTScDspOMhEuq71ezZT57Yhsup9/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGoogleDrive} size="3x" color="#ffd700" />
                        </a>
                    </i>
                </div>
                <Logo />
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default Home