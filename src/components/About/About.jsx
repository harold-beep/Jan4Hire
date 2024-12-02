import React, { useRef } from 'react'
import style from './About.module.scss';
import { motion } from 'framer-motion';
import Card from '../UI/Card/Card';

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
                {/* <div style={{ textAlign: 'center', maxWidth: "60dvw", padding: "24px 0" }}>
                    <h3>Hi I’m Jan!</h3>
                    <p>Here to make your anything web come to life!</p>
                    <br/>
                    <p>A developer with a focus on frontend development using React, creating user-friendly designs and enhancing website performance. I began freelancing during the pandemic with the goal of growing my skills as both a developer and designer.</p>
                    <br/>
                    <p>With a computer science degree and extensive work experience, I have advanced my expertise in frontend development, UI/UX design, and E-commerce functionality. I have implemented microservices architecture and customized WordPress sites to meet unique needs.</p>
                </div> */}
                <div style={{ textAlign: 'center', maxWidth: "60dvw", padding: "24px 0", backgroundColor: "#f7f7f7", color: "#000e34" }}>
                    <h3 style={{ fontSize: "2rem", fontWeight: "bold", color: "#597e52", marginBottom: 0 }}>Hi, I’m Jan!</h3>
                    <p>
                        Here to make your anything web come to life!
                    </p>
                    <br />
                    <p style={{ lineHeight: "1.6", fontSize: "1rem" }}>
                        A developer with a focus on <span style={{ fontWeight: "bold", color: "#597e52" }}>frontend development</span> using 
                        <span style={{ fontWeight: "bold", color: "#c6a969" }}> React</span>, creating user-friendly designs and enhancing 
                        <span style={{ fontWeight: "bold", color: "#597e52" }}> website performance</span>. I began freelancing during the pandemic 
                        with the goal of growing my skills as both a <span style={{ fontWeight: "bold", color: "#c6a969" }}>developer</span> and 
                        <span style={{ fontWeight: "bold", color: "#597e52" }}> designer</span>.
                    </p>
                    <br />
                    <p style={{ lineHeight: "1.6", fontSize: "1rem" }}>
                        With a <span style={{ fontWeight: "bold", color: "#c6a969" }}>computer science degree</span> and extensive work experience, 
                        I have advanced my expertise in <span style={{ fontWeight: "bold", color: "#597e52" }}>frontend development</span>, 
                        <span style={{ fontWeight: "bold", color: "#c6a969" }}> UI/UX design</span>, and <span style={{ fontWeight: "bold", color: "#597e52" }}>E-commerce functionality</span>. 
                        I have implemented <span style={{ fontWeight: "bold", color: "#c6a969" }}>microservices architecture</span> and customized 
                        <span style={{ fontWeight: "bold", color: "#597e52" }}> WordPress</span> sites to meet unique needs.
                    </p>
                </div>
            </Card>
        </div>
        </motion.div>
    )
}

export default About;