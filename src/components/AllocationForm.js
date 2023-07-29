import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const {currency, dispatch } = useContext(AppContext);

    const [department, setDepartment] = useState('');
    const [allocation, setAllocation] = useState('');
    const [action, setAction] = useState('');


    const submitEvent = () => {
        const expense = {
            name: department,
            cost: parseInt(allocation),
        };

        if (action === "Add") {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        }
    };

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setDepartment(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="Marketing"> Marketing</option>
                        <option value="Finance" name="Finance">Finance</option>
                        <option value="Sales" name="Sales">Sales</option>
                        <option value="Human Resoruces" name="Human Resoruces">Human Resoruces</option>
                        <option value="IT" name="IT">IT</option>
                    </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>
                    <span className="eco" style={{ marginLeft: '2rem', marginRight: '8px' }}></span>
                    <span className='p-1'>{currency}</span>
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={allocation}
                        style={{ size: 10 }}
                        onChange={(event) => setAllocation(event.target.value)}>
                    </input>

                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AllocationForm;
