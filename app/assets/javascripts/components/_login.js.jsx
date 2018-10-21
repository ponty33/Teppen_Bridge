class Login extends React.Component{
  
  
  
  render() {
    return(
      <div>
        <h1>Login</h1>
        <form action='/login' method='post'>
          <div>
            <input name='email' type='email' placeholder='Email' />
          </div>
          <div>
            <input name='password' type='password' placeholder='password' />
          </div>
          <button type='submit'>LOGIN</button>
        </form>
      </div>
    )}

}