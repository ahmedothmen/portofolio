import React,{Component} from 'react'
import {Tabs,Tab,Card,CardText,CardTitle,CardActions,Button,CardMenu,IconButton} from'react-mdl'
import './projet.css';
class Projets extends Component{
    constructor(props){
        super(props);
        this.state={
            activeTab:0
        }
    }
  afficherProjet=()=>{
      if(this.state.activeTab===0){
          return(
             <Card style={{width: '70%', margin: 'auto',marginTop:'30px'}} >
            <CardTitle className="title-style"style={{color:'#fff'}}>Portofolio en ReactJs</CardTitle> 
            <CardText className="text-style">
                <p>J'ai réalise c'est portfolio pour me présenter et présenter mes projets et aussi un 
                    démo destiné aux clients, car je développe des portfolios  pour gagner de l'argent
                    <br/><br/>
                    I created this portfolio to present myself and my projects and also a demo for clients,
                     because I develop portfolios to earn money
                    </p>
                </CardText>     
               <CardActions border>
                   <Button colored>
                       Github
                   </Button>
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                 <IconButton name="share" />
                </CardMenu>
             </Card>
         );
      }
     else if(this.state.activeTab===1){
        return(
            <div className="container">
             
            <div className="card" >
            <div className="img-card"> <h1> Introduction</h1>  </div>
            <div className="text-card">
                <div className="card-tilte">Introduction</div>
                <div className="card-content">
                  <h4>Introduction</h4>
                <p>Dans ma première année à ESPRIT j'ai participé à la réalisation d’une application qui permet de
                    mettre en contact des propriétaires avec des clients. Le cahier de charge est proposé par une
                      entreprise.
                      Nous avons procédé comme suite :
                    L’analyse de besoin puis le Backlog Product après qu'il a été validé on a réalisé le Backlog sprint puis
                       on a devisé les taches
                    Au cours des phases de développements on a utilisé git pour intégrer les tâches.
                     À la fin de chaque sprint on discute le produit avec les enseignants encadrants
                      Conception et développement d’une application  <span>Desktop</span>, <span>web</span> et <span>mobile</span>.<br/>
                     <span>Mots clés:</span> Github, SCRUM, symfony, codenameone, html, SQL, JAVA , CSS3, jquery.
                      
                      </p>
                </div>
            </div>
            </div>
        
            <div className="card" >
            <div className="img-card"><h1>JAVA</h1> </div>
            <div className="text-card">
                <div className="card-tilte">JAVA</div>
                <div className="card-content">
                  <h4>Project : Desktop</h4>
                <p> Mes taches :faire une demande de réservation d'une propriété proposée par un host
                   et  valider la réservation et proposer un recherche avancée d'une propriété proposée
                     et lister le  top 10 propriété réservé et lister les clients fidèles     
                     </p>
                     <span>Mots Clé : API PDF e, API SMS API mail , JavaFxml , MVC</span>
                     <br/>
                     <a href="https://github.com/ahmedothmen/bemgJava" accent>Github</a>
                </div>
            </div>
            </div>


            <div className="card" >
            <div className="img-card"><h1>Symfony</h1> </div>
            <div className="text-card">
                <div className="card-tilte">Symfony</div>
                <div className="card-content">
                  <h4>Project : Web</h4>
                  <p> Mes taches :faire une demande de réservation d'une propriété proposée par un host
                   et  valider la réservation et proposer un recherche avancée d'une propriété proposée
                     et lister le  top 10 propriété réservé et lister les clients fidèles     
                     </p>
                     <span>Mots Clé : Bundle externe, FOSuserBundle , ExcelBundle ,KnpSnappyBundle ,ReCaptchaBundle ,Doctrine ,DQL</span>
                     <br/>
                     <a href="https://github.com/ahmedothmen/bemgSymfony/tree/master/src/MyApp/AhmedBundle" accent>Github</a>
                
                </div>
            </div>
            </div>


            <div className="card" >
            <div className="img-card"><h1>CodeNameOne</h1></div>
            <div className="text-card">
                <div className="card-tilte">CodeNameOne</div>
                <div className="card-content">
                  <h4>Project : Mobile</h4>
                  <p> Mes taches :faire une demande de réservation d'une propriété proposée par un host
                   et  valider la réservation et proposer un recherche avancée d'une propriété proposée
                     et lister le  top 10 propriété réservé et lister les clients fidèles     
                     </p>
                     <span>Mots Clé : API PDF e, API SMS API mail  , MVC</span>
                     <br/>
                     <a href="https://github.com/ahmedothmen/bemgMobile" accent>Github</a>
                </div>
            </div>
            </div>
        
            
            
            
             </div>
        );
    }

    else if(this.state.activeTab===2){
        return( <div className="container">
             
        <div className="card" >
        <div className="img-card"> <h1> Introduction</h1>  </div>
        <div className="text-card">
            <div className="card-tilte">Introduction</div>
            <div className="card-content">
              <h4>Introduction</h4>
            <p>Dans ma 2-ème année, j’ai participé à la réalisation d'une application d'assurance.
          (Gestion de constats, de véhicules, de contacts, de Policies, des utilisateurs)
                  Nous avons procédé comme suite :
                L’analyse de besoin puis le Backlog Product après qu'il a été validé on a réalisé le Backlog sprint puis
                   on a devisé les taches
                Au cours des phases de développements on a utilisé git pour intégrer les tâches.
                 À la fin de chaque sprint on discute le produit avec les enseignants encadrants
            
                 <span>Mots clés:</span> JEE 7, JPA, EJB, Hibernet, Rest API, Retrofit, Android, ASP .net, c# Github, SCRUM
                  
                  </p>
            </div>
        </div>
        </div>
    
        <div className="card" >
        <div className="img-card"><h1> java EE</h1> </div>
        <div className="text-card">
            <div className="card-tilte">java EE</div>
            <div className="card-content">
              <h4>Sprint 1</h4>
            <p> Mes taches son la gestion de Policy (ajout suppression modification et affichage)
            Alerte en cas d’un contrat expiré
            Suggestion s’il y a un utilisateur sans contrat
             Top4 Policy    
                 </p>
                 <span>Mots Clé :API SMS API mail </span>
                 <br/>
                 <a href="https://github.com/ahmedothmen/cgaJavaEE/tree/master/cga" accent>Github</a>
            </div>
        </div>
        </div>


        <div className="card" >
        <div className="img-card"><h1>ASP.net</h1> </div>
        <div className="text-card">
            <div className="card-tilte">ASP.net</div>
            <div className="card-content">
              <h4>Sprint 2</h4>
              <p> Dans ce sprint j’ai consommé le service web exposé dans le sprint java EE affichage de Policy et j’ai
                 ajouté une nouvelle fonctionnalité commentaire (l’utilisateur peut commenter une Policy)
                Gestion de commentaire (ajout suppression modification et affichage)
               Nombre de commentaire par Policy
               Nombre de commentaire par utilisateur     
                 </p>
                 <br/>
                 <a href="https://github.com/ahmedothmen/cgaAspNet" accent>Github</a>
            
            </div>
        </div>
        </div>        
         </div>);
    }
    else if(this.state.activeTab===3){
        return(<div className="container">
         
        <div className="card" >
        <div className="img-card"><h1>Introduction</h1> </div>
        <div className="text-card">
            <div className="card-tilte">Introduction</div>
            <div className="card-content">
              <h4>Introduction</h4>
            <p> Plateforme web permettant aux différents acteurs de santé de s’interconnecter et d’échanger de la
                donnée médicale
                 </p>
                 <span>Mots clés</span>Angular, Rest Api, Spring boot, Google cloud ts Clé :API SMS API mail
                 <br/> 
                  <span>Mes taches:</span>
                  <h5>Module de gestion de prescription médicament:</h5>
                  <p>-Ajout Prescription</p>
                  <p>-Affichage Prescription</p>
                  <h5>Module de gestion de Prescription Protocole</h5>
                  <p>-Ajout prescription configurée </p>
                  <p>-Affichage prescription configurée</p>
                  <h5>Module de chat en ligne </h5> 
                  <a href="https://yes-dr.appspot.com/" accent>Demo</a>

            </div>
        </div>
        </div>

        </div>);
    }
  }
   render(){
    return (
        <div>
        <Tabs className="tabs-style"  activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})}>
            <Tab style={{color:'#fff'}}>Portofolio</Tab>
            <Tab style={{color:'#fff'}}>BeMyGuest</Tab>
            <Tab style={{color:'#fff'}}>CGA</Tab>
            <Tab style={{color:'#fff'}}>Yes DR</Tab>
        </Tabs>
        <section>
        {this.afficherProjet()}
    </section>
    </div>
    );
    }
}

export default Projets;