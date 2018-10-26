class Asubject extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      subjects: []
    };
  }
  
  componentDidMount() {
    fetch(`/admin/subjects`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      console.log("Data incoming...");
      this.setState({ subjects: data })
      console.log("after setting state ");
    })
  }
  
  render() {
    var subjects = this.state.subjects.map((subject) => {
      return(


        <div className="jumbotron" key={subject.id}>
          <h2>Subject: {subject.name}</h2>
          <h2>Price: {subject.cost}</h2>
        </div>

      )
     })
    
    return(
      <div className="container">
        <br></br>
        <div className="jumbotron">
          <h1>subjects</h1>
          <br></br>
          <img src={asset_paths.family} />
        </div>

        <h1>Add New Subject</h1>
        <form className="jumbotron" action='/admin/subjects' method='post'>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Subject name:</label>
            <textarea name="name" type='text' placeholder='Subject name' className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Subject cost:</label>
            <textarea name="cost" type='text' placeholder='Subject cost' className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
          </div>

          <div><button type="submit" className="btn btn-primary">Add</button></div>
        </form>
        <div>
          <h1>Current subjects</h1>
          {subjects}
        </div>
      </div>
    )}

}