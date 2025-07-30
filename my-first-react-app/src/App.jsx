
function CounterButton(props){
  return(
    <button onClick={props.callback}>Contador</button>
  )
}

export default function App(){
  const callback = function(){
    window.alert("Hello World!")
  }

  return(
    <>
      <CounterButton callback={callback}></CounterButton>
    </>
  )
}