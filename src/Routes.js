import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './Pages/Home';
import MainPage from './Pages/MainPage';
import UploadPage from './Pages/UploadPage';
import PlayerPage from './Pages/PlayerPage'
import ProfilePage from './Pages/ProfilePage';

export default class Routes extends Component {

     render() {
         return (
             <Switch>
                 <Route 
                     exact path='/' 
                     component={HomePage}
                 />
                 <Route 
                     path='/user/:userId'
                     render={(routeProps) => {
                         return (
                         <ProfilePage
                         userId={routeProps.match.params.userId} 
                         />
                         )}}
                 />
                 <Route 
                     path='/user/:uploadId'
                     render={(routeProps) => {
                         return (
                         <PlayerPage
                              uploadId={routeProps.match.params.uploadId}                        
                         />)
                     }}
                 />
                 <Route 
                     path='/add-upload'
                     component={UploadPage}
                 />
                 <Route
                     path='/add-note'
                     component={MainPage}
                 />
             </Switch>
         )
     }
 }