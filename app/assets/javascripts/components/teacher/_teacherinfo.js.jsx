class Teacherinfo extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      page: 'profile',
      user_id: 0
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
      console.log("Parent ID is: " ,data);
      this.setState({
        page: this.state.page,
        user_id: JSON.parse(data)
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
      childComponent = <Tprofile teacher_id={this.state.user_id}/>
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
    )}

}