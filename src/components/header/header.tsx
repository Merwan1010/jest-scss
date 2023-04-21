import React from 'react';
import styles from '@/components/header/header.module.scss';

const Header: React.FC = () => {
    return (
        <div className={`${styles.wrapper}`}>
            <h3 className={`${styles.textWrapper} flex align-center`}>
                ひろば
            </h3>
        </div>
    );
};

export default Header;
