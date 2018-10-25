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
        console.log("Data incoming...", data);
        this.setState({ admissions: data })
        console.log("after setting state ", data);
      })
  }


  render() {
    console.log("render admissions", admissions)
    var admissions = "";
    admissions = this.state.admissions[0].program.map((admission) => {
      return (
        <div className="currentEnrollment_container">
          <div className="textLeft"><img src={asset_paths.enroll} /></div>
          <div key={admission.id}>
            <h4>Program subject: {admission.subject}</h4>
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