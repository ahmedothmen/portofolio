
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
        <Drawer title="Title" style={{background: '#b92b27',background: '-webkit-linear-gradient(to right, #1565C0, #b92b27)', background: 'linear-gradient(to right, #1565C0, #b92b27)'}}>
            <Navigation  >
            <Link exact to="/" style={{color:'#ffff'}}>Acceuil </Link>
                <Link  exact to="/cv" style={{color:'#ffff'}}>CV </Link>
                <Link exact to="/projets" style={{color:'#ffff'}}>Projets </Link>
                <Link exact to="/contact" style={{color:'#ffff'}}>Contact</Link>
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
