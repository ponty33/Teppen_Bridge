class Navbar extends React.Component {



  render() {
    return (
      <div id="main_nav">
        <div id="main_nav_logo"><img src={asset_paths.teppen_bridge} /></div>
        <form action='/login' method='get'>
          <div><button type="submit" className="btn btn-primary">Login</button></div>
        </form>
        <form action='/admin' method='get'>
          <div><button type="submit" className="btn btn-primary">Admin</button></div>
        </form>
      </div>
    )
  }

}