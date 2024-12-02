import React, { useRef } from 'react';
import style from './Skills.module.scss';
import { motion } from 'framer-motion';
import {
  Design,
  DesignTools,
  Expertise,
  Frameworks,
  Knowledge,
  Languages,
  Methodologies,
  Tools,
} from './List';
import SkillCard from './SkillCard/SkillCard';
import Card from '../UI/Card/Card';

const Skills = () => {
  const dragConstraints = useRef(null);

  return (
    <motion.div
      ref={dragConstraints}
      className='section'
    >
      <div className={style.subContainer}>
        <Card dragConstraint={dragConstraints}>
          <div className={style.skillContent}>
            <h3 style={{ color: "#597e52" }}>Jan the Designer</h3>
            <p>Prioritizing functional, minimal design to deliver an impactful user experience.</p>
            <div className={style.skillGroup}>
              <h5 style={{ textAlign: 'left' }}>Things I love designing:</h5>
              <div className={style.skillList}>
                {Design.map((design) => (
                  <SkillCard
                    key={design.title}
                    icon={design.icon}
                    title={design.title}
                  />
                ))}
              </div>
            </div>
            <div className={style.skillGroup}>
              <h5 style={{ textAlign: 'left' }}>Tools I use to design:</h5>
              <div className={style.skillList}>
                {DesignTools.map((design) => (
                  <SkillCard
                    key={design.title}
                    icon={design.icon}
                    title={design.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className={style.subContainerCenter}>
        <Card dragConstraint={dragConstraints}>
          <div className={style.skillContent}>
            <h3 style={{ color: "#597e52" }}>Jan the Developer</h3>
            <p>
              Enjoy coding from scratch and transforming ideas into reality within the browser.
            </p>
            <div className={style.skillGroup}>
              <h5 style={{ textAlign: 'left' }}>Languages I use:</h5>
              <div className={style.skillList}>
                {Languages.map((item) => (
                  <SkillCard key={item.title} icon={item.icon} title={item.title} />
                ))}
              </div>
              <h5 style={{ textAlign: 'left' }}>Frameworks mastered:</h5>
              <div className={style.skillList}>
                {Frameworks.map((item) => (
                  <SkillCard key={item.title} icon={item.icon} title={item.title} />
                ))}
              </div>
              <h5 style={{ textAlign: 'left' }}>Tools used:</h5>
              <div className={style.skillList}>
                {Tools.map((item) => (
                  <SkillCard key={item.title} icon={item.icon} title={item.title} />
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

export default Skills;
