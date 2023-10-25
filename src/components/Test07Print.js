import React from 'react';

const Test07Print = ({name,age,addr,phone,onPrev,onNext}) => {
    return (
        <div> 
            {/*div 로 안잡고 <></> 로 잡아도된다. */}
            <ul style={{listStyle:'none'}}>
                <li>이름 : <em> {name} </em></li>
                <li>나이 : <em> {age}</em></li>
                <li>주소 : <em> {addr}</em></li>
                <li>핸드폰 : <em> {phone}</em></li>
            </ul>

            <p>
            <input type='button' onClick={onPrev} value='이전'/>
            <input type='button' onClick={onNext} value='다음'/>
            </p>
        </div>
    );
};

export default Test07Print;