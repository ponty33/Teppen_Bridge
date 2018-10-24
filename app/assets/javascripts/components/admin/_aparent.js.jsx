class Aparent extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      parents: []
    };
  }
  
  componentDidMount() {
    fetch(`/admin/parents`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      console.log("Data incoming...");
      this.setState({ parents: data })
      console.log("after setting state ", this.state.parents);
    })
  }
  
  render() {
    var parents = this.state.parents.map((parent) => {
      var students = parent.student.map((stud) => {
        return(
          <h2>{stud.name}</h2>
        )
      })
      
      return(
       <div key={parent.parent.id}>
        <p>=====================================</p>
        <h2>Name: {parent.parent.name}</h2>
        <h2>E-mail: {parent.parent.email}</h2>
        <h2>Registered Students:</h2>
        {students}
       </div>
      )
     })
    
    return(


      
        <div>
          <h1>Parents</h1>
          {parents}
        </div>

    )}

}