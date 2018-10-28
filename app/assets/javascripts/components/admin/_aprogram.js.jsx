class Aprogram extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      programs: [],
      teachers: [],
      subjects: [],
      selectedTeacher: "Select Teacher",
      selectedSubject: "Select Subject",
      teacher_id: "1",
      subject_id: "1",
    };

    this.selectedTeacher = this.selectedTeacher.bind(this);
    this.selectedSubject = this.selectedSubject.bind(this);

  }

  selectedTeacher(e) {
    console.log(e.target.getAttribute("data-val"));
    this.setState({
      programs: this.state.programs,
      teachers: this.state.teachers,
      subjects: this.state.subjects,
      selectedTeacher: e.target.getAttribute("data-val"),
      selectedSubject: this.state.selectedSubject,
      teacher_id: e.target.getAttribute("data-id"),
      subject_id: this.state.subject_id,
    });
  }

  selectedSubject(e) {
    console.log(e.target.getAttribute("data-val"));
    this.setState({
      programs: this.state.programs,
      teachers: this.state.teachers,
      subjects: this.state.subjects,
      selectedTeacher: this.state.selectedTeacher,
      selectedSubject: e.target.getAttribute("data-val"),
      teacher_id: this.state.teacher_id,
      subject_id: e.target.getAttribute("data-id"),
    });
  }

  componentDidMount() {
    fetch(`/admin/programs`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Data incoming...", data);
        this.setState({
          programs: data[0], teachers: data[1], subjects: data[2],
          selectedTeacher: this.state.selectedTeacher, selectedSubject: this.state.selectedSubject,
          teacher_id: this.state.teacher_id, subject_id: this.state.subject_id
        })
        console.log("after setting state ");
      })
  }

  render() {
    var programs = this.state.programs.map((program) => {
      return (
        <div id="admin_textbox" className="jumbotron" key={program.id}>
          <h2>Subject: {program.subject.name}</h2>
          <h2>Teacher: {program.teacher.name}</h2>
          <h2>Start Date: {program.start_date}</h2>
          <h2>End Date: {program.end_date}</h2>
        </div>
      )
    })

    return (
      <div className="container">
        <br></br>
        <div className="jumbotron">
          <h1>Programs</h1>
          <br></br>
          <img src={asset_paths.programs2} />
        </div>

        <h1>Add New Program</h1>

        <div id="admin_add" className="jumbotron">
          <form action='/admin/programs' method='post'>

            <input name="teacher_id" type="hidden" value={this.state.teacher_id} />
            <input name="subject_id" type="hidden" value={this.state.subject_id} />

            <div className="dropdown">
              <span>Teacher: </span>
              <br></br>
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {this.state.selectedTeacher}
              </button>


              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                {this.state.teachers.map(n => {
                  console.log(n);
                  return (<a className="dropdown-item" data-val={n.name} data-id={n.id} value={n.id} key={n.id} onClick={this.selectedTeacher}>{n.name}</a>);
                })}

              </div>


            </div>

            <br></br>

            <div className="dropdown">
              <span>Subject: </span>
              <br></br>
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {this.state.selectedSubject}
              </button>


              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                {this.state.subjects.map(n => {
                  console.log(n);
                  return (<a className="dropdown-item" data-val={n.name} data-id={n.id} value={n.id} key={n.id} onClick={this.selectedSubject}>{n.name}</a>);
                })}

              </div>


            </div>

            <br></br>

            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Start date:</label>
              <textarea name="start_date" type='text' placeholder='Start Date' className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">End date:</label>
              <textarea name="end_date" type='text' placeholder='End Date' className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>

            <div><button type="submit" className="btn btn-primary">Add</button></div>

          </form>
        </div>


        <div>
          <h1>Current programs</h1>
          {programs}
        </div>
      </div>
    )
  }

}