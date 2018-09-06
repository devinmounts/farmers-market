import React from 'react';

function NewMarketForm(){
  let formDiv = {
    paddingTop: '125px',
    textAlign: 'center',
    height: '100%'
  };

  return (
    <div style={formDiv}>
      <form>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <input
          type='text'
          id='day'
          placeholder='Day of Week'/>
        <input
          type='hours'
          id='day'
          placeholder='Hours of operations'/>
        <input
          type='text'
          id='booth'
          placeholder='Booth ID'/>

        <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}

export default NewMarketForm;
