import { useState } from 'react'
import './App.css'
import AddPeriod from './components/addform/AddPeriod'
import Period from './components/period/Period'
import { parse } from 'flatted'
import {v4 as uuidv4} from 'uuid' 
function App() {

  const [periods, setPeriods] = useState([])

  const fetchPeriods = () => {
    if (localStorage.getItem('periods')) {
      setPeriods(parse(localStorage.getItem('periods')))
    }
  }

  return (
    <div className='App mt-4'>
      <AddPeriod />
      <h1>Show periods</h1>
      <button className='btn btn-primary mt-4 mb-4' onClick={fetchPeriods}>Show periods</button>
      {
        periods.map(item => (
          <Period
            key={uuidv4()}
            from={item.from}
            to={item.to}
            pricePerDay={item.pricePerDay}
            added={item.added}
          />
        ))
      }
      <hr style={{ height: '2px', width: '100%' }}></hr>

    </div>
  )
}

export default App;
