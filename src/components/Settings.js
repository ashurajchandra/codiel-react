import React, { Component } from 'react';
import { connect } from 'react-redux';

class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.auth.user.name,
            email:'',
            password:'',
            confirmPassword:'',
            editMode: false,
        }
    }

     handleChange =(fieldName, value) =>{
      this.setState({
          [fieldName]: value
      })
     }

    render() {

        const {user} = this.props.auth;
        const{editMode} = this.state;

        return (
            <div className="settings">
            <div className="img-container">
               <img  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-dp" />
            </div>

            <div className = "field"> 
            <div className="field-label">Email</div>
        <div className="field-value">{user.email}</div>
            </div>
            
            <div className = "field"> 
            <div className="field-label">name</div>
           { editMode ? (<input
            type="text" 
            onChange={(e) => this.handleChange('name', e.target.value)}
             value={this.state.name}/>
           ): 
           (    
            <div className="field-value">{user.name}</div>)
           }       
            </div>

            {editMode && (<div className="field">
            <div className="field-label">New Password</div>

            <input 
            type="password"
             onChange={(e) => this.handleChange('password', e.target.value)} 
             value={this.state.password}/>

            </div>)}

            {editMode &&(<div className="field" >
            <div className="field-label">Confirm Password</div>

             
            <input 
            type="password"
             onChange={(e) => this.handleChange('confirmPassword', e.target.value)} 
             value={this.state.confirmPassword}/>

            </div>)}

            <div className="btn-grp">
                {editMode ? (<button  className="button save-btn">Save</button>)
                : (<button 
                    onClick={()=>this.handleChange('editMode', true)}
                className="button edit-btn">
                    Edit Profile
                    </button>)}

                {editMode && (<div 
                 onClick={()=>this.handleChange('editMode', false)}
                className="go-back">
                     Go Back</div>)}

            </div>

           
            </div>
        );
    }
}

function mapStateToProps({auth}){
    return{
        auth,
    }
}

export default connect(mapStateToProps)(Settings);