
function App() {
 
const students = ['Ahmad','Ali','Husna','Abdullah','Sarah','Zainab','Raghad','Sayed Hamed']

  return (
   <>
   <ul>
   {students.map((oneStudents)=>
   oneStudents !== "Sayed Hamed" &&
   <li key={oneStudents}>
    <p>{oneStudents}</p>
    </li>)}
    </ul>
   
   </>
  )
}

  //<p>This course is {teacher !== 'Sayed hameed ' ? '{OneStudents}' : 'Data'}</p>

export default App