import React, { useContext } from 'react'
import ProjectCard from '../components/ProjectCard'
import TaskCard from '../components/TaskCard'
import TeamCard from '../components/TeamCard'
import { Mystore } from '../context/AuthContext'
import TaskSummary from '../components/TaskSummary'




const Dashboard = () => {
   
    



  return (
    <>
    
   
        
        <div className='grid grid-cols-3  pt-5  gap-5'>

        <ProjectCard/>
        <TaskCard/>
        <TeamCard/>
        <TaskSummary/>
       
    </div>
    
 
    </>
  )
}

export default Dashboard