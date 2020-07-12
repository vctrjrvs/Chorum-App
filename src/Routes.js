import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import RosterPage from './Pages/RosterPage';
import EditProfilePage from './Pages/EditProfilePage';
import ArtistProfile from './Pages/ArtistProfile';
import TermsOfUsePage from './Pages/TermsOfUsePage';
import CopyrightPage from './Pages/CopyrightPage';
import PrivacyPage from './Pages/PrivacyPage';

export default class Routes extends Component {

     render() {
          return (
               <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/roster' component={RosterPage} />
                    <Route path='/artist/:artist_id' render={(routeProps) => {
                         return (
                              <ArtistProfile artistId={routeProps.match.params.artist_id} />
                         )
                    }}
                    />
                    <Route path='/login' component={LoginPage} />
                    <Route path='/signup' component={SignUpPage} />
                    <Route path='/edit' component={EditProfilePage} />
                    <Route path='/terms' component={TermsOfUsePage} />
                    <Route path='/copyright' component={CopyrightPage} />
                    <Route path='/privacy' component={PrivacyPage} />
                    {/* <Route path='/dashboard' component={ DashboardPage } /> */}
               </Switch>
          );
     };
};