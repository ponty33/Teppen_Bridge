class Footer extends React.Component {



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
      <div id="main_nav" style={boxStyle}>
        <div id="main_nav_logo">
          <img src={asset_paths.teppen_bridge} />
        </div>
      </div>
    )
  }

}
