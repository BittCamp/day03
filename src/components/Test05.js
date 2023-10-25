import React,{useState} from 'react';
import Name from './Name';
import Fruit from './Fruit';
import Output from './Output';

const Test05 = () => {

    const[name , setName] = useState('asda')
    const[fruit , setFruit] = useState('과')

    const onInputName = (e) =>{
        const {value} = e.target
        setName(value)
     }
    const onInputFruit = (e) =>{ 
        const {value} = e.target
        setFruit(value)
    }

    return (
        <div>
            <Name name={name} onInputName={onInputName} />
            <Fruit fruit={fruit} onInputFruit={onInputFruit}/>
            <Output name={name} fruit = {fruit} />
        </div>
    );
};

export default Test05;