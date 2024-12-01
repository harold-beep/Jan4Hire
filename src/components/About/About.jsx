import React, { useRef } from 'react'
import style from './About.module.scss';
import { motion } from 'framer-motion';
import Card from '../Card/Card';

const About = () => {
    const dragConstraints = useRef(null);
    return (
        <motion.div
            ref={dragConstraints}
            className='section'
        >
        <div 
            className={`${style.container}`} 
            style={{ zIndex: 0 }}              
        >
            <Card dragConstraint={dragConstraints}>
                <div style={{ textAlign: 'center', maxWidth: "60dvw", padding: "24px 0" }}>
                    <h3>Hi I’m Jan!</h3>
                    <p>Here to make your anything web come to life!</p>
                    <br/>
                    <p>A developer with a focus on frontend development using React, creating user-friendly designs and enhancing website performance. I began freelancing during the pandemic with the goal of growing my skills as both a developer and designer.</p>
                    <br/>
                    <p>With a computer science degree and extensive work experience, I have advanced my expertise in frontend development, UI/UX design, and E-commerce functionality. I have implemented microservices architecture and customized WordPress sites to meet unique needs.</p>
                </div>
            </Card>
        </div>
        </motion.div>
    )
}

export default About;