class Ateacher extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      teachers: []
    };
    this.click = this.click.bind(this)
  }
  
  click(e) {
    e.preventDefault()
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
       <div className="jumbotron" key={teacher.id}>
        <h2>Teacher Name: {teacher.name}</h2>
        <h2>E-mail: {teacher.email}</h2>
        <h2>Hourly wage: {teacher.hourly_wage}</h2>

       </div>
      )
     })
    
    return(
      <div className="container">
        <br></br>
        <div className="jumbotron">
          <h1>teachers</h1>
          <br></br>
          <img src={asset_paths.family} />
        </div>

        <h1>Add New Teacher</h1>
        <form className="jumbotron" action='/admin/teachers' method='post'>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Teacher name:</label>
            <textarea name="name" type='text' placeholder='Teacher name' className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Teacher email:</label>
            <textarea name="email" type='text' placeholder='Teacher email' className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Teacher password:</label>
            <textarea name="password" type='text' placeholder='Teacher password' className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
          </div>

          <div><button type="submit" className="btn btn-primary">Add</button></div>
        </form>
      
        <div>
          <h1>Teachers</h1>
          {teachers}
        </div>
      </div>
    )}

}