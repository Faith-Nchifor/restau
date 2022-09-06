import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'
import Header from '../../components/header';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home({datas}) {
  const [restau,setRestau]=useState([])
  const [id,setId]=useState(null)
  const [loading,setLoading]=useState(false)
  const router=useRouter()
  //const [param,setParams]=use()
  useEffect( ()=>{
    setLoading(true)
    console.log(router.query);
    setId(router.query);
   axios.post('/api/restau/getRestau',router.query).then(
      resp=>{
        setRestau(resp.data)
        console.log(resp.data);
      }
    ).catch(
      e=>{
        console.log(e);
      }
    )
    .finally(()=>setLoading(false))
  
 
    
  },[])

  //console.log(users);
  return (
    <div className='container'>
      <Head>
        <title>Name of restaurant </title>
        <meta name="description" content="Find wetin di cook :)Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <i className="fa fa-user"></i>r
        <i className="fa fa-location-arrow"></i>
        <h2 className='text-center'>Today&apos;s Menu for {restau.name}</h2>
          {loading===true &&(
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
        
        
         
      
      <main className={styles.main}>
       <div className='col-11 col-md-8 col-lg-6 card mx-auto'>
        <Image 
          src="https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg"
          alt={restau.name}
          height={300}
          width={300}
          className='card-img'
          />
          <div className='row mt-2 '>
            <div className='col'>
              <div className='d-flex'>
              <i className="fa fa-location-arrow mt-2"></i>
                <p className='text=md-center fs-5'>{restau.city}</p>
                
              </div>
              
            </div>
            <div className='col'>
            <div className='d-flex'>
            <i className="fa fa-envelope mt-2"></i>
            <p className='fs-5'>{restau.email}</p>
            </div>
              
            </div>
          </div>
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

