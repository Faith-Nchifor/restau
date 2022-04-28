import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  //console.log(users);
  return (
    <div className='container'>
      <Head>
        <title>Welcome To Chop don done! </title>
        <meta name="description" content="Find wetin di cook :)Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Welcome To Chop don done!
        </h1>

        <p className={styles.description}>
          Get started with the following steps {' '}
          
        </p>

        <div className='col-sm-12 col-md-8 col-lg-4 mx-auto'>
        <ul className="list-group">
          <li className="list-group-item">Register Your Restaurant</li>
          
          <li className="list-group-item">Customize your page</li>
          <li className="list-group-item">Update Your Menu</li>
          <li className="list-group-item">Wait for Orders</li>
        </ul>
        </div>
      <Link href={'/newRestaurant'} className='text-decoration-none'>Register</Link>
      <p>or</p>
      <Link href={'/login'} className='text-decoration-none'>Login</Link>
      
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

