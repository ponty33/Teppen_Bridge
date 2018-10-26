

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
          <div className="assignment_box">
            <p>
              <div key={assignment.id}>
                <h2>Student :{element.student}</h2>
                <h2>Assignment Name: {assignment.name}</h2>
                <h2>Score: {assignment.score}</h2>
                <h2>Comment: {assignment.feedback}</h2>
              </div>
            </p>
          </div>
        )
      })
      assignments = assignments.concat(studentAssignments);

    });
    {/*
    var assignments = this.state.assignment.map((assignment) => {
      return (
        <div className="assignment_box">
          <p>
            <div key={assignment.id}>
              <h2>Assignment Name: {assignment.name}</h2>
              <h2>Score: {assignment.score}</h2>
              <h2>Comment: {assignment.feedback}</h2>
            </div>
          </p>
        </div>
      )
    })*/}

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






