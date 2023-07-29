
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaMinusCircle,FaPlusCircle } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';


const ExpenseItem = (props) => {
    const {dispatch,currency} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const handleIncrement = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const handleDecrement = (name) =>{
        const expense ={
            name:name,
            cost:10,
        }
        dispatch({
            type:'RED_EXPENSE',
            payload : expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={event=>handleIncrement(props.name)}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={event=>handleDecrement(props.name)}></FaMinusCircle></td>
        <td><AiFillCloseCircle size='2.2em'  onClick={handleDeleteExpense}></AiFillCloseCircle></td>
        </tr>
        
    );
};

export default ExpenseItem;
