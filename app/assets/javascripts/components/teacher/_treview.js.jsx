class Treview extends React.Component {

  constructor(props) {
    super(props);
    image = ""
    this.state = {
      reviews: [],
      teacher: asset_paths[image]
    };

  }

  componentDidMount() {
    fetch(`/teachers/${this.props.teacher_id}/reviews/`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Data review incoming...", data);
        this.setState({
          reviews: data[0],
          teacher: asset_paths[data[1].toLowerCase()]
        })
        console.log("after setting state ");
      })
    console.log(this.state.teacher);
  }


  render() {
    var reviews = this.state.reviews.map((review) => {
      return (

        <div className="teacherReview_box" key={review.id}>

          <div id="text_container">
            <h3 id="text_teacher_reviews">Parent Name:</h3>
            <h3>{review.name}</h3>
          </div>

          <div id="text_container">
            <h3 id="text_teacher_reviews">Score:</h3>
            <h3>{review.content}</h3>
          </div>


          <div id="text_container">
            <h3 id="text_teacher_reviews">Rating:</h3>
            <h3>{review.rating}</h3>
          </div>


        </div>

      )
    })

    return (
      <div className="container">
        <br></br>
        <div className="jumbotron">
          <h1>Your feedback from our parents!</h1>
          <br></br>
          <img className="teacher_image" src={this.state.teacher} />
        </div>

        {reviews}

      </div>
    )
  }
}