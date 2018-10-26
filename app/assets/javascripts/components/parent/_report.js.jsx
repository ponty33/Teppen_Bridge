class Report extends React.Component {



  createChartData(assignments, student) {
    // This function creates data that doesn't look entirely random
    let data = []
    for (let x = 0; x < assignments.length; x++) {
      console.log("score is ", assignments[x].score);
      let y = Number(assignments[x].score)
      const temp = data.length > 0 ? data[data.length - 1].y : 50;
      data.push({ x, y, student_name: student, score: x, name: assignments[x].name, startDate: assignments[x].start_date, endDate: assignments[x].end_date, feedback: assignments[x].feedback })
    }
    console.log("data is ", data);
    return data;
  }

  handleChartHover(i, hoverLoc, activePoint) {
    this.state.hoverLoc[i] = hoverLoc;
    this.stat
    this.setState({
      hoverLoc: hoverLoc,
      activePoint: activePoint
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      reports: [],
      numReports: ["Report_1"],
      hoverLoc: [],
      activePoint: []
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
          reports: data,
          numReports: [1]
        })
        console.log("after setting state ", this.state.reportInfo);
      })
  }



  render() {
    var reports = this.state.reports.assignments.map((report, i) => {
      return (
        <div className="graph-container">

          <div className="y_label_container">
            <div>100%</div>
            <div className="zero_label">0</div>
          </div>


          <div className='row'>
            <div className='popup'>
              {this.state.hoverLoc ? <ToolTip hoverLoc={this.state.hoverLoc[i]} activePoint={this.state.activePoint[i]} /> : null}
            </div>
          </div>


          <div className='row'>
            <div id="linechart" className='chart'>
              <LineChart onChartHover={(a, b) => this.handleChartHover(i, a, b)} data={this.createChartData(report, this.state.reports[i].student)} />
            </div>
          </div>

          <div></div>
        </div>)

    });
    return (
      <div className='container'>
        <br></br>
        <div id="report">
          <span><h1>report</h1></span><span><img src={asset_paths.chart} /></span>
        </div>
        {reports}
      </div>
    )
  }

}









