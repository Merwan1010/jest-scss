import React from 'react';
import styles from '@/styles/Home.module.scss';

const Home: React.FC = () => {
  return <div className={styles.container}>
    {Array.from({ length: 100 }).map((_, index) => (
      <div key={index}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod illo blanditiis vero harum officiis debitis, voluptatem consequuntur facilis nobis, dolor beatae. Quibusdam unde veniam ut quasi totam autem maxime possimus.
      </div>
    ))}
  </div>;
};

export default Home;
