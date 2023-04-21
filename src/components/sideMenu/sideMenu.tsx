import React from 'react';
import Link from 'next/link';
import styles from '@/components/sideMenu/sideMenu.module.scss';

const SideMenu: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.sideMenu}>
                <nav>
                    <ul>
                        <li>
                            <Link href="/" className={styles.link}>
                                おたより
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className={styles.link}>
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SideMenu;
