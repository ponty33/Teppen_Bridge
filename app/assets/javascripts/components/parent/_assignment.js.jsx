

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
        <div className="assignment_box"  key={assignment.id}>
          <div>
            <div>
              <h2>Assignment Name: {assignment.name}</h2>
              <h2>Score: {assignment.score}</h2>
              <h2>Comment: {assignment.feedback}</h2>
            </div>
          </div>
        </div>
      )
    })

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






