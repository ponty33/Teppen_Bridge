class Admission extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      admission: []
    };
  }

  componentDidMount() {
    fetch(`/parents/${this.props.parent_id}/admissions`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      console.log("Data incoming...");
      this.setState({ admission: data })
      console.log("after setting state ", data);
    })
  }
  
  
  render() {
    var admissions = this.state.admission.map((admission) => {
      return(
       <div key={admission.id}>
        <p>=====================================</p>
        <h2>Program subject: {admission.subject_name}</h2>
        <h2>Start date: {admission.start_date}</h2>
        <h2>End date: {admission.end_date}</h2>

       </div>
      )
     })
    
    return(
      <div>
        <h1>Current Enrollment</h1>
        {admissions}
      </div>
    )}

}