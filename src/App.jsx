import { useState } from 'react'
import Home from './Screen/Home/Home'
import ExpertiseSection from './Screen/Home/Components/OurExpertise'
import AlllProjects from './Screen/Home/Components/AlllProjects'
import RecentWorks from './Screen/Home/Components/RecentWorks'

import Process from './Screen/Home/Components/Process'
import Faq from './Screen/Home/Components/Faq'
import Services from './Screen/Home/Components/Services'
import Footer from './Screen/Auth/Footer'
import Navbar from './Screen/Auth/Navbar'


function App() {
  return (
     <>
    <div className='bg-black'>
      <Navbar/>
      
     <Home/>
    
     <AlllProjects/>
     <div className=' p-8'>
      <ExpertiseSection/>
     <RecentWorks/>
        <Process/>
        
   <Services/>
   <Faq/>

     <Footer/>

     </div>
     </div>
     </>
  
  )
}

export default App;



