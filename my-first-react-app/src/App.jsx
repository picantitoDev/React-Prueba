function Button(props){
  const styles = {
    color: props.color,
    fontSize : props.fontSize,
    border: props.border,

  }

  return(
    <>
      <button style={styles}>{props.text}</button>
    </>
  )
}

export default function App(){

    const styles = {
      text: "Valcrita",
      color: 'blue',
      border: '2px solid red',
      fontSize : '18px'
  }

  return(
    <>
      <Button {...styles}></Button>
    </>
  )
}