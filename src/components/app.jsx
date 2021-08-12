import React, { useState, useEffect } from 'react';

import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';


import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {
  // Login screen demo data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginScreenOpened, setLoginScreenOpened] = useState(false);

  const signIn = () => {
    f7.dialog.alert(`Username: ${username}<br>Password: ${password}`, () => {
      f7.loginScreen.close();
    });
  };

  // Framework7 Parameters
  const f7params = {
    name: 'dashboard', // App name
      theme: 'auto', // Automatic theme detection

      // App store
      store: store,
      // App routes
      routes: routes,
  };
  const alertLoginData = () => {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
  }
  f7ready(() => {
    // MyApp.setLoginScreenOpened(true);
    //$('.login-screen').open();
    //console.log(); 
  //  f7.loginScreen.open(document.getElementById('my-login-screen'));
    //setLoginScreenOpened(true);
   // this.setLoginScreenOpened(true);
    // Call F7 APIs here
  });

  return (
    <App { ...f7params } >

        {/* Left panel with cover effect when hidden */}
        <Panel left cover themeDark visibleBreakpoint={960}>
          <View>
            <Page>
              <Navbar title="Video Studio"/>
             {/* <BlockTitle>Projects</BlockTitle>
              <List>
                <ListItem link="/left-page-1/" title="Left Page 1"/>
                <ListItem link="/left-page-2/" title="Left Page 2"/>
              </List>*/}
              <BlockTitle>Control</BlockTitle>
              <List>
                <ListItem link="/user/" view=".view-main" panelClose title="User"/>
                <ListItem link="/about/" view=".view-main" panelClose title="About"/>
               {/* <ListItem link="#" view=".view-main" back panelClose title="Back in history"/>*/}
              </List>
            </Page>
          </View>
        </Panel>


        {/* Right panel with reveal effect*/}
        <Panel right reveal themeDark>
          <View>
            <Page>
              <Navbar title="Projects"/>
              <Block>
              <List>
                <ListItem link="/video1/" view=".view-main" panelClose title="Video 1"/>
                <ListItem link="/video2/" view=".view-main" panelClose title="Video 2"/>            
              </List>
              </Block>
            </Page>
          </View>
        </Panel>


        {/* Your main view, should have "view-main" class */}
        <View main className="safe-areas" url="/" />

      {/* Popup */}
      <Popup id="my-popup">
        <View>
          <Page>
            <Navbar title="Popup">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>
              <p>Popup content goes here.</p>
            </Block>
          </Page>
        </View>
      </Popup>

      <LoginScreen 
        id="my-login-screen"
        opened={loginScreenOpened} 
        onLoginScreenClosed={() => {
          setLoginScreenOpened(false);
        }}
      >
        <View>
          <Page loginScreen>
            <LoginScreenTitle>Login</LoginScreenTitle>
            <List form>
              <ListInput
                type="text"
                name="username"
                placeholder="Your username"
                value={username}
                onInput={(e) => setUsername(e.target.value)}
              ></ListInput>
              <ListInput
                type="password"
                name="password"
                placeholder="Your password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
              ></ListInput>
            </List>
            <List>
              <ListButton title="Sign In" onClick={() => alertLoginData()} />
              <BlockFooter>
                Please enter valid credential that you received upon registration.<br />
              </BlockFooter>
            </List>
          </Page>
        </View>
      </LoginScreen>
    </App>
  )
}
export default MyApp;