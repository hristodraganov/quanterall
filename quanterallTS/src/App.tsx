import {useState} from 'react'
import './App.css';
import { FormNode } from './interfaces/Interfaces';
import {parse} from 'flatted'
import Period from './components/period/Period'
import AddPeriod from './components/addform/AddPeriod'
// import {v4 as uuidv4} from 'uuid'
const App: React.FC = () => {
  const [periods, setPeriods] = useState<Array<FormNode>>([])

  const fetchPeriods = ():void => {
    if (localStorage.getItem('periods')) {
      var ls: Array<FormNode> = parse(localStorage.getItem('periods') || '')
      setPeriods(ls)
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
            // key={uuidv4()} //TS cant find uuid module ?
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
