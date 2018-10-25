class Tassignmentper extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    if(this.state.editable){
      // let status = this.status.value
      // let score = this.score.value
      // let id = assignment.id
      // let assignment = {id: id, status: status, score: score}
      // console.log(assignment)
      // this.props.handleUpdate(assignment)
    }
    this.setState({
      editable: !this.state.editable
    })
  }  

  render() {
 
    let status = this.state.editable ? <input type='text' ref={input => this.status = input} defaultValue={assignment.status}/>:<h3>{assignment.status}</h3>
    let score = this.state.editable ? <input type='text' ref={input => this.score = input} defaultValue={assignment.score}/>:<h3>{assignment.score}</h3>  
    return(
      <div>
        <p>=====================================</p>
        <h2>Assignment Name: {assignment.assignment.name}</h2>
        <h2>Student Name: {assignment.student.name}</h2>
        <h2>Status: {status}</h2>
        <h2>Score: {score}</h2>
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Update'}</button>
        <h2>Due Date: {assignment.assignment.end_date}</h2>
      </div>
    )
  }
}
