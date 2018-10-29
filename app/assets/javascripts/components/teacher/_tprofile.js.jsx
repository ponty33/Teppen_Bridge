class Tprofile extends React.Component {

  constructor(props) {
    super(props);
    image = ""
    this.state = {
      teacher: asset_paths[image]
    };

  }

  render() {

    return (
      <div className="container">
        <br></br>
        <div className="jumbotron" id="teacher_profile">
          <h1>Welcome back!</h1>
          <br></br>
          <img className="teacher_image" src={this.props.teacher} />
        </div>


      </div>
    )
  }
}