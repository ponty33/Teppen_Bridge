

class Assignment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      assignments: []
    };
  }

  componentDidMount() {
    fetch(`/parents/${this.props.parent_id}/assignments`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Data incoming...", data);
        this.setState({ assignments: data })
      })
  }

  render() {
    let assignments = [];
    this.state.assignments.forEach((element, i) => {
      let studentAssignments = element.assignments.map((assignment) => {
        return (
          <div className="assignment_box" key={assignment.id}>
            <div>
              <h4>Student :{element.student}</h4>
              <h4>Assignment Name: {assignment.name}</h4>
              <h4>Score: {assignment.score}</h4>
              <h4>Comment: {assignment.feedback}</h4>
            </div>
          </div>
        )
      })
      assignments = assignments.concat(studentAssignments);
    });

    return (
      <div>
        <br></br>
        <div className="container">
          <div className="jumbotron">
            <h1>assignments</h1>
            <br></br>
            <img src={asset_paths.assignment} />
          </div>
          {assignments}
        </div>
      </div>
    )
  }

}






