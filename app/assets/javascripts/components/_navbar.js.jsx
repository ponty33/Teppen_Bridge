class Navbar extends React.Component {



  render() {
    var boxStyle = {
      display: 'flex',
      justifyContent: 'space-between'
    }
    
    var style = {
      float: 'right',
      paddingRight: '2em',
      paddingTop: '1em'
    };

    var textStyle = {
      paddingTop: '1em',
      textAlign: 'center',
      fontSize: '3.1em'
    };
    
    return (
<<<<<<< HEAD
      <div id="main_nav">
        <div id="main_nav_logo"><img src={asset_paths.teppen_bridge} /></div>
        <form action='/login' method='get'>
          <div><button type="submit" className="btn btn-primary">Login</button></div>
        </form>
        <form action='/admin' method='get'>
          <div><button type="submit" className="btn btn-primary">Admin</button></div>
        </form>
=======
      <div id="main_nav" style={boxStyle}>
        <div id="main_nav_logo">
          <a href='/'>
            <img src={asset_paths.teppen_bridge} />
          </a>
        </div>
          <h1 style={textStyle}>Education – Your Bridge To The Future.</h1>
        <div style={style}>
            <form action='/login' method='get'>
              <button type='submit'>LOGIN</button>
            </form>
            <form action='/admin' method='get'>
              <button type='submit'>ADMIN</button>
            </form>
          </div>
>>>>>>> homepage
      </div>
    )
  }

}