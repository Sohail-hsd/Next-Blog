import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>

      <style jsx>
        {`
            h2 {
              font-size:38px;
            }
            h3{
              font-size:28px;
            }
        `}
      </style>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className={styles.nav}>
        <ul className={styles.navbar}>

          <li>
            <Link href="/blog">
              <a>Home</a>
            </Link>
          </li>

          <li>
            <Link href='/blog/About'>
              <a>About</a>
            </Link>
          </li>

          <li>
            <Link href='/blog/Contact'>
              <a>Contact Us</a>
            </Link>
          </li>

          <li>
            <Link href='/blog/Blog'>
              <a>Blog</a>
            </Link>
          </li>

        </ul>
      </nav>

      {/* Main */}

      <main className={styles.main}>

        <h1 className={styles.title}>
          The Hunting Codder
        </h1>
        <div className={styles.Imagewarp}>
          <Image className={styles.Image} src='/home.jpg' width='700' height='500' />
        </div>

        <a className={styles.description}>
          A blog for Code hunters, by code hunters.
        </a>

        <div className="blogs">
          <h2>Papular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn next js in 2022</h3>
            <p>JavaScript is language, used to design interactive web pages.</p>
          </div>
          <div className="blogItem">
            <h3>How to learn next js in 2022</h3>
            <p>JavaScript is language, used to design interactive web pages.</p>
          </div>
          <div className="blogItem">
            <h3>How to learn next js in 2022</h3>
            <p>JavaScript is language, used to design interactive web pages.</p>
          </div>
        </div>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
