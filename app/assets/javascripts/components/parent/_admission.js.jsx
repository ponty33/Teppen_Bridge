class Admission extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      admissions: { programs: [], students: [] }
    };
  }

  componentDidMount() {
    fetch(`/parents/${this.props.parent_id}/admissions`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Data incoming...");
        this.setState({ admissions: data })
        console.log("after setting state ");
      })
  }


  render() {
    var admissions = ""
    admissions = this.state.admissions.programs.map((admission) => {
      return (
        <div className="currentEnrollment_container" key={admission.id}>
          <div className="textLeft"><img src={asset_paths.enroll} /></div>
          <div>
            <h4>Program subject: {admission.subject_name}</h4>
            <h4>Student name: {admission.student_name}</h4>
            <h4>Start date: {admission.start_date}</h4>
            <h4>End date: {admission.end_date}</h4>
          </div>
        </div>
      )
    })

    return (
      <div className="container">
        <br></br>
        <div className="jumbotron">
          <h1>current enrollments</h1>
          <br></br>
          <img src={asset_paths.current_enrollment} />
        </div>
        <div className="textRight">{admissions}</div>
      </div>
    )
  }

}