class Footer extends React.Component {



  render() {
    var boxStyle = {
      display: 'flex',
      justifyContent: 'center'
    }
    
    var style = {
      maxWidth: '18em'
    };

    var contactBox = {
      paddingRight: '2em',
      paddingTop: '2em',
      paddingLeft: '2em'
    }


    return (
      <div id="main_nav" style={boxStyle}>
        <div style={contactBox}>
          <div className="card border-secondary mb-3" style={style}>
            <div className="card-header">Contact us</div>
            <div className="card-body text-secondary">
              <p className="card-text">
                <li>Tel: 1-800-TEPPEN</li>
                <li>E-mail: support@teppen.com</li>
              </p>
            </div>
          </div>
        </div>
        <div style={contactBox}>
          <div className="card border-secondary mb-3" style={style}>
            <div className="card-header">Address</div>
            <div className="card-body text-secondary">
              <p className="card-text">
                <li>401 W Georgia St, Vancouver, Canada V6B 5A1</li>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
