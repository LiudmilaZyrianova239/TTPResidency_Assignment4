//Liudmila Zyrianova
//Assignment 4

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; 
import './index.css';

class ContactCard extends Component {
    render() {
        return (
            <div class = "card">                
                <img src={this.props.avatar} alt="Avatar" width="100%" height = "100%"></img>
                <div class="container">
                <p>{this.props.name} </p>
                <p>{this.props.email} </p>
                <p>Mobile number: {this.props.mnumber} </p>
                <p>Work number: {this.props.wnumber} </p>
                </div>
            </div>
        )
    }
};

ContactCard.defaultProps = {
    avatar: "https://scienceoxford.com/wp-content/uploads/2018/03/avatar-male.jpg",
    wnumber: "No"
};

ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    mnumber:PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    wnumber: PropTypes.string,
    avatar: PropTypes.string
}

class Decrement extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: this.props.init,
        };
      }
    
    handleClick(){
        var valueN = this.state.value;
        if (valueN === 0) {
            alert("Cannot be less than zero");
        } else {
            valueN = valueN-1;
            this.setState({value: valueN});
        }        
    }
    render() {
        return (
        <div class = "center">            
            <button 
                class="button"
                onClick={() => this.handleClick() }
            >
                Decrement this number:
            </button> 
            <button class= "emptybutton">
                {this.state.value}
            </button>
        </div>

        );
    }
}

Decrement.propTypes = {
    init: PropTypes.number.isRequired,
}





class SetOfCardsWithDecr extends Component {


    renderDecrement(init1) {
        return (
            <Decrement init={init1}/>
        );
    }

    renderOneCard(name1, mnumber1, email1, avatar1, wnumber1) {
        return (
          <ContactCard name={name1} mnumber={mnumber1} email={email1} avatar = {avatar1}  wnumber={wnumber1} />
        );
    }    
    
  
    render() {    
        return (
        <div > 
            <div>
                <h2>Here you can find the Decrement Button:</h2>
                {this.renderDecrement(5)}
            </div>

            <div class = "row">
                <h2>Here you can find the Contact Cards:</h2>
                <div class = "column">
                    {this.renderOneCard("Al Capone","(123) 456-7890","bestGodFather@mobs.com", "data:image/jpeg;base64,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", "(321) 456-7890")}
                </div>
                <div class = "column">
                    {this.renderOneCard("Benjamin Button","(987) 654-3210","mainCharacter@curiouscase.com","http://images.nymag.com/daily/entertainment/20081124_button_250x250.jpg")}
                </div>
                <div class = "column">
                    {this.renderOneCard("Chandler Bing","(555) 555-5555","funnierThanJoey@friends.com", "https://pixel.nymag.com/imgs/daily/vulture/2017/03/30/30-chandler-bing.w330.h330.jpg" ,"(111) 111-1111")}
                </div>
            </div>
        </div>  
        );
    }
}




ReactDOM.render(<SetOfCardsWithDecr />, document.getElementById('root'));

