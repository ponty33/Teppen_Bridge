function Loginb(props) {
  var buttonStyle = {
    padding: '1em'
  }
  
  if (props.user_id === 0) {
    return(
      <form className="d-flex align-items-end" action='/login' method='get'>
        <button type="submit" className="btn btn-primary">LOGIN</button>
      </form>
    )
  } else {
    return(
      <form className="d-flex align-items-end" action='/logout' method='get'>
        <button type="submit" className="btn btn-danger">LOGOUT</button>
      </form>
    )
  }
}
  
