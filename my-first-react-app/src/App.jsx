function Box({children, styles}){
  return (
    <div style={styles}>{children}</div>
  )
}

export default function App(){
  return(
    <>
    <Box styles={{border: '2px solid red', padding: '1rem', fontSize: '24px', textAlign: 'center'}}>
        <p>Todo se va a la gran pucta</p>
        <small>onioooo</small>
    </Box>
    </>
  )
}