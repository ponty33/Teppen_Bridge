class Review extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      teacher: [],
      subject: [],
      rating: [1, 2, 3, 4, 5]
    };
    this.num = this.num.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit() {
    alert('Thank you for your feedback.');
  }

  num(e){
    this.setState({selected: e.target.value});
   }

  componentDidMount() {
    fetch(`/parents/${this.props.parent_id}/reviews/new`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      console.log("Data incoming...");
      this.setState({ teacher: data[0], subject: data[1] })
      console.log("after setting state ");
    })
  }
  

  render() {
    return(
      <div>
        <h1>Let us know what you think!</h1>
        {/* NEED solution================================== */}
        <form action={`/parents/${this.props.parent_id}/reviews`} method='post'>
          <div>
            <span>Teacher: </span>
            <select name="teacher_id" onChange={this.num}>
              {this.state.teacher.map(function(n) { 
                return (<option value={n.id} key={n.id} >{n.name}</option>);
              })}
            </select>
          </div>
          <div>
            <span>Subject: </span>
            <select name="subject_id" onChange={this.num}>
              {this.state.subject.map(function(sub) { 
                return (<option value={sub.id} key={sub.id}>{sub.name}</option>);
              })}
            </select>
          </div>
          <div>
            <span>Rating: </span>
            <select name="rating" onChange={this.num}>
              {this.state.rating.map(function(n) { 
                return (<option value={n} key={n}>{n}</option>);
              })}
            </select>
          </div>
          <div>
            <textarea name="content" placeholder='What do you want to let us know?' />
          </div>
          <button type='submit' onClick={this.submit}>SUBMIT</button>
        </form>
      </div>
    )}

}