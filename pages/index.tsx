import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SName>こんにちは</SName>
    </div>
  )
}

export default Home

const SName = styled.div`
  color: red;
`