import React, { useRef } from 'react'
import style from './Hero.module.scss';
import Card from '../Card/Card';
import { motion } from 'framer-motion';
import image from '/assets/images/Background.jpg';

const Hero = () => {
  const dragConstraints = useRef(null);
  return (
    <motion.div 
      className='section'
      ref={dragConstraints}
    >
      <div 
        className={`${style.subContainer}`}
        style={{
          '--bt-white': '95%',
          '--bt-main': '5%'
        }}
      >
        <div style={{padding: "0 24px"}}>
          <Card dragConstraint={dragConstraints}>
            <h3>
              Frontend<br/>
              Developer / Designer.
            </h3>
            <p style={{ padding: '4px 0'}}>
              I create extraordinary design in the most user-centric 
              <br/>and scalable in the niftiest way there is.
            </p>
          </Card>
        </div>
        <div style={{ display: 'flex', maxWidth: 'inherit', padding: "0 24px" }}>
          <Card dragConstraint={dragConstraints}>
            <p>Creating minimal and functional designs that greatly impact users requirements effectively.</p>
          </Card> 
          <Card dragConstraint={dragConstraints}>
            <p>Creating minimal and functional designs that greatly impact users requirements effectively.</p>
          </Card> 
        </div>
      </div>
      <div 
        className={`${style.subContainerCenter}`}
        style={{
          '--bg-white': '60%',
          '--bg-main': '40%'
        }}
      >
        <Card dragConstraint={dragConstraints}>
          <img src={image} alt='profile' style={{ maxWidth: "250px"}} />
        </Card>
      </div>
    </motion.div>
  )
}

export default Hero;