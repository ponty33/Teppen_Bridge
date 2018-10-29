class Review extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      teacher: [],
      subject: [],
      rating: [1, 2, 3, 4, 5],
      selectedTeacher: "Select Teacher",
      selectedSubject: "Select Subject",
      selectedRating: "1",
      teacher_id: "1",
      subject_id: "1",
    };

    this.selectTeacher = this.selectTeacher.bind(this);
    this.selectSubject = this.selectSubject.bind(this);
    this.selectedRating = this.selectedRating.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit() {
    alert('Thank you for your feedback.');
  }

  selectTeacher(e) {
    console.log(e.target.getAttribute("data-name"));
    this.setState({
      teacher: this.state.teacher,
      subject: this.state.subject,
      rating: this.state.rating,
      selectedTeacher: e.target.getAttribute("data-name"),
      selectedSubject: this.state.selectedSubject,
      selectedRating: this.state.selectedRating,
      teacher_id: e.target.getAttribute("data-id"),
      subject_id: this.state.subject_id,
    });
  }

  selectSubject(e) {
    console.log(e.target.getAttribute("data-name"));
    this.setState({
      teacher: this.state.teacher,
      subject: this.state.subject,
      rating: this.state.rating,
      selectedTeacher: this.state.selectedTeacher,
      selectedSubject: e.target.getAttribute("data-name"),
      selectedRating: this.state.selectedRating,
      teacher_id: this.state.teacher_id,
      subject_id: e.target.getAttribute("data-id"),
    });
  }

  selectedRating(e) {
    console.log(e.target.getAttribute("data-name"));
    this.setState({
      teacher: this.state.teacher,
      subject: this.state.subject,
      rating: this.state.rating,
      selectedTeacher: this.state.selectedTeacher,
      selectedSubject: this.state.selectedSubject,
      selectedRating: e.target.getAttribute("data-name"),
    });
  }

  componentDidMount() {
    fetch(`/parents/${this.props.parent_id}/reviews/new`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Data incoming...");
        this.setState({
          teacher: data[0],
          subject: data[1],
          rating: this.state.rating,
          selectedTeacher: this.state.selectedTeacher,
          selectedSubject: this.state.selectedSubject,
          selectedRating: this.state.selectedRating,
          teacher_id: this.state.teacher_id,
          subject_id: this.state.subject_id,
        })
        console.log("after setting state ");
        console.log(this.props.parent_id);
      })
  }


  render() {

    return (

      <div className="container">
        <br></br>
        <div className="jumbotron">
          <h1>Let us know what you think!</h1>
          <br></br>
          <img src={asset_paths.review} />
        </div>

        <form action={`/parents/${this.props.parent_id}/reviews`} method='post'>

          <input name="teacher_id" type="hidden" value={this.state.teacher_id} />
          <input name="rating" type="hidden" value={this.state.selectedRating} />
          <input name="parent_id" type="hidden" value={this.props.parent_id} />
          <input name="subject_id" type="hidden" value={this.state.subject_id} />

          <div className="dropdown">
            <div><h5 id="new_enroll_fonts">Please select the teacher:</h5></div>
            <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.state.selectedTeacher}
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

              {this.state.teacher.map(n => {
                console.log(n);
                return (<a className="dropdown-item" data-name={n.name} data-id={n.id} value={n.id} key={n.id} onClick={this.selectTeacher}>{n.name}</a>);
              })}

            </div>

          </div>

          <br />

          <div className="dropdown">
            <div><h5 id="new_enroll_fonts">Please select the subject:</h5></div>
            <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.state.selectedSubject}
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

              {this.state.subject.map(n => {
                console.log(n);
                return (<a className="dropdown-item" data-name={n.name} data-id={n.id} value={n.id} key={n.id} onClick={this.selectSubject}>{n.name}</a>);
              })}

            </div>

          </div>

          <br />

          <div className="dropdown">
            <div><h5 id="new_enroll_fonts">Rate the teacher:</h5></div>
            <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.state.selectedRating}
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

              {this.state.rating.map(n => {
                return (<a className="dropdown-item" data-name={n} data-id={n} value={n} key={n} onClick={this.selectedRating}>{n}</a>);
              })}

            </div>

          </div>

          <br />

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Review</label>
            <textarea name="content" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>

          <br />

          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
      </div>
    )
  }

}