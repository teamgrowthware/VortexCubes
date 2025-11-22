import { useState } from 'react'
import Home from './Screen/Home/Home'
import ExpertiseSection from './Screen/Home/Components/OurExpertise'
import AlllProjects from './Screen/Home/Components/AlllProjects'
import RecentWorks from './Screen/Home/Components/RecentWorks'


function App() {

  return (
    <>
    <div className='bg-black'>
     <Home/>
    
     <AlllProjects/>
     <div className=' p-8'>
      <ExpertiseSection/>
     <RecentWorks/>
     </div>
     </div>
    </>
  )
}

export default App
