
class Areport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherNames: [],
      teacherEarnings: [],
      totalEarnings: [],
      maxEarnings: 100000

    }
  }
  createBox() {
    let { width, height } = this.props;
    let box = (
      <path d={`M 0 0 H ${width} V ${height} H 0 V0`}
        fill='transparent' stroke='blue' stroke-width="2.2px" />
    );
    console.log("box ", this.state);
    return box;
  }

  componentDidMount() {
    fetch(`/admin/reports`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Data incoming...", data);
        this.setState({
          teacherNames: data.teacherNames,
          teacherEarnings: data.teacherEarnings,
          totalEarnings: data.totalEarnings,
          maxEarnings: Math.max(Math.max(...data.teacherEarnings), Math.max(...data.totalEarnings))

        });
      });
  }
  createTotalEarnings() {
    let { width, height } = this.props;
    // Check data to draw
    console.log("Inside bars ", this.state.totalEarnings)
    let noData = (this.state.totalEarnings.length === 0);
    let graph = [];
    const xAxisHeight = 50;

    if (noData) {
      graph = (<text x={width / 8} y={height / 2}>No data...</text>);
      return graph;
    } else {
      // Draw Bars
      let barWidth = width / this.state.teacherNames.length / 3;
      let widthApart = barWidth * 3;
      let bars = this.state.totalEarnings.map((elem, index) => {
        let barx = index * widthApart;
        let relativeHeight = elem * height / this.state.maxEarnings;
        return (<rect key={`bar_${index}`}
          x={barx}
          y={height - relativeHeight}
          width={barWidth} height={relativeHeight}
          style={{ fill: 'green', stroke: 'gray' }} />
        );
      });
      console.log("bars", bars);
      return bars;
    }
  }

  createTeacherEarnings() {
    let { width, height } = this.props;
    // Check data to draw
    console.log("Inside bars ", this.state.totalEarnings)
    let noData = (this.state.totalEarnings.length === 0);
    let graph = [];
    const xAxisHeight = 50;

    if (noData) {
      graph = (<text x={width / 8} y={height / 2}>No data...</text>);
      return graph;
    } else {
      // Draw Bars
      let barWidth = width / this.state.teacherNames.length / 3;
      let widthApart = barWidth * 3;

      let bars = this.state.teacherEarnings.map((elem, index) => {
        let relativeHeight = elem * height / this.state.maxEarnings;
        let barx = index * widthApart;
        return (<rect key={`bar_${index}`}
          x={barx + barWidth}
          y={height - relativeHeight}
          width={barWidth} height={relativeHeight}
          style={{ fill: 'purple', stroke: 'gray' }} />
        );
      });
      console.log("bars", bars);
      return bars;
    }
  }


  createLabels() {
    let { width, height, dataLabels, dataSeries } = this.props;
    let barWidth = width / this.state.teacherNames.length / 3;
    const xAxisHeight = 50;
    let widthApart = barWidth * 3
    let labels = this.state.teacherNames.map((elem, index) => {
      let barx = index * barWidth * 3 + (barWidth / 2);
      return (<text key={`lbl_${index}`}
        x={barx}
        y={height + (xAxisHeight / 2)}
        style={{ fontSize: '.9em' }}>
        {elem}
      </text>);
    });
    console.log("lables", labels);
    return labels;
  }


  createtotalEarningsValues() {
    let { width, height, dataSeries } = this.props;
    let values = this.state.teacherEarnings.map((elem, index) => {
      let barWidth = width / this.state.teacherEarnings.length / 3;
      let barx = index * barWidth;
      return (<text key={`row_${index}`}
        x={barx + (barWidth / 3)}
        y={height - elem}
        style={{ fontSize: '.9em' }}>
        {elem}
      </text>);
    });
    console.log("values", values);
    return values;

  }

  getTotalEarnings() {
    let sum = 0;
    for (let i = 0; i < this.state.totalEarnings.length; i++) {
      sum = sum + this.state.totalEarnings[i];
    }
    return sum;
  }
  createGraph() {
    var totalEarningBars = this.createTotalEarnings();
    var teacherEarningsBars = this.createTeacherEarnings();
    var labels = this.createLabels();
    var values = this.createtotalEarningsValues();
    return ([...totalEarningBars, ...teacherEarningsBars, ...labels]);
  }
  // Compose bars,labels and values
  // graph = [...bars, ...labels, ...values];

  render() {
    const { width, height } = this.props;
    let xAxisHeight = 50;
    return (

      <div className='container'>
        <br></br>
        <div className="jumbotron">
          <h1>Report</h1>
          <br></br>
          <img src={asset_paths.chart} />
        </div>
        <div className="graphchart">

          <div id="admin_chart_title">{`Total Gross earnings  $ ${this.getTotalEarnings()}`}</div>
          < svg width={width} height={height + xAxisHeight}>
            {this.createBox()}
            {this.createGraph()}
          </svg>

          <div id="admin_report_color_container">
            <div id="totalEarningsBar"></div>
            <div id="totalEarningsText">Total Earnings from the teacher</div>
            <div id="teacherEarningsBar"></div>
            <div id="teacherEarningsText">Total Earnings of the teacher</div>
          </div>
        </div>
      </div>
    );
  }
}







Areport.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  dataSeries: PropTypes.array.isRequired,
  dataLabels: PropTypes.array
};
Areport.defaultProps = {
  width: 900,
  height: 300,
  dataSeries: [20, 30, 40, 190],
  dataLabels: ["Kanwal", "Cool", "Captain", "Nicholas"]
};