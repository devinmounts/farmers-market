import React from 'react';
import NewMarketForm from './NewMarketForm';
import ConfirmationQuestions from './ConfirmationQuestions';

class NewMarketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
    this.handleAuthConfirmation = this.handleAuthConfirmation.bind(this);
  }

  handleAuthConfirmation(){
    this.setState({formVisibleOnPage: true});
    console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
   }

  render(){
    let currentVisibleContet = null;
    if (this.state.formVisibleOnPage){
      currentVisibleContet = <NewMarketForm/>
    }
    else {
      currentVisibleContet = <ConfirmationQuestions onAuthConfirmation={this.handleAuthConfirmation}/>
    }
    return(
      <div>
        {currentVisibleContet}
      </div>
    );
  }
}

export default NewMarketControl;
