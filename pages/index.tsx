import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Form from '../components/Form'
import PostFeed from '../components/PostFeed'

const Home: NextPage = () => {
  return (
   <>
   <Header label='Home'/>
   <Form placeholder="What's happening?"/>
   <PostFeed/>
   </>
  )
}

export default Home
