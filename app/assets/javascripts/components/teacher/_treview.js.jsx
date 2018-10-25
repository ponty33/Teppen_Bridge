class Treview extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };

  }

  componentDidMount() {
    fetch(`/teachers/${this.props.teacher_id}/reviews/`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      console.log("Data incoming...");
      this.setState({ reviews: data })
      console.log("after setting state ");
    })
  }
  

  render() {
    var reviews = this.state.reviews.map((review) => {
      return(

       <div className="teacherReview_box" key={review.id}>
        <h2>Parent Name: {review.name}</h2>
        <h2>Score: {review.content}</h2>
        <h2>Rating: {review.rating}</h2>
       </div>

      )
     })
    
    return(
      <div className="container">
        <br></br>
        <div className="jumbotron">
          <h1>Your feedback from our parents!</h1>
          <br></br>
          <img className="teacher_image"src={asset_paths.yang} />
        </div>

        {reviews}
        
      </div>
    )}
}