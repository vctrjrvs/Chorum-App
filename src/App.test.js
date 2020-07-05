import React from 'react';
import ReactDOM from 'react-dom'
// import renderer from 'react-dom-renderer'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ArtistRosterItem from './Components/ArtistRosterItem';
import ArtistRosterFilter from './Components/Forms/ArtistRosterFilter';
import EditForm from './Components/Forms/EditUserForm';
import LoginForm from './Components/Forms/LoginForm';
import Search from './Components/Forms/SearchForm';
import SignUpForm from './Components/Forms/SignUpForm';
import { Button, Section, Input, Required, Textarea } from './Components/Utils/Utils';
import Logo from './Components/Logo';
import SecondaryLogo from './Components/SecondaryLogo';

it('renders', () => {
     const div = document.createElement('div')
     ReactDOM.render(
          <BrowserRouter>
               <App />
          </BrowserRouter>, div)
     ReactDOM.unmountComponentAtNode(div)
});

it('renders', () => {
     const div = document.createElement('div')
     ReactDOM.render(
          <BrowserRouter>
               <App>
                    <Header/>
               </App>
          </BrowserRouter>, div)
     ReactDOM.unmountComponentAtNode(div)
});

it('renders', () => {
     const div = document.createElement('div')
     ReactDOM.render(
          <BrowserRouter>
               <App>
                    <Footer/>
               </App>
          </BrowserRouter>, div)
     ReactDOM.unmountComponentAtNode(div)
});

it('renders', () => {
     const div = document.createElement('div')
     ReactDOM.render(
          <BrowserRouter>
               <App>
                    <ArtistRosterItem/>
               </App>
          </BrowserRouter>, div)
     ReactDOM.unmountComponentAtNode(div)
});

it('renders', () => {
     const div = document.createElement('div')
     ReactDOM.render(
          <BrowserRouter>
               <App>
                    <ArtistRosterFilter />
               </App>
          </BrowserRouter>, div)
     ReactDOM.unmountComponentAtNode(div)
});

it('renders', () => {
     const div = document.createElement('div')
     ReactDOM.render(
          <BrowserRouter>
               <App>
                    <EditForm />
               </App>
          </BrowserRouter>, div)
     ReactDOM.unmountComponentAtNode(div)
});

it('renders', () => {
     const div = document.createElement('div')
     ReactDOM.render(
          <BrowserRouter>
               <App>
                    <LoginForm />
               </App>
          </BrowserRouter>, div)
     ReactDOM.unmountComponentAtNode(div)
});

it('renders', () => {
     const div = document.createElement('div')
     ReactDOM.render(
          <BrowserRouter>
               <App>
                    <Search />
               </App>
          </BrowserRouter>, div)
     ReactDOM.unmountComponentAtNode(div)
});

it('renders', () => {
     const div = document.createElement('div')
     ReactDOM.render(
          <BrowserRouter>
               <App>
                    <SignUpForm />
               </App>
          </BrowserRouter>, div)
     ReactDOM.unmountComponentAtNode(div)
});

it('renders', () => {
     const div = document.createElement('div')
     ReactDOM.render(
          <BrowserRouter>
               <App>
                    <Button />
               </App>
          </BrowserRouter>, div)
     ReactDOM.unmountComponentAtNode(div)
});

it('renders', () => {
     const div = document.createElement('div')
     ReactDOM.render(
          <BrowserRouter>
               <App>
                    <Section />
               </App>
          </BrowserRouter>, div)
     ReactDOM.unmountComponentAtNode(div)
});

it('renders', () => {
     const div = document.createElement('div')
     ReactDOM.render(
          <BrowserRouter>
               <App>
                    <Input />
               </App>
          </BrowserRouter>, div)
     ReactDOM.unmountComponentAtNode(div)
});

it('renders', () => {
     const div = document.createElement('div')
     ReactDOM.render(
          <BrowserRouter>
               <App>
                    <Required />
               </App>
          </BrowserRouter>, div)
     ReactDOM.unmountComponentAtNode(div)
});

it('renders', () => {
     const div = document.createElement('div')
     ReactDOM.render(
          <BrowserRouter>
               <App>
                    <Textarea />
               </App>
          </BrowserRouter>, div)
     ReactDOM.unmountComponentAtNode(div)
});

it('renders', () => {
     const div = document.createElement('div')
     ReactDOM.render(
          <BrowserRouter>
               <App>
                    <Logo />
               </App>
          </BrowserRouter>, div)
     ReactDOM.unmountComponentAtNode(div)
});

it('renders', () => {
     const div = document.createElement('div')
     ReactDOM.render(
          <BrowserRouter>
               <App>
                    <SecondaryLogo />
               </App>
          </BrowserRouter>, div)
     ReactDOM.unmountComponentAtNode(div)
});