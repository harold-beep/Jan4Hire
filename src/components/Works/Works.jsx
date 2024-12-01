import React, { useRef } from 'react';
import style from './Work.module.scss';
import Card from '../Card/Card';
import { motion } from 'framer-motion';

const Works = () => {
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
          <Card dragConstraint={dragConstraints}>
            asdfasd
          </Card>
          <Card dragConstraint={dragConstraints}>
            asdfasd
          </Card>
        </div>
        <div 
          className={`${style.subContainerCenter}`}
          style={{
            '--bg-white': '60%',
            '--bg-main': '40%'
          }}
        >
          <Card dragConstraint={dragConstraints}>
            asdfasd
          </Card>
          <Card dragConstraint={dragConstraints}>
            asdfasd
          </Card>
        </div>
      </motion.div>
    )
}

export default Works;