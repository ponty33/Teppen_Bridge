class Home extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      teachers: []
    };
  }

  componentDidMount() {
    fetch(`/admin/teachers`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      console.log("Data incoming...");
      this.setState({ teachers: data })
      console.log("after setting state ");
    })
  }
  

  
  render() {
    var style = {
      display: 'flex',
      justifyContent: 'space-evenly',
      paddingTop: '2em'
    };

    var imgStyle = {
      borderRadius: '3em'
    }
    
    var teachers = this.state.teachers.map((teacher) => {
      return(
       <div key={teacher.id}>
        <img src={teacher.img_url} style={imgStyle} className="img-thumbnail" />
        
        <h2 style={style}>{teacher.name}</h2>
       </div>
      )
     })
    

    
    return(
      <div>
        <Navbar />
        <h1 style={style}>Our Teachers</h1>
        <div style={style}>
          {teachers}
        </div>
      </div>
    )
  }
}

