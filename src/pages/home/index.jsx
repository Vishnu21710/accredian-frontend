import React from 'react'
import Header from '../../components/header/header'
import Hero from './components/hero/hero'
import ReferralInfo from './components/hero/referral-info'
import ReferralData from './components/hero/referral-info/referral-data'
import Cta from './components/cta'

const Home = () => {
  return (
    <div className='w-full space-y-16'>
        <Hero/>
        <ReferralInfo/>
        <ReferralData/>
        <Cta/>
    </div>
  )
}

export default Home