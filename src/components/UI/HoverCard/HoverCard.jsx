import React from 'react';
import { motion } from 'framer-motion';
import style from './HoverCard.module.scss';

const HoverCard = ({ imgSrc, altText, link, tooltip }) => {
  return (
    <motion.div
      className={style.cardWrapper}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={style.imageContainer}>
        <img src={imgSrc} alt={altText} className={style.cardImage} />
      </div>
      <motion.div
        className={style.cardOverlay}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <a
          href={link}
          className={style.cardIcon}
          target="_blank"
          rel="noopener noreferrer"
        >
            {tooltip && tooltip}
          {/* {tooltip && (
            <motion.div
              className={style.tooltip}
              initial={{ opacity: 0, y: 0 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {tooltip}
            </motion.div>
          )} */}
        </a>
      </motion.div>
    </motion.div>
  );
};

export default HoverCard;
