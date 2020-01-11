import React,{Component} from 'react'
import {Cell,Grid,ProgressBar } from 'react-mdl'
import './competence.css'
class Competence extends Component {
render(){
    return(
    <div>
        <Grid>
            
            <Cell col={12}>
             <div >
            <h6 style={{margin:'0'}}>{this.props.nomCompetence}</h6>
           <ProgressBar
           progress={this.props.niveauCompetence} />
           </div>
            </Cell>
        </Grid>
    </div>)
}

}

export default Competence;