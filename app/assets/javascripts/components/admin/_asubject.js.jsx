class Asubject extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      subjects: []
    };
  }
  
  componentDidMount() {
    fetch(`/admin/subjects`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      console.log("Data incoming...");
      this.setState({ subjects: data })
      console.log("after setting state ");
    })
  }
  
  render() {
    var subjects = this.state.subjects.map((subject) => {
      return(
       <div key={subject.id}>
        <p>=====================================</p>
        <h2>Subject: {subject.name}</h2>
        <h2>Price: {subject.cost}</h2>
       </div>
      )
     })
    
    return(
      <div>
        <h1>Current subjects</h1>
        {subjects}
      </div>
    )}

}