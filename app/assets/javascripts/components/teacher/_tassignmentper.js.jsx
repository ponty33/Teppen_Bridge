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
      <div>
        <p>=====================================</p>
        <h2>Assignment Name: {assignment.assignment.name}</h2>
        <h2>Student Name: {assignment.student.name}</h2>
        <h2>Status: {assignment.status}</h2>
        <h2>Score: {assignment.score}</h2>
        <form action={`/teachers/${this.props.teacher_id}/assignments/${assignment.id}`} method='POST' >
          <input type='text' name='status' defaultValue= 'STATUS' /> 
          <input type='text' name='score' defaultValue= 'SCORE'/>
          <button type='submit' onClick={() => this.handleEdit()}>Update</button>
        </form>
        <h2>Due Date: {assignment.assignment.end_date}</h2>
      </div>
    )
  }
}
