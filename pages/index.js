import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import styles from '../styles/Home.module.css'

export default function Home() {

  const handleButtonClick = () => {
    console.log('hi')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText='View stores Nearby' handleButtonClick={handleButtonClick} />
        <div className={styles.heroImage}>
          <Image src='/static/download.png' width={300} height={250} alt='image' />
        </div>
      </main>
    </div>
  )
}
