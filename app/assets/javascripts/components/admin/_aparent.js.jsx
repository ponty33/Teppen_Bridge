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
        return (
          <div key={stud.id}>
            <h2 id="admin_parents_students">{stud.name}</h2>
          </div>
        )
      })

      return (
        <div className="teacherReview_box" key={parent.parent.id}>

          <div id="text_container">
            <h3 id="text_teacher_reviews">Name:</h3>
            <h3>{parent.parent.name}</h3>
          </div>

          <div id="text_container">
            <h3 id="text_teacher_reviews">E-mail:</h3>
            <h3>{parent.parent.email}</h3>
          </div>

          <div id="text_container">
            <h3 id="text_teacher_reviews">Registered Students:</h3>
            <div>{students}</div>
          </div>

        </div>
      )
    })







    return (

      <div>
        <br></br>
        <div className="container">
          <div className="jumbotron">
            <h1>Parents</h1>
            <br></br>
            <img src={asset_paths.family} />
          </div>
          {parents}
        </div>
      </div>



    )
  }

}