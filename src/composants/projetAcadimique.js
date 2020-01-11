import React,{Component} from 'react'
import {Cell,Grid } from 'react-mdl'
import './cv.css'
class ProjetAcadimique extends Component {
render(){
    return(
    <div>
        <Grid>
            <Cell col={12}>
            <h4 style={{margin:'0'}}>{this.props.nomProjet}</h4>
               <p>{this.props.descProjet}</p>
            </Cell>
        </Grid>
    </div>)
}

}

export default ProjetAcadimique;