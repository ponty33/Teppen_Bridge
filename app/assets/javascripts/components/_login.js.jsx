class Login extends React.Component{
  
  
  
  render() {
    return(
      <div>
         <Navbar />
 
      <div className="container">
       
        <div className="jumbotron">
        
        <form className="form-horizontal" id="login-form" action='/login' method='post'>
          <div className="login-header">
          <h1>Login</h1>
          </div>
          <br></br>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Email:</label>
            <input name="email" type='email' placeholder='email' className="form-control" id="exampleFormControlTextarea1" rows="1" />
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Password:</label>
            <input name="password" type='password' placeholder='password' className="form-control" id="exampleFormControlTextarea1" rows="1" />
          </div>

          <div><button type="submit" className="btn btn-primary">Login</button></div>
        </form>
        </div>

      </div>
      </div>
    )}

}