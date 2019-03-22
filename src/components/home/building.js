import React,{Component} from 'react'
import InfoContext from '../../context'

export default class Build extends Component{
  render(){
    return(
      <div>
        <InfoContext.Consumer>
          {(info)=>{
            return <div>{info.name} {info.age}</div>
          }}
        </InfoContext.Consumer> 
      </div>
    )
  }
}