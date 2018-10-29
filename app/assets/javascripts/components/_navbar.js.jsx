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
      paddingTop: '1.5em',
      textAlign: 'center',
      fontSize: '2.5em',
      fontFamily: 'Asap Condensed',
      fontSize: '55px'

    };

    var buttonStyle = {
      padding: '1em'
    }

    return (
      <div id="main_nav" style={boxStyle}>
        <div id="main_nav_logo">
          <a href='/'>
            <img src={asset_paths.teppen_bridge} />
          </a>
        </div>
        <h1 style={textStyle}>Education – Your Bridge To The Future.</h1>
        {/* <div className="login_admin_button" style={style}> */}
        <div className="login_admin_button_container">

          <Loginb user_id={this.props.user_id}/>

          <form id="admin_button" className="d-flex align-items-end" action='/admin' method='get'>
            <button type='submit' className="btn btn-secondary">ADMIN</button>
          </form>

        </div>
      </div>
    )
  }

}