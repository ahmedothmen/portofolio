import React,{Component} from 'react'
import './acceuil.css'
import {Cell,Grid} from 'react-mdl';
class Accueil extends Component{
 

   render(){
    return (
        <div>
            <Grid className="grid-style">
                <Cell col={12}>
                    <img src="/avatar.png" alt="avatar" className="img-style"/>
                    <span className="span-style" style={{color:'#gggg'}}><span style={{color:'#b92b27'}}>Bien</span>v<span style={{color:'#1565C0'}}>enue</span></span>
                </Cell>
              
               
                <div className="banner-style">
                <h1>Developpeur Web Full Stack </h1>
                <hr/>
                <h3>NodeJs/ReactJs/Angular  |  Java/JavaEE/Spring  |  PhP/Symfony
                <br/><br/>
                     Css/Css3/Boostrap3/Sass  |  Html/TypeScript </h3>
                  <div className="reseaux-sociaux">
                      <a href="https://www.linkedin.com/in/ahmed-ben-othmen-36573b163/">
                          <i class="fa fa-linkedin-square fa-5x" aria-hidden="true" traget="_blank"></i></a>
                      <a href="https://github.com/ahmedothmen">
                          <i class="fa fa-github-square fa-5x" aria-hidden="true" traget="_blank"></i></a>
                      <a href="https://www.facebook.com/ahmed.benothman.5">
                      <i class="fa fa-facebook-square fa-5x" aria-hidden="true" traget="_blank"></i>

                      </a>
                  </div>
                
                </div>
            </Grid>
        </div>
    );
    }
}

export default Accueil;