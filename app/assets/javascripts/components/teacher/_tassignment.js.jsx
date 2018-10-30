class Tassignment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      assignments: [],
      assignmentper: []
    }
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
      let status = this.state.editable ? <input type='text' ref={input => this.status = input} defaultValue={assignment.status} /> : <h3>{assignment.status}</h3>
      let score = this.state.editable ? <input type='text' ref={input => this.score = input} defaultValue={assignment.score} /> : <h3>{assignment.score}</h3>
      return (
        <div key={assignment.id}>
          <Tassignmentper teacher_id={this.props.teacher_id} assignment={assignment} />
        </div>
      )
    })

    return (
      <div className="container">
        <br></br>
        <div className="jumbotron">
          <h1>Assignments status!</h1>
          <br></br>
          <img src={asset_paths.assignment2} />
        </div>
        <div>
          {assignments}
        </div>
      </div>
    )
  }
}
