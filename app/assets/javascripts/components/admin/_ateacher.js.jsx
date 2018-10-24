class Ateacher extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      teachers: []
    };
  }
  
  componentDidMount() {
    fetch(`/admin/teachers`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      console.log("Data incoming...");
      this.setState({ teachers: data })
      console.log("after setting state ");
    })
  }
  
  render() {
    var teachers = this.state.teachers.map((teacher) => {
      return(
       <div key={teacher.id}>
        <p>=====================================</p>
        <h2>Teacher Name: {teacher.name}</h2>
        <h2>E-mail: {teacher.email}</h2>
        <h2>Hourly wage: {teacher.hourly_wage}</h2>

       </div>
      )
     })
    
    return(
      <div>
        <h2>Add New Teacher</h2>
        <form action='/admin/teachers' method='post'>
          <div>
            <input name='name' type='text' placeholder='Name' />
          </div>
          <div>
            <input name='email' type='email' placeholder='Email' />
          </div>
          <div>
            <input name='password' type='password' placeholder='password' />
          </div>
          <button type='submit'>ADD</button>
        </form>
      
        <div>
          <h1>Teachers</h1>
          {teachers}
        </div>
      </div>
    )}

}