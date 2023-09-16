import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBookOpen, FaDollarSign } from "react-icons/fa";



const Home = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [remainingCredit, setRemainingCredit] = useState(20);
    const [totalCreditHour, setTotalCreditHour] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then (data=> setCourses(data))
    }, [])


    const handleSelectedCourse = (course) => {

        const isExist = selectedCourse.find(singleSelectedCourse=> singleSelectedCourse.id == course.id)
        let creditHour = course.creditHours;
        let totalPrice = course.price;
        const maxCredit = 20;
        if (isExist) {
           return toast('This Course Already Selected!');
        }
        else {
            selectedCourse.forEach(item => {  
                creditHour += item.creditHours;
                totalPrice += item.price
            })
            const remainingCredit = maxCredit - creditHour;
            if (creditHour > maxCredit) {
                toast('Total Remaining Credit Cant be Negative')
                return toast('You Cant Exceed the Maximum Credit Hours')
            }
            else {
                
                setTotalCreditHour(creditHour);
                setRemainingCredit(remainingCredit);
                setSelectedCourse([...selectedCourse, course]);

                // setting total price of the course 
                setTotalPrice(totalPrice)
            }  
        }
    }

    return (
        <div className=' text-center font-bold'>
            <h2 className=' text-center font-bold bg-red-400'>Course Registration of PH with Shariar Islam</h2>
            <div className='flex justify-between'>
                <div>
                    {/* <h2>Course here</h2> */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    courses.map((course, idx) => (
                        <div key={idx} className='mr-3 ml-3 mt-4 mb-5'>
                                <img className='w-full' src={ course.image}></img>
                                <h2 className='text-left'>{course.courseName}</h2>
                                <p className='text-left font-normal'>{course.shortDescription}</p>
                            <div className='flex justify-evenly px-4 items-center'>
                                <h2><FaDollarSign></FaDollarSign></h2>
                                <h4 className=' lg:ml-[-30px]'>Price: {course.price}</h4>
                                <h2 className=' lg:mr-[-24px]'><FaBookOpen></FaBookOpen></h2>
                                <h4>Credit: { course.creditHours}hr</h4>
                            </div>
                            <button onClick={() => handleSelectedCourse(course)} className='bg-blue-700 text-white px-5 py-3 w-full rounded-lg mt-3'>Select</button>
                            

                        </div>
                ))
                }
                </div>
                </div>

                    <Cart selectedCourse={selectedCourse} remainingCredit={remainingCredit} totalCreditHour={totalCreditHour} totalPrice={totalPrice}></Cart>
                    <ToastContainer></ToastContainer>
                
            </div>
        </div>
    );
};

export default Home;