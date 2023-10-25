import React from 'react';

const Test07Output = ({name,onPrev}) => {
    return (
        <div>
            <h3>{name} 님</h3>
            <h3>설문조사 감사합니다.</h3>
            <input type='button' onClick={onPrev} value='이전'></input>
        </div>
    )
    
};

export default Test07Output;