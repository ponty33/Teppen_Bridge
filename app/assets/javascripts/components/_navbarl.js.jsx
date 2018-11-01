class Navbarl extends React.Component {

  render() {
    var boxStyle = {
      display: 'flex',
      justifyContent: 'space-between'
    }
    
    var textStyle = {
      paddingTop: '2em',
      textAlign: 'center',
      fontSize: '43px',
      fontFamily: 'Alfa Slab One',
    };
    
    return (
      <div id="main_nav" style={boxStyle}>
        <div id="main_nav_logo">
          <a href='/'>
            <img src={asset_paths.teppen_bridge} />
          </a>
        </div>
          <h1 style={textStyle}>Education – Your Bridge To The Future.</h1>
        <div className="login_admin_button_container">
          <form id="admin_button_login" className="d-flex align-items-end" action='/admin' method='get'>
            <button type='submit' className="btn btn-secondary">ADMIN</button>
          </form>
        </div>
      </div>
    )
  }

}