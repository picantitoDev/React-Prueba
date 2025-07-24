function ListItem(props){
  return <li>{props.animal}</li>
}

function List(props){
  return(
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal}></ListItem>
      })}
    </ul>
  );
}


export default function App(){
  const animals = ['ave', 'perro', 'gato', 'liebre', 'pez']
  return (
    <>
      <h1>Animal List:</h1>
      <List animals={animals}></List>
    </>
  );
}
