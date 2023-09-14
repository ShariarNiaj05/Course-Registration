import React from 'react';

const Cart = ({ selectedCourse, remainingCredit, totalCreditHour, totalPrice }) => {

    // let count = 1;
    return (
        <div className='mx-auto px-5 mt-5 p-10 w-[500px] h-2/3 border border-red-500'>
            <h2 className='text-lg text-blue-500 text-left mb-5'>Total Credit Remaining: {remainingCredit}</h2>
            <hr />
            <h3 className='text-xl text-left text-gray-400'>Selected Course: { selectedCourse.length}</h3>
            {
                selectedCourse.map((course, idx) => (
                    <li key={idx}>{course.courseName}</li>  
                ))
            }
            <hr />
            <h2 className='text-left mt-3 mb-3 text-gray-400'>Total Credit Hour: {totalCreditHour}</h2>
            <hr />
            <h2 className='text-left text-gray-400'>Total Price: { totalPrice}</h2>
        </div>
    );
};

export default Cart;