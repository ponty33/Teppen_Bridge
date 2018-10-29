function Loginb(props) {
  var buttonStyle = {
    padding: '1em'
  }
  
  if (props.user_id === 0) {
    return(
      <form action='/login' method='get' style={buttonStyle}>
        <button type="submit" className="btn btn-primary">LOGIN</button>
      </form>
    )
  } else {
    return(
      <form action='/logout' method='get' style={buttonStyle}>
        <button type="submit" className="btn btn-danger">LOGOUT</button>
      </form>
    )
  }
}
  
