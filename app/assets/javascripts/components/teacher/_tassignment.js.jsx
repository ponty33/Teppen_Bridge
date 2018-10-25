class Tassignment extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      assignments: []
    };

  }

  componentDidMount() {
    fetch(`/teachers/${this.props.teacher_id}/assignments/`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      console.log("Data incoming...");
      this.setState({ assignments: data })
      console.log("after setting state ");
    })
  }
  

  render() {
    var assignments = this.state.assignments.map((assignment) => {
        return(
          <div key={assignment.id}>
           <p>=====================================</p>
           <h2>Assignment Name: {assignment.assignment.name}</h2>
           <h2>Student Name: {assignment.student.name}</h2>
           <h2>Status: {assignment.status}</h2>
           <h2>Due Date: {assignment.assignment.end_date}</h2>
          </div>
        )
    })
    
    return(
      <div>
        <h1>Assignments</h1>
        {assignments}
      </div>
    )}
}