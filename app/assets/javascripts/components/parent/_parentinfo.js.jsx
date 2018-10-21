class Parentinfo extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      page: 'profile',
      user_id: -1
    };
    this.updateState = this.updateState.bind(this);
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
      childComponent = <Profile />
    } else if (this.state.page === 'new_enrollment') {
      childComponent = <Newenrollment />
    } else if (this.state.page === 'current_enrollment') {
      childComponent = <Admission />
    } else if (this.state.page === 'reviews') {
      childComponent = <Review />
    } else if (this.state.page === 'assignments') {
      childComponent = <Assignment />
    } else if (this.state.page === 'reports') {
      childComponent = <Report />
    } 
    return(
      <div>
        <Navbar />
        <Parenttab updateState = {this.updateState}/>
        {childComponent}
      </div>
    )}

}