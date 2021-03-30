import React, {useState, useEffect} from 'react'
import {validateNumberInput} from '../../input_validation/numbers'
import {FormNode} from '../../interfaces/Interfaces'
import {stringify} from 'flatted'
const AddPeriod: React.FC = () => {
    
    const [formData, setFormData] = useState<FormNode>({
        from: '',
        to: '',
        pricePerDay: 0,
        added: Date.now()
    })
    const [periods, setPeriods] = useState<Array<FormNode>>([])

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const submitPeriod = ():void => {
        setPeriods(prev => ([...prev, formData]))
    }

    useEffect(() => {
        localStorage.setItem('periods', stringify(periods))
    }, [periods])

    return (
        <div>
            <h1 className='mt-4'>
                Add new bike-rental period
            </h1>
            <div className='form-box mt-4'>
                <div className='form-group row'>
                    <label className='col-2 col-form-label'>From</label>
                    <div className='col-10'>
                        <input className='form-control' type='date' name='from' onChange={handleInput} />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-2 col-form-label'>To</label>
                    <div className='col-10'>
                        <input className='form-control' min={formData.from} type='date' name='to' onChange={handleInput} />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-2 col-form-label'>P.P.D.</label>
                    <div className='col-10'>
                        <input className='form-control' type='text' name='pricePerDay' onChange={handleInput} onKeyPress={validateNumberInput} />
                    </div>
                </div>
            </div>
            <button className='btn btn-primary' onClick={submitPeriod}>Add</button>
            <button className='btn btn-primary ml-4' onClick={() => localStorage.removeItem('periods')}>Empty LS</button>
            <hr style={{ height: '2px', width: '100%' }}></hr>
        </div>
    )
}

export default AddPeriod
