import React, { useRef } from 'react';
import style from './Skills.module.scss';
import { motion } from 'framer-motion';
import Card from '../Card/Card';
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
            <h3>Jan the Designer</h3>
            <p>I value functional minimal design for an effective user experience</p>
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
              <h5 style={{ textAlign: 'left' }}>Things I love designing:</h5>
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
            <h3>Jan the Developer</h3>
            <p>
              I like to code things from scratch and enjoy bringing ideas to
              life in the browser.
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
