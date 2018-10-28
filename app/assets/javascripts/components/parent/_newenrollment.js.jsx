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
      student_id: e.target.getAttribute("data-id"),
      program_id: this.state.program_id,
    });
  }

  selectProgram(e) {
    console.log(e.target.getAttribute("data-val"));
    console.log("hi", e.target.value);
    this.setState({
      selectedProgram: e.target.getAttribute("data-val"),
      selectedStudent: this.state.selectedStudent,
      programs: this.state.programs,
      students: this.state.students,
      student_id: this.state.student_id,
      program_id: e.target.getAttribute("data-id")
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


      <div className="container">
        <br></br>


        <div className="jumbotron">
          <h1>New enrollment</h1>
          <br></br>
          <img src={asset_paths.new_enrollment} />
        </div>


        <div>

          <form action={`/parents/${this.props.parent_id}/admissions`} method='post'>
            <h4 id="new_enroll_fonts"> Please select the student:</h4>
            <input name="student" type="hidden" value={this.state.student_id} />
            <input name="program" type="hidden" value={this.state.program_id} />

            <div className="dropdown">

              <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {this.state.selectedStudent}
              </button>


              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                {this.state.students.map(n => {
                  console.log(n);
                  return (<a className="dropdown-item" data-val={n.name} data-id={n.id} value={n.id} key={n.id} onClick={this.selectStudent}>{n.name}</a>);
                })}

              </div>


            </div>

            <div className="dropdown">
              <h4 id="new_enroll_fonts">Please select the program:</h4>

              <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {this.state.selectedProgram}
              </button>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                {this.state.programs.map(n => {
                  // console.log(n);
                  return (
                    <div key={n.program_id}>
                      <a className="dropdown-item" data-id={n.program_id} data-val={n.subject_name + " from " + n.start_date + " to " + n.end_date} value={n.program_id} key={n.id} onClick={this.selectProgram}>{n.subject_name} from {n.start_date} to {n.end_date}</a>
                    </div>
                  );
                })}
              </div>
            </div>
            <br></br>

            <div><button type="submit" className="btn btn-dark">Submit</button></div>
          </form>
        </div>
      </div>

    )
  }
}