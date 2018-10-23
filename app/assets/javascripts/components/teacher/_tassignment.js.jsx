class Tassignment extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      assignments: [],
      subjects: []
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
       <div key={program.id}>
        <p>=====================================</p>
        <h2>Subject: {program.name}</h2>
        <h2>Start Date: {program.start_date}</h2>
        <h2>End Date: {program.end_date}</h2>
        
       </div>
      )
     })
    
    return(
      <div>
        <h1>Current programs in charge</h1>
        {programs}
      </div>
    )}
}