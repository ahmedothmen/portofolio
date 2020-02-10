import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import './contact.css'
class Contact extends Component {


    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Ahmed Ben Othmen</h2>
                        <img src="avatar.png" alt="avatar" className="img-style" />
                        <p>Bonjour je suis Ben Othman Ahmed,Je suis étudiant  ingénieur  informatique à l'école Supérieur Privé d'Ingénierie et des technologies (ESPRIT) spécialité génie logiciel.
                 Actuellement je suis en train de chercher un stage dans le développement web full stack.</p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact</h2>
                        <hr />
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '1.7em' }} >
                                    <i class="fa fa-mobile fa-2x"></i>
                                    +216 53 373 244</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '1.7em' }} >
                                <i class="fa fa-envelope fa-2x "></i>
                                   ahmed.benothmen@esprit.tn</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '1.7em' }} >
                                <i class="fa fa-skype fa-2x"></i>
                               ahmed.benothmen_3</ListItemContent>
                            </ListItem>
                        </List>
                       </div>
                    </Cell>

                </Grid>
            </div>
        );

    }
}

export default Contact;