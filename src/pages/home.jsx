import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button
} from 'framework7-react';
import MyApp from '../components/app';


//import { ItemTypes } from './Constants';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Container from '../components/Container';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      <NavLeft>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle sliding>Video Studio</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:video" panelOpen="right" />
      </NavRight>
      <NavTitleLarge>Video Studio</NavTitleLarge>
    </Navbar>
    {/* Toolbar 
    <Toolbar bottom>
      <Link>Left Link</Link>
      <Link>Right Link</Link>
    </Toolbar>*/}
    {/* Page content */}

    <BlockTitle>Drop one video file here</BlockTitle>
		<DndProvider backend={HTML5Backend}>
    <Container></Container>
    <span>♘</span>
		</DndProvider>
  </Page>
);
export default HomePage;