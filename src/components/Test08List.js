import React from 'react';
import Test08Item from './Test08Item';

const Test08List = ({ data ,onView}) => {
    return (
        <ul className='list'>
            {
                data.map(item => <Test08Item key={ item.id } item={ item } onView={ onView }/>) //데이터 한개만 보내는건 item임.
                //for(item: data){} 이것과 같다. 
                // $.each(data,function(index,item){})
            }
        </ul>
    );
};

export default Test08List;