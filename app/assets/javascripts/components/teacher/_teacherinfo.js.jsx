class Teacherinfo extends React.Component{
  
  constructor(props) {
    super(props);
    image = ""
    this.state = {
      page: 'profile',
      user_id: 0,
      teacher: asset_paths[image]
    };
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    fetch(`/session_info`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      console.log("Data incoming...");
      console.log("Teacher ID is: " ,data);
      this.setState({
        page: this.state.page,
        user_id: JSON.parse(data[0]),
        teacher: asset_paths[data[1].toLowerCase()]
      });
    })
  }

  updateState(state) {
    this.setState ({
      page: state,
      user_id: this.state.user_id
    });
  }

  
  render() {
    
    let childComponent = "";
    if (this.state.page === 'profile') {
      childComponent = <Tprofile teacher_id={this.state.user_id} teacher={this.state.teacher}/>
    } else if (this.state.page === 'assignments') {
      childComponent = <Tassignment teacher_id={this.state.user_id}/>
    } else if (this.state.page === 'programs') {
      childComponent = <Tprogram teacher_id={this.state.user_id}/>
    } else if (this.state.page === 'reviews') {
      childComponent = <Treview teacher_id={this.state.user_id}/>
    } 

    return(
      <div>
        <Navbar />
        <Teachertab  updateState = {this.updateState}/>
        {childComponent}
      </div>
    )
  }
}