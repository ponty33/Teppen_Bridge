

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

              <div id="text_container">
                <h3 id="text_teacher_reviews">Student:</h3>
                <h3>{element.student}</h3>
              </div>

              <div id="text_container">
                <h3 id="text_teacher_reviews">Assignment Name:</h3>
                <h3>{assignment.name}</h3>
              </div>

              <div id="text_container">
                <h3 id="text_teacher_reviews">Score:</h3>
                <h3>{assignment.score}</h3>
              </div>

              <div id="text_container">
                <h3 id="text_teacher_reviews">Comment:</h3>
                <h3>{assignment.feedback}</h3>
              </div>



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





