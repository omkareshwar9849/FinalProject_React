import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const  Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const [bud, setBud]=useState(budget);

    const handleChange = (event)=>{
        setBud(event.target.value);
        dispatch({
            type:'SET_BUDGET',
            payload : event.target.value
        });
    };

    return (
        <div className='alert alert-secondary'>
            Budget:&nbsp; &nbsp;&nbsp;{currency}<input onChange={handleChange} type="number" name="budget" id="budget" value={bud} />
        </div>
    );
};

export default Budget ;
