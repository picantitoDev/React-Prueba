const animals = ['perro', 'gato', 'ave', 'raton'];

const animalList = animals.map( (str) => { return <li>{str}</li>})

export default function List(){
  return (
    <>
      <h1>Animal List:</h1>
      <ul>
        {animalList}
      </ul>
    </>
  );
}