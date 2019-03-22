import React,{Component} from 'react'
import InfoContext from '../../context'

export default class Build extends Component{
  render(){
    return(
      <div>
        <InfoContext.Consumer>
          {(data)=>{console.log(data)}}
        </InfoContext.Consumer> 
      </div>
    )
  }
}