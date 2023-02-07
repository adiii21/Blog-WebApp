import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/green-googlyeye-bird.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolorem libero sint blanditiis saepe explicabo.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/frame-1g.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ipsa inventore ullam voluptatem voluptate incidunt?
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/email-received-icon.svg').default,
    description: (
      <>
        
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni esse eveniet asperiores, ducimus optio unde.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
