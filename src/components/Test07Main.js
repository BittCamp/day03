import React,{useState,useRef}  from 'react';
import Test07Input from './Test07Input';
import Test07Print from './Test07Print';
import Test07Output from './Test07Output';
import '../css/Test07.css'
const Test07Main = () => {
    
    const [data, setData] = useState({
        name: '',
        age: '',
        addr: '',
        phone: ''
    })

    const { name, age, addr, phone } = data

    const [count,setCount] = useState(1);

    const onInput = (e) => {
        const {name, value} = e.target

        setData({
            ...data,
            [name]:value
        })
    }


    const onNext = () =>{
        setCount(count + 1)
    }

    const onPrev = () =>{
        setCount(1)
    }

    let content;
            //영상보면 다른 풀이방법도 있음. [ 김찬영  2023-10-25 오후 02:14:59 ]
            if(count === 1){
                content= <Test07Input onNext={onNext} onInput={onInput} 
                name={name} age={age} addr={addr} phone={phone} /> //onNext={onNext} <== onNext 함수를 onNext(= 전방 에 있는 이름.) 로 넘겨주겠다.
            }
            else if(count === 2){
                content= <Test07Print onNext={onNext} onPrev={onPrev} 
                name={name} age={age} addr={addr} phone={phone}/>
            }
            else if(count ===3){
                content= <Test07Output name={name} onPrev={onPrev} />
            }
    return (
        <div className='wrap'>
            {content}
        </div>
    );
};

export default Test07Main;