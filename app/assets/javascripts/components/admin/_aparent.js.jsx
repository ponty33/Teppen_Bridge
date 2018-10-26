class Aparent extends React.Component {

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
          <div key={stud.id}>
            <h2>{stud.name}</h2>
          </div>
        )
      })

      return (
        <div className="jumbotron" key={parent.parent.id}>
          <div>
            <div><span><h2 id="testing">Name:</h2></span><span><h2>{parent.parent.name}</h2></span></div>
            <h2>E-mail: {parent.parent.email}</h2>
            <h2>Registered Students:</h2>
            {students}
          </div>
        </div>
      )
    })






    return (

      <div>
        <br></br>
        <div className="container">
          <div className="jumbotron">
            <h1>parents</h1>
            <br></br>
            <img src={asset_paths.family} />
          </div>
          {parents}
        </div>
      </div>



    )
  }

}