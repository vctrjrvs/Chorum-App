import React from 'react'

export default class Footer extends React.Component {
     render() {
          return (
               <footer className='App_Footer'>
                    <ul className='Footer_List'>
                         {/* Links to various legal/info-based pages */}
                         <li className='Footer_Item'>
                              Terms Of Use
                         </li>
                         <li className='Footer_Item'>
                              Privacy
                         </li>
                         <li className='Footer_Item'>
                              Copyright
                         </li>
                         <li className='Footer_Item'>
                              Careers
                         </li>
                         <li className='Footer_Item'>
                              Sitemap
                         </li>
                    </ul>
               </footer>
          )
     }
}