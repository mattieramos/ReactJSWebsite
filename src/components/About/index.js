import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faJava, faJs, faPython, faReact, faSwift } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    useEffect(() => {
       setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    },[])
  
    return (
      <>
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p> 
                        I graduated with a Bachelor's Degree in Computer Science
                    from the University of Houston - Downtown. I'm in search of 
                    a Software Engineering or Software Development position where 
                    I can use my skills and talents as well as learn all I can. 
                </p>
                <p>
                    My projects page is under construction, but please visit 
                    https://www.github.com/mattieramos to see all of my projects!
                </p>
                <p>

                    You can also view my resume here:
                    https://drive.google.com/file/d/1m_XovpGR_DWFNQDCpAAd5coBeWe92NOI/view?usp=sharing
                </p>
                <p>
                    A bit more detailed version of me: I'm a creative individual 
                    who also takes a logical approach with everything. 
                </p>
                <p>
                    While in school I gained experience from different jobs that
                    all required different skillsets. I worked at Fossil for almost
                    8 years where I gained the experience of working directly with 
                    customers and navigating their wants, needs, and conflicts while 
                    keep our core values in mind to give a "Radical Customer Experience" 
                    with each customer.
                </p>
                <p>
                    I also worked with Houston Community College as a Media Specialist
                    where we used innovative technologies such as VR/AR along with
                    media to offer a true immersive learning experience to students. I
                     assisted and lead collaboration projects that brought together 
                     different departments which gave students the experience
                    of working on months long projects while having to work with 
                    students and professors from different departments. 
                </p>
                <p>
                    During this time, I also successfully owned and operated a 
                    small business that offered Wedding Photography and Videography 
                    services on the weekend. With this, I learned about creating 
                    graphics, managing administrative work, project timeline planning,
                    as well as learning all the technical skills needed while keeping
                    a creative mindset during the entire process. 
                </p>
                <p>
                    I'm confident in my skills and have a strong willingness to learn.
                    I look forward to hearing about opportunities!
                </p>
          </div>
  
          <div className="stage-cube-cont">
            <div className="cubespinner">
            <div className="face1">
                        <FontAwesomeIcon icon={faJava} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color="#28A4D9" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJs} color="#EFD81D" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faSwift} color="#EC4D28" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color="#FFF" />
                    </div>
                </div>

            </div>
        </div>
        <Loader type="pacman" />
      </>
    )
  }

export default About