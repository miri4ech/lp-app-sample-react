import React from 'react'
import withProvider from '../decorators/withProvider'
import Header from '../components/Header'
import ContentHero from '../components/ContentHero'
import ContentFeatures from '../components/ContentFeatures'
import ContentPricing from '../components/ContentPricing'
import ContentContact from '../components/ContentContact'
import Footer from '../components/Footer'

if (process.browser) { require('../styles/global.css') }

const Index = () =>
  <div>
    <Header />
    <ContentHero />
    <ContentFeatures />
    <ContentPricing />
    <ContentContact />
    <Footer />
  </div>

export default withProvider(Index)
