import React,{Component} from 'react'
import {Cell,Grid } from 'react-mdl'
import './cv.css'
import Formation from'./formation'
import Experience from'./experience'
import Competence from './competence'
import ProjetAcadimique from './projetAcadimique'
class Cv extends Component {
 

      render(){
    return (
     <div>
         <Grid>
         <Cell col={4} className="panel">
              <div style={{textAlign:'center'}}>
               <img src="avatar.png"
                alt="avatar" 
                 style={{width:'250px'}} /> 
                   <hr style={{borderTop:'3px solid grey'}} />
                  <h3>Ahmed Ben Othmen</h3>
                 <h5>Développeur Web Full Stak</h5>
                 <hr style={{borderTop:'3px solid grey'}} />
                 <h6>Adresse: Sidi dhaheur Bouargoub nabeul</h6>
                 <h6>Email ahmed.benothmen@esprit.tn</h6>
                 <h6>Tel : +216 53 373 244</h6>
                 <hr style={{borderTop:'3px solid grey'}} />
                 <h5>PERSONELLES</h5>
                 <h6>Nationalité: Tunisienne</h6>
                 <h6>Age:            26</h6>
                 <h6>Permis de conduire: oui</h6>
                 <hr style={{borderTop:'3px solid grey'}} />
                       <h5> INTERETS</h5>
                  <h6>Cinéma       Sport    Manga </h6>
                 <hr style={{borderTop:'3px solid grey'}} />
                <h3>Competences</h3>
                <Competence nomCompetence="Angular" niveauCompetence="80" />
                <Competence nomCompetence="Framework Spring" niveauCompetence="70" />
                <Competence nomCompetence="Framework Symfony" niveauCompetence="70" />
                <Competence nomCompetence="ReactJs" niveauCompetence="60" />
                <Competence nomCompetence="NodeJs" niveauCompetence="60" />
                <hr style={{borderTop:'3px solid grey'}} />
                 <h5>LANGUES</h5>
                 <h6>FRANÇAIS </h6>
                 <h6>ANGLAIS</h6>
                 <h6>ARABE</h6>
              </div>
             </Cell> 
             
             
             
             
             
             
             
             
             
             <Cell col={12} className="panel1">
              <div style={{textAlign:'center'}}>
               <img src="avatar.png"
                alt="avatar" 
                 style={{width:'250px'}} /> 
                   <hr style={{borderTop:'3px solid grey'}} />
                  <h3>Ahmed Ben Othmen</h3>
                 <h5>Développeur Web Full Stak</h5>
                 <hr style={{borderTop:'3px solid grey'}} />
                 <h6>Adresse: Sidi dhaheur Bouargoub nabeul</h6>
                 <h6>Email ahmed.benothmen@esprit.tn</h6>
                 <h6>Tel : +216 53 373 244</h6>
                 <hr style={{borderTop:'3px solid grey'}} />
                 <h5>PERSONELLES</h5>
                 <h6>Nationalité: Tunisienne</h6>
                 <h6>Age:            26</h6>
                 <h6>Permis de conduire: oui</h6>
                 <hr style={{borderTop:'3px solid grey'}} />
                       <h5> INTERETS</h5>
                  <h6>Cinéma       Sport    Manga </h6>
                 <hr style={{borderTop:'3px solid grey'}} />
                <h3>Competences</h3>
                <Competence nomCompetence="Angular" niveauCompetence="80" />
                <Competence nomCompetence="Framework Spring" niveauCompetence="70" />
                <Competence nomCompetence="Framework Symfony" niveauCompetence="70" />
                <Competence nomCompetence="ReactJs" niveauCompetence="60" />
                <Competence nomCompetence="NodeJs" niveauCompetence="60" />
                <hr style={{borderTop:'3px solid grey'}} />
                 <h5>LANGUES</h5>
                 <h6>FRANÇAIS </h6>
                 <h6>ANGLAIS</h6>
                 <h6>ARABE</h6>
              </div>
             </Cell>
             <Cell col={8}>
              <div className="cv-style">
             <h2>Formation</h2>
             <hr style={{borderTop:'3px solid #ccc'}} />
              <Formation dateDebut="2016"
               dateFin="2020" nomFormation="École supérieure privée d'ingénierie et de Technologie (ESPRIT)"
                descFormation="Cycle d’Ingénieur en Informatique (Génie Logiciel)" />
             
             <Formation dateDebut="2012"
               dateFin="2016" 
               nomFormation="Faculté de science de Tunis (FST)"
                descFormation="Licence Fondamentale en informatique" />
              
              <Formation dateDebut="2011"
               dateFin="2012" 
               nomFormation="Lycée secondaire de Bouargoub"
                descFormation="Baccalauréat en sciences expérimentales" />
                  <hr style={{borderTop:'3px solid #ccc'}} />
                 
                 <h2>EXPERIENCES</h2>
                 <hr style={{borderTop:'3px solid #ccc'}} />
                 <Experience dateDebut="Mai-2019"
               dateFin="Aout-2019" 
               nomExperience="YES DR software - Freelance (développeur full stack) "
                descExperience="Plateforme web permettant aux différents acteurs de santé de s’interconnecter et d’échanger de la donnée médicale.
                Mots clés : Angular, Rest Api, Spring boot, Google cloud.  
                " />
             <Experience dateDebut="Juillet-2018"
               dateFin="sept-2018" 
               nomExperience="CGA-Stage en développement"
                descExperience="Développement d’une application Web pour gérer les assurances" />
            
            
            <Experience dateDebut="Juillet-2017"
               dateFin="Aout-2017" 
               nomExperience="Tunisie Telecom - (Stage ouvrier)"
                descExperience=" La maintenance et la mise en place des lignes téléphoniques."
                />
           
           
            <Experience dateDebut="Fév-2016"
               dateFin="juillet-2016" 
               nomExperience="CONSERVATION DE LA PROPRIETE FONCIERE (CPF) –  (Stage de fin d’études)"
                descExperience="Conception et développement d’une application web afin de Faciliter la gestion du titre foncier.   
                Mots clés : Symfony, UML (diagrammes et design pattern), SQL, Javascript
                " />
               <hr style={{borderTop:'3px solid #ccc'}} />
            <h2>PROJETS ACADEMIQUES</h2>
            <hr style={{borderTop:'3px solid #ccc'}} />
            <ProjetAcadimique 
            nomProjet="Projet administration système et réseau (Microsoft azure Tunisie)"
            descProjet="Mise en place  de  l’ensemble du réseau  et infrastructure de Microsoft azure                  afin d’envoyer et fournir ses services globaux. 
               Mots clés: GNS3, MPLS, VRF, Pfsense, VPN, Active Directory, Microsoft exchange" />
            
            <ProjetAcadimique 
            nomProjet="Projet Développement (CGA)"
            descProjet="Conception et développement d’une application Web : Backend avec java EE .net et Frontend avec JSF, Android et ASP .net
            Mots clés: JEE 7, JPA, EJB, Hibernet, Rest API, Retrofit, Android, ASP .net, c# " />

            <ProjetAcadimique 
            nomProjet="Projet Développement (BeMyGuest)"
            descProjet="Conception et développement d’une application Desktop, web et mobile.
            Mots clés: Github, SCRUM, symfony, codenameone, html, SQL, JAVA , CSS3, jquery.
            " />
            
            
            
             </div>
             </Cell>
         </Grid>
     </div>
    );

}}

export default Cv;