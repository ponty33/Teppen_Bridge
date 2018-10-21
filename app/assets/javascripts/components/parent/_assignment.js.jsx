class Assignment extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      assignment: []
    };
  }
  
  componentDidMount() {
    // console.log('ffff', session['user_id'])
    fetch('/parents/1/assignments')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      console.log("Data incoming...");
      this.setState({ assignment: data})
      console.log("after setting state ",this.state.assignment);
    })
  }
  
  render() {
    var assignments = this.state.assignment.map((assignment) => {
      return(
       <div key={assignment.id}>
        <h2>{assignment.score}</h2>
        <h2>{assignment.student_id}</h2>
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