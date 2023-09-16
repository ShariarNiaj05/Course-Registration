# Course Registration

## 3 Most Exciting Project Features!
1. User can select **multiple courses** to enhance their knowledge.
2. But a user **can't add a single course multiple times**.
3. The user can see the total credit hour/s of the selected course.
4. After selecting one or multiple courses the amount of remaining credit hours will be lessened from the assigned credited hours.

## Management of the states in the project!
In the Home.jsx component I totally used 5 states.
* const [courses, setCourses] = useState([]);
* const [selectedCourse, setSelectedCourse] = useState([]);
* const [remainingCredit, setRemainingCredit] = useState(20);
* const [totalCreditHour, setTotalCreditHour] = useState(0);
* const [totalPrice, setTotalPrice] = useState(0);

### 1. [courses, setCourses] = useState([])
Initially, I created **[courses, setCourses] = useState([])** state for all the courses starting with an empty array. Here I put all the course information that has been set through useEffect hook.

![Here I put all the course information that has been set through useEffect hook.](https://i.ibb.co/DGTpfky/use-State-for-courses.png)

### 2. [selectedCourse, setSelectedCourse] = useState([])
This state has been used to contain the selected course. This state starts with an empty array. When the user selects one or more courses will be stored here. The information in passed thorough using map functionality on **selectedCourses.map** and passed the information using onClick handler.

### 3. [remainingCredit, setRemainingCredit] = useState(20)
This state has been used to store the remaining credit. Initially, the value is 20 credits as per requirement. when the user selects one or multiple courses the remaining credit hours will be lessened from the assigned credited hours.

### 4. [totalCreditHour, setTotalCreditHour] = useState(0);
This state has been used to store total credit hours. This will increase gradually according to selected course's credit hours.

### 5. [totalPrice, setTotalPrice] = useState(0);
Finally, this state has been used to store the total price of the selected courses.