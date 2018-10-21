class Assignment extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      assignment: []
    };
  }
  
  componentDidMount() {
    fetch(`/parents/${this.props.parent_id}/assignments`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      console.log("Data incoming...");
      this.setState({ assignment: data })
      console.log("after setting state ",this.state.assignment);
    })
  }
  
  render() {
    var assignments = this.state.assignment.map((assignment) => {
      return(
       <div key={assignment.id}>
        <p>=====================================</p>
        <h2>Assignment Name: {assignment.name}</h2>
        <h2>Score: {assignment.score}</h2>
        <h2>Comment: {assignment.feedback}</h2>
        
       </div>
      )
     })
    
    return(
      <div>
        <h1>Assignment</h1>
        {assignments}
      </div>
    )}

}