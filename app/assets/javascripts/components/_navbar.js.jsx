class Navbar extends React.Component {



  render() {
    return (
      <div id="main_nav">
        <div id="main_nav_logo"><img src={asset_paths.teppen_bridge} /></div>
        <form action='/login' method='get'>
          <button type='submit'>LOGIN</button>
        </form>
        <form action='/admin' method='get'>
          <button type='submit'>ADMIN</button>
        </form>
      </div>
    )
  }

}