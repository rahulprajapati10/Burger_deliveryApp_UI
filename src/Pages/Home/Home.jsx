import React from 'react'
import Layout from '../../Components/Layouts/Layout'
import Section1 from './Section1'
import '../../Styles/SectionStyle.css'
import Section2 from './Section2'
import '../../Styles/Section2Style.css'
import Section3 from './Section3'
import '../../Styles/Section3Style.css'
import Section4 from './Section4'
import '../../Styles/Section4Style.css'
import Section5 from './Section5'
import '../../Styles/Section5Style.css'
import Section6 from './Section6'
import '../../Styles/Section6Style.css'
import Section7 from './Section7'
import '../../Styles/Section7Style.css'
import '../../Styles/FooterStyle.css'


function Home() {
  return (
    <div>
    <Layout>
        {/* Home section  Hero banner */}
        <Section1/>

        {/* Home section About */}
        <Section2/>

        {/* Home Section Menu */}
        <Section3/>

        {/* Home Section Promotion */}
        <Section4/>

        {/* Home Section Shop */}
        <Section5/>

        {/* Home Section Blog */}
        <Section6/>

        {/* Home section contact */}
        <Section7/>
      
    </Layout>
    </div>
  )
}

export default Home
