import React from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
     render() {
          return (
               <footer className='App_Footer'>
                    <ul className='Footer_List'>
                         {/* Links to various legal/info-based pages */}
                         <Link to='/roster' className='Footer_Item'>Roster</Link>
                         <Link to='/terms' className='Footer_Item'>Terms</Link>
                         <Link to='/privacy' className='Footer_Item'>Privacy</Link>
                         <Link to='/copyright' className='Footer_Item'>Copyright</Link>
                    </ul>
               </footer>
          )
     }
}