import React,{useState,useRef} from 'react';

const Test07Input = ({name,age,addr,phone,onInput,onNext}) => {

    return (
        <div>
            <p>
                <label>이름 : </label>
                <input type="text" name='name' value={name} onChange={onInput}/>
            </p>
            <p>
                <label>나이 : </label>
                <input type="text" name='age' value={age} onChange={onInput} />
            </p>
            <p>
                <label>주소 : </label>
                <input type="text" name='addr' value={addr} onChange={onInput} />
            </p>
            <p>
                <label>핸드폰 : </label>
                <input type="text" name='phone' value={phone} onChange={onInput} />
            </p>
            <p>
                <input type='button' value={'다음'} onClick={onNext}/>
            </p>
        </div>
    );
};

export default Test07Input;