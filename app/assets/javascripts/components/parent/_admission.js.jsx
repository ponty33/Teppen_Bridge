class Admission extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      admissions: []
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
      console.log("after setting state ", data);
    })
  }


  render() {
    var admissions = this.state.admissions.map((admission) => {
      return(
       <div key={admission.program.id}>
        <p>=====================================</p>
        <h2>Program subject: {admission.program.subject.name}</h2>
        <h2>Student Name: {admission.student.name}</h2>
        <h2>Start date: {admission.program.start_date}</h2>
        <h2>End date: {admission.program.end_date}</h2>

       </div>
      )
    })

    return (
      <div className="container">
        <br></br>
        <div className="jumbotron">
          <h1>current enrollment</h1>
          <br></br>
          <img src={asset_paths.current_enrollment} />
        </div>

        <div className="currentEnrollment_container">
          <div className="textLeft"><img src={asset_paths.enroll} /></div>
          <div className="textRight">{admissions}</div>
        </div>


      </div>






    )
  }

}