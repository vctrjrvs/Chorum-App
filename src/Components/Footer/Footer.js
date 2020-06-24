import React from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
     render() {
          return (
               <footer className='App_Footer'>
                    <ul className='Footer_List'>
                         {/* Links to various legal/info-based pages */}
                         <Link className='Footer_Item'>
                              Terms Of Use
                         </Link>
                         <Link className='Footer_Item'>
                              Privacy
                         </Link>
                         <Link className='Footer_Item'>
                              Copyright
                         </Link>
                    </ul>
               </footer>
          )
     }
}