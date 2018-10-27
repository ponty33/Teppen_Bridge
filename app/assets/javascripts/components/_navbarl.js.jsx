class Navbarl extends React.Component {



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
      fontSize: '2.5em'
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
        <div style={style}>
          <form action='/admin' method='get'style={buttonStyle}>
            <button type='submit' className="btn btn-secondary">ADMIN</button>
          </form>
        </div>
      </div>
    )
  }

}