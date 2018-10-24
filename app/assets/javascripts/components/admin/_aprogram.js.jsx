class Aprogram extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      programs: [],
      teachers: [],
      subjects: []
    };
  }
  
  componentDidMount() {
    fetch(`/admin/programs`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      console.log("Data incoming...", data);
      this.setState({ programs: data[0], teachers: data[1], subjects: data[2] })
      console.log("after setting state ");
    })
  }
  
  render() {
    var programs = this.state.programs.map((program) => {
      return(
       <div key={program.id}>
        <p>=====================================</p>
        <h2>Subject: {program.subject.name}</h2>
        <h2>Teacher: {program.teacher.name}</h2>        
        <h2>Start Date: {program.start_date}</h2>
        <h2>End Date: {program.end_date}</h2>

       </div>
      )
     })
    
    return(
      <div>
        <h2>Add New Program</h2>
        <form action='/admin/programs' method='post'>
          <div>
            <span>Teacher: </span>
            <select name="teacher_id" onChange={this.num}>
              {this.state.teachers.map(function(teacher) { 
                return (<option value={teacher.id} key={teacher.id} >{teacher.name}</option>);
              })}
            </select>
          </div>
          <div>
            <span>Subject: </span>
            <select name="subject_id" onChange={this.num}>
              {this.state.subjects.map(function(subject) { 
                return (<option value={subject.id} key={subject.id}>{subject.name}</option>);
              })}
            </select>
          </div>
          <div>
            <input name='start_date' type='text' placeholder='Start Date' />
          </div>
          <div>
            <input name='end_date' type='text' placeholder='End Date' />
          </div>
          <button type='submit'>ADD</button>
        </form>
        <div>
          <h1>Current programs</h1>
          {programs}
        </div>
      </div>
    )
  }

}