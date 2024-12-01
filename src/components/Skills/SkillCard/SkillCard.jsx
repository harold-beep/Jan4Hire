import React from 'react';
import style from './SkillCard.module.scss';

const SkillCard = ({ icon, title }) => {
  return (
    <div className={style.skillCard}>
      <div className={style.icon}>{icon}</div>
      <p className={style.title}>{title}</p>
    </div>
  );
};

export default SkillCard;
