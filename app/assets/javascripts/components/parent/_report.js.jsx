class Report extends React.Component {



  createChartData(assignments) {
    // This function creates data that doesn't look entirely random
    let data = []
    for (let x = 0; x < assignments.length; x++) {
      console.log("score is ", assignments[x].score);
      let y = Number(assignments[x].score)
      const temp = data.length > 0 ? data[data.length - 1].y : 50;
      data.push({ x, y })
    }
    console.log("data is ", data);
    return data;
  }

  constructor(props) {
    super(props);
    this.state = {
      reportInfo: [{ x: 2, y: 3 }, { x: 5, y: 8 }],
      numReports: ["Report_1"]
    };
  }

  componentDidMount() {
    console.log("In Component did mount");
    fetch(`/parents/${this.props.parent_id}/assignments`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Data incoming...", data);
        this.setState({
          reportInfo: this.createChartData(data),
          numReports: [1]
        })
        console.log("after setting state ", this.state.reportInfo);
      })
  }



  render() {
    console.log("in render");
    var reports = this.state.numReports.map((report) => {
      return (
        <LineChart data={this.state.reportInfo} />
      )
    })
    return (
      <div className="container">
        <br></br>
        <div className="jumbotron" id="report">
          <h1>report</h1>
          <br></br>
          <img src={asset_paths.chart} />
        </div>

        <div className="graph-container">
          <div>100%</div>
          <div className="linechart">
            {reports}
          </div>
          <div>0</div>
        </div>
      </div>

    )
  }

}



