import React,{Component} from 'react'
import {Cell,Grid } from 'react-mdl'
import './cv.css'
class Experience extends Component {
render(){
    return(
    <div>
        <Grid>
            <Cell col={4}>
             {this.props.dateDebut}-{this.props.dateFin}
            </Cell>
            <Cell col={8}>
            <h4 style={{margin:'0'}}>{this.props.nomExperience}</h4>
               <p>{this.props.descExperience}</p>
            </Cell>
        </Grid>
    </div>)
}

}

export default Experience;