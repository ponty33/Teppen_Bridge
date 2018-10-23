

class Assignment extends React.Component {

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
        console.log("after setting state ", this.state.assignment);
      })
  }

  render() {
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
    })

    return (
      <div>
        <br></br>
        <div className="container">
          <div className="jumbotron">
            <h1>Assignment</h1>
            <p>Student Assignments</p><img src={asset_paths.student} />
          </div>
          {assignments}
        </div>
      </div>
    )
  }

}






