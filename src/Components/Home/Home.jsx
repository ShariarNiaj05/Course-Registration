import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then (data=> setCourses(data))
    }, [])

    

    return (
        <div className=' text-center font-bold'>
            <h2 className=' text-center font-bold bg-red-400'>Course Registration of PH with Shariar Islam</h2>
            <div className='flex justify-between'>
                <div>
                    <h2>curse here</h2>
                {
                // courses.map(course=> )
                }
                </div>

                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;