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
      console.log(this.state.reviews)
      console.log("after setting state ");
    })
  }
  

  render() {
    var reviews = this.state.reviews.map((review) => {
      return(
       <div key={review.id}>
        <p>=====================================</p>
        <h2>Parent Name: {review.name}</h2>
        <h2>Score: {review.content}</h2>
        <h2>Rating: {review.rating}</h2>
        
       </div>
      )
     })
    
    return(
      <div>
        <h1>Reviews</h1>
        {reviews}
      </div>
    )}
}