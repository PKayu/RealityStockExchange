import React from 'react';

const Combobox = () => {
    return (
        <div className='combobox'>
            <select name="weeks">
                <option value="currentWeek">Current</option>
                <option value="week1">Week 1</option>
                <option value="week2">Week 2</option>
                <option value="week3">Week 3</option>
            </select>
        </div>
    );
};

export default Combobox;
