class Tassignmentper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // editable: false,
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit() {

    let status = this.status.value
    let score = this.score.value
    let id = this.props.assignment.id
    let assignment = { id: id, status: status, score: score }
    console.log(assignment)
    // this.props.handleUpdate(assignment)
  }

  render() {
    let assignment = this.props.assignment
    // let status = this.state.editable ? <input type='text' ref={input => this.status = input} defaultValue={assignment.status}/>:<h3>{assignment.status}</h3>
    // let score = this.state.editable ? <input type='text' ref={input => this.score = input} defaultValue={assignment.score}/>:<h3>{assignment.score}</h3>  
    return (
      <div className="teacherReview_box">
        <div id="teacher_assignment_status">

          <div id="text_container">
            <h3 id="text_teacher_reviews">Assignment Name:</h3>
            <h3>{assignment.assignment.name}</h3>
          </div>

          <div id="text_container">
            <h3 id="text_teacher_reviews">Student Name:</h3>
            <h3>{assignment.student.name}</h3>
          </div>

          <div id="text_container">
            <h3 id="text_teacher_reviews">Status:</h3>
            <h3>{assignment.status}</h3>
          </div>

          <div id="text_container">
            <h3 id="text_teacher_reviews">Score:</h3>
            <h3>{assignment.score}</h3>
          </div>

          <div id="text_container">
            <h3 id="text_teacher_reviews">Feedback:</h3>
            <h3>{assignment.feedback}</h3>
          </div>
        </div>


        <hr />
        <div id="text_container">
          <form action={`/teachers/${this.props.teacher_id}/assignments/${assignment.id}`} method='POST' >
            <div className="form-group">
              <div><label htmlFor="InputStatus"><h5 id="test2">Status:</h5></label></div>
              <div id="test2"><input type="text" name='status' className="form-control" id="InputStatus" aria-describedby="emailHelp" placeholder="Enter status" /></div>
            </div>



            {/* <div className="form-group">
              <label htmlFor="InputStatus"><h5 id="test2">Status:</h5></label>
              <input className="test2" type="text" name='status' className="form-control" id="InputStatus" aria-describedby="emailHelp" placeholder="Enter status" />
            </div> */}


            <div className="form-group">
              <div><label htmlFor="InputScore"><h5 id="test2">Score:</h5></label></div>
              <div id="test2"><input type="text" name='score' className="form-control" id="InputScore" aria-describedby="emailHelp" placeholder="Enter score" /></div>
            </div>

            <div className="form-group">
              <div><label htmlFor="InputFeedback"><h5 id="test2">Feedback:</h5></label></div>
              <div id="test2"><input type="text" name='feedback' className="form-control" id="InputFeedback" aria-describedby="emailHelp" placeholder="Enter feedback" /></div>
            </div>
            <div id="test2"><button type="submit" className="btn btn-primary" onClick={() => this.handleEdit()}>Update</button></div>
          </form>
          <hr />
          <div id="test2"><h5>Due Date: {assignment.assignment.end_date}</h5></div>
        </div>
      </div>
    )
  }
}




