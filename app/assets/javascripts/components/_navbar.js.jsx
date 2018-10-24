class Navbar extends React.Component {



  render() {
    return(
      <div>
        <form action='/' method='get'>
          <button type='submit'>HOME</button>
        </form>
        <form action='/login' method='get'>
          <button type='submit'>LOGIN</button>
        </form>
        <form action='/admin' method='get'>
          <button type='submit'>ADMIN</button>
        </form>
      </div>
    )}

}