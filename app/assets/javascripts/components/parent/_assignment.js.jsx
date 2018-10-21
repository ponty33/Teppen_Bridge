class Assignment extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      assignment: [{id:100,score:1000}]
    };
  }
  
  componentDidMount() {
    fetch('/api')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      console.log("testing ",data);
      this.setState({ assignment: data})
      console.log("after setting state ",this.state.assignment);
    })
  }
  
  render() {
    var fruits = this.state.assignment.map((fruit) => {
      return(
       <div key={fruit.id}>
        <h1>{fruit.score}</h1>
       </div>
      )
     })
    
    return(
      <div>
        <h1>Assignment</h1>
        {fruits}
      </div>
    )}

}