import React, { Component } from 'react';
import style from './Card.module.css';

// Wrapper for content that can be toggled to be shown or hidden
class Card extends Component{
  constructor(props){
    super(props);
    this.state = { toggled: true }
  }

  // Toggles the content
  toggle = () => {
    this.setState({ toggled: !this.state.toggled });
  }

  render(){
    return(
      <div className={style.card}>
        <div>
        {this.state.toggled &&
          <div>
            {this.props.children}
          </div>
        }
        </div>
        <div>
          <button onClick={this.toggle}>{this.state.toggled ? 'Hide content' : 'Show content'}</button>
        </div>
      </div>
    );
  }
}

export default Card;
