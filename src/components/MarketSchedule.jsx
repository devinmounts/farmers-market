import React from 'react';
import MarketInfo from './MarketInfo';
import { Link } from 'react-router-dom';

function MarketSchedule() {

  const marketSchedule = [
    {
      day: 'Sunday',
      location: 'Lents International',
      hours: '9:00am - 2:00pm',
      booth: '4A'
    },
    {
      day: 'Monday',
      location: 'Pioneer Courthouse Square',
      hours: '10:00am - 2:00pm',
      booth: '7C'
    },
    {
      day: 'Tuesday',
      location: 'Hillsboro',
      hours: '5:00pm - 8:30pm',
      booth: '1F'
    },
    {
      day: 'Wednesday',
      location: 'Shemanski Park',
      hours: '10:00am - 2:00pm',
      booth: '3E'
    },
    {
      day: 'Thursday',
      location: 'Northwest Portland',
      hours: '2:00pm - 6:00pm',
      booth: '6D'
    },
    {
      day: 'Saturday',
      location: 'Beaverton',
      hours: '10:00am - 1:30pm',
      booth: '9G'
    }
  ];

  let scheduleDiv = {
    paddingTop: '105px',
    textAlign: 'center',
    height: '100%'
  };

  let scheduleHeader = {
    marginTop: '0',
    paddingTop: '30px'
  };

  return(
    <div style={scheduleDiv}>
      <h1 style={scheduleHeader}>Schedule</h1>
      {marketSchedule.map((market, index) =>
        <MarketInfo
          day = {market.day}
          location = {market.location}
          hours = {market.hours}
          booth = {market.booth}
          key = {index}
        />
      )}
      <Link to='/new'><button>Add New Market to Schedule</button></Link>
    </div>
  );
}

export default MarketSchedule;
