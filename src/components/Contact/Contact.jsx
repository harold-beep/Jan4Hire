    import React from 'react';
    import style from './Contact.module.scss';
    import { motion } from 'framer-motion';
    import { FaLinkedin, FaGithub, FaInstagram, FaDribbble } from 'react-icons/fa';
    import { SiUpwork } from 'react-icons/si';

    const socialLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/delacruz-harold/', tooltip: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com/harold-beep', tooltip: 'GitHub' },
    { icon: FaInstagram, url: 'https://www.instagram.com/hdc.design', tooltip: 'Instagram' },
    { icon: SiUpwork, url: 'https://www.upwork.com/freelancers/~01689a0055647d9a23?mp_source=share', tooltip: 'Upwork' },
    ];

    const Contact = () => {
        return (
            <div className="section" style={{ flexDirection: 'column' }}>
                <div className={style.top}>
                    <motion.div
                        className={style.iconContainer}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {socialLinks.map(({ icon: Icon, url, tooltip }, index) => (
                            <motion.a
                                key={index}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className={style.iconLinks}
                                title={tooltip}
                            >
                                <Icon className={style.icon} />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
                <div className={style.bot}>
                    <a href="mailto:haroldish.delacruz@gmail.com" className={style.emailSection}>
                        Wanna create something? 
                        Shoot me a message!
                    </a>
                </div>
            </div>
        );
    };

    export default Contact;
