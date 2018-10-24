class Newenrollment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      programs: [],
      students: [],
      selectedProgram: "Select Program",
      selectedStudent: "Select Student",
      student_id: "2",
      program_id: "2",
    };
    this.selectStudent = this.selectStudent.bind(this);
    this.selectProgram = this.selectProgram.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit() {
    alert('Thank you for your feedback.');
  }

  selectStudent(e) {
    console.log(e.target.getAttribute("data-val"));
    this.setState({
      selectedStudent: e.target.getAttribute("data-val"),
      selectedProgram: this.state.selectedProgram,
      programs: this.state.programs,
      students: this.state.students,
      student_id: this.state.student_id,
      program_id: this.state.program_id,
    });
  }

  selectProgram(e) {
    console.log(e.target.getAttribute("data-val"));
    this.setState({
      selectedProgram: e.target.getAttribute("data-val"),
      selectedStudent: this.state.selectedStudent,
      programs: this.state.programs,
      students: this.state.students,
      student_id: this.state.student_id,
      program_id: this.state.program_id,
    });
  }
  componentDidMount() {
    fetch(`/parents/${this.props.parent_id}/admissions/new`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Data incoming...");
        this.setState({
          programs: data.programs,
          students: data.students,
          selectedProgram: this.state.selectedProgram,
          selectedStudent: this.state.selectedStudent,
          student_id: data.students[0].id,
          program_id: data.programs[0].program_id,
        })
        console.log("after setting state ");
      })
  }

  render() {
    return (
      <div>

        <div>

          <h1>New enrollment</h1>

        </div>

        <form action={`/parents/${this.props.parent_id}/admissions`} method='post'>
          <input name="student" type="hidden" value={this.state.student_id} />
          <input name="program" type="hidden" value={this.state.program_id} />
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.state.selectedStudent}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

              {this.state.students.map(n => {
                console.log(n);
                return (<a className="dropdown-item" data-val={n.name} value={n.id} key={n.id} onClick={this.selectStudent}>{n.name}</a>);
              })}

            </div>
          </div>

          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.state.selectedProgram}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

              {this.state.programs.map(n => {
                console.log(n);
                return (<a className="dropdown-item" data-val={n.subject_name + " from " + n.start_date + " to " + n.end_date} value={n.id} key={n.id} onClick={this.selectProgram}>{n.subject_name} from {n.start_date} to {n.end_date}</a>);
              })}

            </div>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>

    )
  }
}