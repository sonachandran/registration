
import { useSelector } from 'react-redux'
import './Student.css'
const Teacher = () => {
const teacherDetails=useSelector((state)=>state.login.data)

  return (
<div className='container'>
  <h1 className='heading'>Teacher Details!</h1>
  <div className='element'>
      <p>FirstName:{teacherDetails.firstname}</p>
      <p>LastName:{teacherDetails.lastname}</p>
      <p>UserName:{teacherDetails.username}</p>
      <p>Password:{teacherDetails.password}</p>
      </div>
</div>
   
  )}

// const teacherDetails = useSelector((state) => state.login.data);

//   return (
//     <div>
//       <h1>Welcome, Teacher!</h1>
//       {teacherDetails ? (
//         <div>
//           <h2>Teacher Details</h2>
//           <p>Name: {teacherDetails.firstname}</p>
//           <p>Email: {teacherDetails.email}</p>
//           {/* Add more details as needed */}
//         </div>
//       ) : (
//         <p>Loading teacher details...</p>
//       )}
//     </div>
//   );
// };
 

export default Teacher