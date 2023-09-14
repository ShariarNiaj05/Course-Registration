import React from 'react';

const Cart = ({ selectedCourse, remainingCredit, totalCreditHour }) => {
    // const {courseName, creditHours, id, price} = selectedCourse
    console.log(selectedCourse);

    // let count = 1;
    return (
        <div className='mx-auto px-5 mt-5'>
            <h2>Total Credit remainig: { remainingCredit}</h2>
            <h3 className='text-xl '>Selected Course: { selectedCourse.length}</h3>
            {
                selectedCourse.map((course, idx) => (
                    <li>{course.courseName}</li>  
                ))
            }
            <h2>Total Credit Hour: { totalCreditHour}</h2>
        </div>
    );
};

export default Cart;


{/* <h3>Credit Hour Remaining 7 hr</h3>
            <h2>Course Name</h2>
            <h3>{course.courseName}</h3>
            <h4>Total Credit Hour : 13</h4>
            <h4>Total Price : 48000 USD</h4> */}