import React, { useState } from 'react'
import style from './Card.module.scss';
import { motion } from 'framer-motion';

const Card = ({children, dragConstraint}) => {
    const [isReset, setIsReset] = useState(false);

    const resetPosition = () => {
      setIsReset(true);
      setTimeout(() => {
        setIsReset(false);
      }, 2000);
    };

    return (
        <motion.div
            drag
            whileHover={{ scale: 1.1 }}
            initial={{ x: 0, y: 0 }}
            animate={isReset ? { x: 0, y: 0 } : {}}
            transition={{ type: 'spring', duration: 1 }}
            className={style.cardStyle}
            onDragEnd={resetPosition}
            dragConstraints={dragConstraint}
        >
            {children}
        </motion.div>
    );
};

export default Card;