import React, { useRef } from 'react';
import style from './Work.module.scss';
import Card from '../UI/Card/Card';
import { motion } from 'framer-motion';
import grapes from '/assets/images/Expand X GrapeHoney.png';
import iphone from '/assets/images/iPhone 15 Pro.png';
import mockup from '/assets/images/mockups.png';
import pomegranate from '/assets/images/pomegranate.png';
import HoverCard from '../UI/HoverCard/HoverCard';

const Works = () => {
  const dragConstraints = useRef(null);
  
  const works = [
    { img: iphone, alt: 'mockups', link: 'https://github.com/harold-beep', tooltip: 'Wireframing' },
    { img: grapes, alt: 'branding', link: 'https://drive.google.com/drive/u/3/folders/16vi0cez-IYyj1tpuoaqedK2Gd-Un12Yx', tooltip: 'Branding Design' },
    { img: mockup, alt: 'mockups', link: 'https://drive.google.com/drive/u/3/folders/16vi0cez-IYyj1tpuoaqedK2Gd-Un12Yx', tooltip: 'Mockup Design' },
    { img: pomegranate, alt: 'mockup-website', link: 'https://github.com/harold-beep', tooltip: 'Prototyping' },
  ];

  return (
    <motion.div 
      className="section"
      ref={dragConstraints}
    >
      <div 
        className={`${style.subContainer}`}
        style={{
          '--bt-white': '100%',
          '--bt-main': '0%',
        }}
      >
        {works.slice(0, 2).map((work, index) => (
            <HoverCard
              key={index}
              imgSrc={work.img}
              altText={work.alt}
              link={work.link}
              tooltip={work.tooltip}
              cardStyle={{ width: '300px' }}
            />
        ))}
      </div>
      <div 
        className={`${style.subContainerCenter}`}
        style={{
          '--bg-white': '60%',
          '--bg-main': '40%',
        }}
      >
        {works.slice(2).map((work, index) => (
            <HoverCard
              key={index}
              imgSrc={work.img}
              altText={work.alt}
              link={work.link}
              tooltip={work.tooltip}
              cardStyle={{ width: '600px' }}
            />
        ))}
      </div>
    </motion.div>
  );
};

export default Works;
