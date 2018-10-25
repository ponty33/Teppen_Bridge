class Tprogram extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      programs: []
    };

  }

  componentDidMount() {
    fetch(`/teachers/${this.props.teacher_id}/programs/`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      console.log("Data incoming...");
      this.setState({ programs: data })
      console.log("after setting state ");
    })
  }
  

  render() {
    var programs = this.state.programs.map((program) => {
      return(
       <div className="teacherReview_box" key={program.id}>
        <h2>Subject: {program.name}</h2>
        <h2>Start Date: {program.start_date}</h2>
        <h2>End Date: {program.end_date}</h2>
       </div>
      )
     })
    
    return(
      <div className="container">
        <br></br>
        <div className="jumbotron">
          <h1>Your current programs!</h1>
          <br></br>
          <img src={asset_paths.review} />
        </div>

        {programs}

      </div>
    )}
}