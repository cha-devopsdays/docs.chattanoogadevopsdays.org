import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Runbooks',
    Svg: require('@site/static/img/open_book.svg').default,
    description: (
      <>
        We've written a number of runbooks designed to help organizers make the
        most of planning the Devopsdays Chattanooga conference.
      </>
    ),
  },
  {
    title: 'The Big Day',
    Svg: require('@site/static/img/speech.svg').default,
    description: (
      <>
        In addition to runbooks, you can also see what needs to happen
        on the Big Day ™️. This way, you can feel confident that the event
        will go off without a hitch.
      </>
    ),
  },
  {
    title: 'Understanding the tools we use',
    Svg: require('@site/static/img/tools.svg').default,
    description: (
      <>
        We use a number of tools and platforms that help us put on
        Devopsdays Chattanooga successfully. You'll find everything
        you need to know about them here.
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
