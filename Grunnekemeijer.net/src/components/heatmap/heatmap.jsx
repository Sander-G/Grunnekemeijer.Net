import CalendarHeatmap from 'react-calendar-heatmap';
import moment from 'moment';
import React, {useEffect, useState} from 'react'







export function Heatmap (){


const [contributions, setContributions] = useState([]);
const apiKey = process.env.VITE_REACT_APP_GITHUB_TOKEN;

console.log (apiKey)
useEffect(() => {
  fetch(`https://api.github.com/users/{Sander-G}/events`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const contributions = data
        .filter((event) => event.type === 'PushEvent')
        .map((event) => ({
          date: moment(event.created_at).format('YYYY-MM-DD'),
          count: event.payload.commits.length,
        }));
      setContributions(contributions);
    });
}, []);





return (
  <div>
    <CalendarHeatmap startDate={moment().subtract(1, 'year').toDate()} endDate={new Date()} values={contributions} />
  </div>
)
}