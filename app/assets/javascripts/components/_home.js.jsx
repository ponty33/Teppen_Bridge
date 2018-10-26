class Home extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      teachers: []
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
    var teachers = this.state.teachers.map((teacher) => {
      return(
       <div key={teacher.id}>
        <img src={teacher.img_url} className="img-thumbnail" />
        
        <h2>{teacher.name}</h2>
       </div>
      )
     })
    
    var style = {
      display: 'flex'
    };
    
    return(
      <div>
        <Navbar />
        <h1>Our Teachers</h1>
        <div style={style}>
          {teachers}
        </div>
        <Footer />
      </div>
    )
  }
}

