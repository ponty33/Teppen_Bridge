class Admin extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      page: 'reports'
    };
    this.updateState = this.updateState.bind(this);
  }
  // componentDidMount() {
  //   fetch(`/session_info`)
  //   .then((response) => {
  //       return response.json();
  //   })
  //   .then((data) => {
  //     console.log("Data incoming...");
  //     console.log("Parent ID is: " ,data);
  //     this.setState({
  //       page: this.state.page,
  //       user_id: JSON.parse(data)
  //     });
  //   })
  // }
  updateState(state) {
    this.setState ({
      page: state,
      user_id: this.state.user_id
    });
  }
  
  
  
  render() {
    
    let childComponent = "";
    if (this.state.page === 'reports') {
      childComponent = <Areport />
    } else if (this.state.page === 'teachers') {
      childComponent = <Ateacher />
    } else if (this.state.page === 'subjects') {
      childComponent = <Asubject />
    } else if (this.state.page === 'programs') {
      childComponent = <Aprogram />
    } 
    return(
      <div>
        <Navbar />
        <Admintab  updateState = {this.updateState}/>
        {childComponent}
      </div>
    )}

}