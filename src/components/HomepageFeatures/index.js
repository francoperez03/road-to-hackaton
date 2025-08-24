import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Entrenamiento IA',
    link: '/ai-playbook-noir-solidity',
    description: (
      <>
        Prompts y estrategias probadas para construir proyectos ganadores con IA
      </>
    ),
  },
  {
    title: 'Arsenal de Recursos',
    link: '/docs/cheatsheet-solidity-2025',
    description: (
      <>
        Cheatsheets, checklists y patrones para hackathons de alta velocidad
      </>
    ),
  },
  {
    title: 'Coaching 1:1',
    link: '/connect',
    description: (
      <>
        Sesiones intensivas para destrabar y acelerar tu proyecto
      </>
    ),
  },
];

function Feature({title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>
          <a href={link} className={styles.featureLink}>
            {title}
          </a>
        </h3>
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
          <div className="col col--12">
            <h2 className="text--center margin-bottom--lg">Tu Kit de Supervivencia para Hackathons</h2>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}