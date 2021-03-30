import React, {useState} from 'react'
import {Props} from '../../interfaces/Interfaces'

const Period: React.FC<Props> = ({from, to, added, pricePerDay}) => {
    let addedDate: Date = new Date(added)

    const [daysInBetween, setDaysInBetween] = useState<number>(0)
    
    const dateDiff = ():void => {
        setDaysInBetween(Math.floor(Date.parse(to) - Date.parse(from)) / 86400000 + 1)
    }

    return (
        <div className='period'>
            <div className='form-group row'>
                <label className='col-2 col-form-label'>From</label>
                <div className='col-10'>
                    <input
                        className='form-control'
                        value={from}
                        type='text'
                        disabled={true}
                    />
                </div>
            </div>
            <div className='form-group row'>
                <label className='col-2 col-form-label'>To</label>
                <div className='col-10'>
                    <input
                        className='form-control'
                        value={to}
                        type='text'
                        disabled={true}
                    />
                </div>
            </div>
            <div className='form-group row'>
                <label className='col-2 col-form-label'>P.P.D</label>
                <div className='col-10'>
                    <input
                        className='form-control'
                        value={pricePerDay}
                        type='text'
                        disabled={true}
                    />
                </div>
            </div>
            <div className='form-group row'>
                <label className='col-2 col-form-label'>Added</label>
                <div className='col-10'>
                    <input
                        className='form-control'
                        value={addedDate.toISOString().substring(0,10)}
                        type='text'
                        disabled={true}
                    />
                </div>
            </div>
            <div className='form-group row'>
                <label className='col-2 col-form-label'>Total</label>
                <div className='col-10'>
                    <input
                        className='form-control'
                        value={daysInBetween * pricePerDay}
                        type='text'
                        disabled={true}
                    />
                </div>
            </div>
            <button className='btn btn-primary mb-3' onClick={dateDiff}>Calculate total</button>
        </div>
    )
}

export default Period
