import React, { useRef } from 'react'
import style from './Hero.module.scss';
import { motion } from 'framer-motion';
import image from '/assets/images/Background.jpg';
import Card from '../UI/Card/Card';
import HoverCard from '../UI/HoverCard/HoverCard';

const Hero = () => {
  const dragConstraints = useRef(null);

  const me = [
    { img: image, alt: 'prfile', link: 'https://www.linkedin.com/in/delacruz-harold/', tooltip: 'It\'s me!' }
  ];

  return (
    <motion.div 
      className='section'
      ref={dragConstraints}
    >
      <div 
        className={style.subContainer}
        style={{
          '--bt-white': '95%',
          '--bt-main': '5%'
        }}
      >
        <div style={{padding: "0 24px"}}>
          <Card dragConstraint={dragConstraints}>
            <h3 style={{ fontSize: "2rem", fontWeight: "bold", color: "#597e52", marginBottom: 0 }}>
              Frontend<br/>
              Developer / Designer.
            </h3>
            <p style={{ padding: '4px 0'}}>
              Creating extraordinary design in the most user-centric 
              <br/>and scalable in the niftiest way there is.
            </p>
          </Card>
        </div>
        <div style={{ display: 'flex', maxWidth: 'inherit', padding: "0 24px" }}>
          <Card dragConstraint={dragConstraints}>
            <p><span style={{ fontWeight: "bold", color: "#c6a969" }}>Creating</span> minimal and functional designs that greatly impact users requirements effectively.</p>
          </Card> 
          <Card dragConstraint={dragConstraints}>
            <p><span style={{ fontWeight: "bold", color: "#597e52" }}>Developing</span> product using up to date principles that brings the finest user experience.</p>
          </Card> 
        </div>
      </div>
      <div 
        className={style.subContainerCenter}
        style={{
          '--bg-white': '60%',
          '--bg-main': '40%'
        }}
      >
        <HoverCard
          imgSrc={me[0].img}
          altText={me[0].alt}
          link={me[0].link}
          tooltip={me[0].tooltip}
        />
      </div>
    </motion.div>
  )
}

export default Hero;