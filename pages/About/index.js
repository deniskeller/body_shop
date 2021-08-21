import React from 'react';
import Link from 'next/link';
import { BaseButton, Layout } from '../../components';
import styles from './About.module.scss';
import { background } from '../../utils/global';

const About = () => {
  return (
    <Layout bg={background.light_beige}>
      <h1>About</h1>
    </Layout>
  );
};

export default About;
