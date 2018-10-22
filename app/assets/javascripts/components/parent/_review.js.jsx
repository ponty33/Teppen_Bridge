class Review extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      num: [1,2,3]
    };
    this.num = this.num.bind(this);
  }

  
  num(e){
    this.setState({selected: e.target.value});
   }

  render() {
    return(
      <div>
        <h1>Let us know what you think!</h1>
        <form method='post'>
          <div>
            <span>Teacher: </span>
            <select name="select" onChange={this.num}>
              {this.state.num.map(function(n) { 
                return (<option value={n}>{n}</option>);
              })}
            </select>
          </div>
          <div>
            <span>Subject: </span>
            <select name="select" onChange={this.num}>
              {this.state.num.map(function(n) { 
                return (<option value={n}>{n}</option>);
              })}
            </select>
          </div>
          <div>
            <textarea placeholder='What do you want to let us know?' />
          </div>
          <button type='submit'>SUBMIT</button>
        </form>
      </div>
    )}

}