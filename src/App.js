
import React from 'react'
import './App.css'
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './composants/main';
import {Link} from 'react-router-dom';
function App (){
 


    return (
    <div className="App">
     <div className="demo-big-content">
    <Layout>
        <Header title="Title" className="header-style" scroll>
            <Navigation>
                <Link exact to="/">Acceuil </Link>
                <Link exact to="/cv">CV </Link>
                <Link exact to="/projets">Projets </Link>
                <Link exact to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link exact to="/">Acceuil </Link>
                <Link exact to="/cv">CV </Link>
                <Link exact to="/projets">Projets </Link>
                <Link exact to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
         <Main></Main>
        </Content>
    </Layout>
</div>
    </div>
 
  
 );
}

export default App;
