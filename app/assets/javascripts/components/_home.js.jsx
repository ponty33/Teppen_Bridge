class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
      user_id: 0
    };
  }

  componentDidMount() {
    fetch(`/admin/teachers`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Data incoming...");
        this.setState({ teachers: data })
        console.log("after setting state ");
      })
  }



  render() {
    var style = {
      display: 'flex',
      justifyContent: 'space-evenly',
      paddingTop: '2em'
    };

    var imgStyle = {
      borderRadius: '9em'
    }

    var cardStyle = {
      maxWidth: "14rem"
    }

    var teaName = {
      textAlign: 'center'
    }

    var teachers = this.state.teachers.map((teacher) => {
      return (
        <div key={teacher.id}>
          <img src={teacher.img_url} style={imgStyle} className="img-thumbnail" />
          <h2 style={teaName}>{teacher.name}</h2>
        </div>
      )
    })



    return (
      <div>
        <Navbar user_id={this.state.user_id} />
        <h1 style={style}>Our Teachers</h1>
        <div style={style}>
          {teachers}
        </div>
        <div>
          <div className="card">
            <div className="card-body" style={style}>
              <blockquote className="blockquote mb-0">
                <p>If a man neglects education, he walks lame to the end of his life.</p>
                <footer className="blockquote-footer">Plato</footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div style={style}>
          <div className="card text-white bg-success mb-3" style={cardStyle} >
            <div className="card-header">Success</div>
            <div className="card-body">
              <h5 className="card-title">Professional</h5>
              <p className="card-text">Choose from our professional team to get help for specific subject.</p>
            </div>
          </div>
          <div className="card text-white bg-info mb-3" style={cardStyle}>
            <div className="card-header">Confidence</div>
            <div className="card-body">
              <h5 className="card-title">Connect</h5>
              <p className="card-text">Parents never have to worry about their children's school performace again.</p>
            </div>
          </div>
          <div className="card bg-light mb-3" style={cardStyle}>
            <div className="card-header">Easy</div>
            <div className="card-body">
              <h5 className="card-title">Sign up for free</h5>
              <p className="card-text">Register as a Teppen Bridge parent completely free of charge.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

