import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import socialImage from '../lib/social-image'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Automated social images in a static NextJS app
        </h1>

        <p className={styles.description}>
          Demo project for automatic social images generation at build time.
        </p>

        <div className={styles.grid}>
          <a href="https://developers.facebook.com/tools/debug/" className={styles.card}>
            <h2>View &rarr;</h2>
            <p>Submit this URL to the Facebook debugger.</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Implement &rarr;</h2>
            <p>Implement the same mechanism in your own NextJS app.</p>
          </a>

          <a
            href="https://github.com/Resocio/demo-project-nextjs-devto"
            className={styles.card}
          >
            <h2>Explore &rarr;</h2>
            <p>Browse the code of this demo and see how it works.</p>
          </a>

          <a
            href="https://www.npmjs.com/package/itdk"
            className={styles.card}
          >
            <h2>Design &rarr;</h2>
            <p>
              Discover the Image Template Development Kit.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://resoc.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Resoc{' '}
          <span className={styles.logo}>
            <Image src="/resoc.png" alt="Resoc Logo" width={16} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      ...(await socialImage(
        'Automated social images in a static NextJS app',
        'Demo project',
        'homepage'
      ))
    }
  }
};
