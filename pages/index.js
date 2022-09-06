import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Header from '../components/header';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home({datas}) {
  const [restaus,setRestaus]=useState([])
  useEffect( ()=>{
    
   axios.get('./api/restau/get').then(
      resp=>{
        console.log(resp.data);
        setRestaus(resp.data)
      }
    ).catch(
      e=>{
        console.log(e);
      }
    )
  
 
    
  },[])
  //console.log(users);
  return (
    <div className='container'>
      <Head>
        <title>Welcome To Chop don done! </title>
        <meta name="description" content="Find wetin di cook :)Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
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

/*export async function getServerSideProps(context) {
  
  

  
  const resp =await axios.get('api/hello.js')
  const data= await resp.data
   return{
    props:{
      data:data|| null
    }
  }
 
 // }
  //catch(e){
    //console.log(e);
  //}
  
}*/

