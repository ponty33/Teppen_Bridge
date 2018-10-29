class Tprofile extends React.Component {

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
          teacher: asset_paths[data[1].toLowerCase()]
        })
        console.log("after setting state ");
      })
    console.log(this.state.teacher);
  }


  render() {

    return (
      <div className="container">
        <br></br>
        <div className="jumbotron" id="teacher_profile">
          <h1>Welcome back!</h1>
          <br></br>
          <img className="teacher_image" src={this.state.teacher} />
        </div>


      </div>
    )
  }
}