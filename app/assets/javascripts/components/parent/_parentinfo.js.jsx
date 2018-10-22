class Parentinfo extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      page: 'profile',
      user_id: -1
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
      childComponent = <Profile parent_id={this.state.user_id}/>
    } else if (this.state.page === 'new_enrollment') {
      childComponent = <Newenrollment parent_id={this.state.user_id}/>
    } else if (this.state.page === 'current_enrollment') {
      childComponent = <Admission parent_id={this.state.user_id}/>
    } else if (this.state.page === 'reviews') {
      childComponent = <Review parent_id={this.state.user_id}/>
    } else if (this.state.page === 'assignments') {
      childComponent = <Assignment parent_id={this.state.user_id}/>
    } else if (this.state.page === 'reports') {
      childComponent = <Report parent_id={this.state.user_id}/>
    } 
    return(
      <div>
        <Navbar />
        <Parenttab  updateState = {this.updateState}/>
        {childComponent}
      </div>
    )}

}