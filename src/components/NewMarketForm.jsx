import React from 'react';

function NewMarketForm(){
  let formDiv = {
    paddingTop: '125px',
    textAlign: 'center',
    height: '100%'
  };

  function handleNewMarketFormSubmission(event) {
    event.preventDefault();
    console.log(_location.value);
    console.log(_day.value);
    console.log(_hours.value);
    console.log(_booth.value);
    _location.value = '';
    _day.value = '';
    _hours.value = '';
    _booth.value = '';

  }

  return (
    <div style={formDiv}>
      <form onSubmit={handleNewMarketFormSubmission}>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <input
          type='text'
          id='day'
          placeholder='Day of Week'
          ref={(input) => {_day = input;}}/>
        <input
          type='text'
          id='hours'
          placeholder='Hours of operations'
          ref={(input) => {_hours = input}}/>
        <input
          type='text'
          id='booth'
          placeholder='Booth ID'
          ref={(input) => {_booth = input}}/>
        <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}

export default NewMarketForm;
