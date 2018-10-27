class Tprogram extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      programs: []
    };

  }

  componentDidMount() {
    fetch(`/teachers/${this.props.teacher_id}/programs/`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Data incoming...");
        this.setState({ programs: data })
        console.log("after setting state ");
      })
  }


  render() {
    var programs = this.state.programs.map((program) => {
      return (
        <div className="teacherReview_box" key={program.id}>
          <div id="text_container">
            <div>
              <h3 id="text_teacher_reviews">Subject:</h3>
              <h3>{program.name}</h3>
            </div>

            <div>
              <h3 id="text_teacher_reviews">Start Date:</h3>
              <h3>{program.start_date}</h3>
            </div>


            <div>
              <h3 id="text_teacher_reviews">End Date:</h3>
              <h3>{program.end_date}</h3>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="container">
        <br></br>
        <div className="jumbotron">
          <h1>your current programs!</h1>
          <br></br>
          <img src={asset_paths.review} />
        </div>

        {programs}

      </div>
    )
  }
}
