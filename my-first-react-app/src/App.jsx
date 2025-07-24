function StudentItem(props){
  return <li><p> Name: {props.nombre}, Edad: {props.edad}</p></li>
}

function StudentList(props){
  return(
    <ul>
      {props.students.map((student) => { return <StudentItem key={student.nombre} {...student}></StudentItem>})}
    </ul>
  )
}

export default function App(){
  const students = [
    { nombre: "Juan", edad: 20 },
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 19 },
    { nombre: "María", edad: 21 }
  ];

  return(
    <>
      <h1>Student List</h1>
      <StudentList students={students}></StudentList>
    </>
  )
}