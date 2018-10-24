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
       <div>
        <span key={teacher.id}>
          <img src={teacher.img_url} />
          <h2>{teacher.name}</h2>
        </span>
       </div>
      )
     })
    
    
    return(
      <div>
        <Navbar />
        <div>
          <h1>Our Teachers</h1>
          {teachers}
        </div>
        <Footer />
      </div>
    )
  }
}