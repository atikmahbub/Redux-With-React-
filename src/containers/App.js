import React,{Component} from 'react';
import {connect} from 'react-redux';
import { User } from '../components/user';
import { Main } from '../components/main';
import {setName} from '../actions/userAction.js'

class App extends Component{
  
render() {
    return (
            <div className="container">
                <Main changeUsername={ ()=>this.props.setName("John")}/>
                <User username={this.props.user.name}/>
            </div>
    );
  }
}

const mapStateToProps= (state) => {
  return{
    user: state.user,
    math: state.math
  }
}

const mapDispatchToProps= (dispatch) => {
  return{
    setName: (name) =>{
      dispatch(setName(name))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);






