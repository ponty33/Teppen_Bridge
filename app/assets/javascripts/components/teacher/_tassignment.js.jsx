class Tassignment extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      assignments: [],
      assignmentper: []
    }
  }

  // handleEdit(){
  //   if(this.state.editable){
  //     let status = this.status.value
  //     let score = this.score.value
  //     let id = assignment.id
  //     let assignment = {id: id, status: status, score: score}
  //     console.log(assignment)
  //     handleUpdate(assignment)
  //   }
  //   this.setState({
  //     editable: !this.state.editable
  //   })
  // }

  handleUpdate(assignemntper){
  //   fetch(`http://localhost:3000/api/v1/fruits/${assignmentper.id}`, 
  //   {
  //     method: 'PUT',
  //     body: JSON.stringify({assignemntper: assignemntper}),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then((response) => { 
  //       this.updateStatus(assignemntper)
  //     })
  }

  // updateStatus(assignemntper){
  //   let newAssignments = this.state.assignments.filter((a) => a.id !== assignemntper.id)
  //   newAssignments.push(assignemntper)
  //   this.setState({
  //     assignments: newAssignments
  //   })
  // }

  componentDidMount() {
    fetch(`/teachers/${this.props.teacher_id}/assignments/`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      console.log("Data incoming...");
      this.setState({ assignments: data })
      console.log("after setting state ");
    })
  }
  

  render() {
    var assignments = this.state.assignments.map((assignment) => {
      let status = this.state.editable ? <input type='text' ref={input => this.status = input} defaultValue={assignment.status}/>:<h3>{assignment.status}</h3>
      let score = this.state.editable ? <input type='text' ref={input => this.score = input} defaultValue={assignment.score}/>:<h3>{assignment.score}</h3>  
      return(
          <div key={assignment.id}>
           <Tassignmentper handleUpdate ={this.handleUpdate}/>
          </div>
        )
    })
    
    return(
      <div>
        <h1>Assignments</h1>
        {assignments}
      </div>
    )}
}

// t.string "name"
// t.text "content"
// t.date "start_date"
// t.date "end_date"
// t.integer "program_id"

