class Tassignmentper extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      // editable: false,
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
  
    let status = this.status.value
    let score = this.score.value
    let id = this.props.assignment.id
    let assignment = {id: id, status: status, score: score}
    console.log(assignment)
    // this.props.handleUpdate(assignment)
  }  

  render() {
    let assignment = this.props.assignment
    // let status = this.state.editable ? <input type='text' ref={input => this.status = input} defaultValue={assignment.status}/>:<h3>{assignment.status}</h3>
    // let score = this.state.editable ? <input type='text' ref={input => this.score = input} defaultValue={assignment.score}/>:<h3>{assignment.score}</h3>  
    return(
      <div className="teacherReview_box">
        <h2>Assignment Name: {assignment.assignment.name}</h2>
        <h2>Student Name: {assignment.student.name}</h2>
        <h2>Status: {assignment.status}</h2>
        <h2>Score: {assignment.score}</h2>
        <h2>Feedback: {assignment.feedback}</h2>
        <hr />
        <form action={`/teachers/${this.props.teacher_id}/assignments/${assignment.id}`} method='POST' >
          <div className="form-group">
            <label htmlFor="InputStatus">Status</label>
            <input type="text" name='status' className="form-control" id="InputStatus" aria-describedby="emailHelp" placeholder="Enter status"/>
          </div>
          <div className="form-group">
            <label htmlFor="InputScore">Status</label>
            <input type="text" name='score' className="form-control" id="InputScore" aria-describedby="emailHelp" placeholder="Enter score"/>
          </div>
          <div className="form-group">
            <label htmlFor="InputFeedback">Status</label>
            <input type="text" name='feedback' className="form-control" id="InputFeedback" aria-describedby="emailHelp" placeholder="Enter feedback"/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={() => this.handleEdit()}>Update</button>
        </form>
        <hr />
        <h2>Due Date: {assignment.assignment.end_date}</h2>
      </div>
    )
  }
}