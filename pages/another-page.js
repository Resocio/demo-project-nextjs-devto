import styles from '../styles/Home.module.css'
import socialImage from '../lib/social-image'

export default function Home() {
  return (
    <div className={styles.container}>
      Just another page...
    </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      ...(await socialImage(
        'Another page',
        'This page is actually empty',
        'another-page'
      ))
    }
  }
};
