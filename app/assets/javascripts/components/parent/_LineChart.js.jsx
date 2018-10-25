// import React, {Component} from "react"
// import "./LineChart.css"
// whatever
class LineChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hoverLoc: null,
            activePoint: null
        }
    }
    // GET MAX & MIN X
    getMinX() {
        const { data } = this.props;
        return data[0].x;
    }
    getMaxX() {
        const { data } = this.props;
        return data[data.length - 1].x;
    }
    // GET MAX & MIN Y
    getMinY() {
        const { data } = this.props;
        //return data.reduce((min, p) => p.y < min ? p.y : min, data[0].y);
        return 0;
    }
    getMaxY() {
        const { data } = this.props;
        // return data.reduce((max, p) => p.y > max ? p.y : max, data[0].y);
        return 100;
    }

    getSvgX(x) {
        const { svgWidth } = this.props;
        return (x / this.getMaxX() * svgWidth);
    }
    getSvgY(y) {
        const { svgHeight } = this.props;
        return svgHeight - (y / this.getMaxY() * svgHeight);
    }

    makePath() {
        const { data, color } = this.props;
        let pathD = "M " + this.getSvgX(data[0].x) + " " + this.getSvgY(data[0].y) + " ";
        pathD += data.map((point, i) => {
            return "L " + this.getSvgX(point.x) + " " + this.getSvgY(point.y) + " ";
        });
        return (
            <path className="linechart_path" d={pathD} style={{ stroke: color }} />
        );
    }
    makeAxis() {
        const minX = this.getMinX(), maxX = this.getMaxX();
        const minY = this.getMinY(), maxY = this.getMaxY();
        return (
            <g className="linechart_axis">
                <line
                    x1={this.getSvgX(minX)} y1={this.getSvgY(minY)}
                    x2={this.getSvgX(maxX)} y2={this.getSvgY(minY)} />
                <line
                    x1={this.getSvgX(minX)} y1={this.getSvgY(minY)}
                    x2={this.getSvgX(minX)} y2={this.getSvgY(maxY)} />
            </g>
        );
    }

    makeLabels() {
        const { svgHeight, svgWidth, xLabelSize, yLabelSize, data } = this.props;
        const minX = this.getMinX(), maxX = this.getMaxX();
        const minY = this.getMinY(), maxY = this.getMaxY();
        const padding = 5;
        return (
            <g className="linechart_label">
                {/* Y AXIS LABELS */}
                {/*
                    <text transform={`translate(${yLabelSize / 2}, 20)`} textAnchor="middle">
                        {this.getY().max.toLocaleString('us-EN', { style: 'currency', currency: 'USD' })}
                    </text>
                    <text transform={`translate(${yLabelSize / 2}, ${svgHeight - xLabelSize - padding})`} textAnchor="middle">
                        {this.getY().min.toLocaleString('us-EN', { style: 'currency', currency: 'USD' })}
                    </text>
                {/* X AXIS LABELS */}

                <text transform={`translate(${this.getSvgX(minX) + 3}, ${this.getSvgY(minY) + 7})`} textAnchor="start">
                    {this.props.data[0].endDate}
                </text>
                <text transform={`translate(${this.getSvgX(maxX)}, ${this.getSvgY(maxY)})`} textAnchor="end">
                    {this.props.data[this.props.data.length - 1].endDate}
                </text>

            </g>
        )
    }

    getCoords(e) {
        const { svgWidth, data, yLabelSize } = this.props;
        const svgLocation = document.getElementsByClassName("svg_graph")[0].getBoundingClientRect();
        const adjustment = (svgLocation.width - svgWidth) / 2; //takes padding into consideration
        const relativeLoc = e.clientX - svgLocation.left - adjustment;

        let svgData = [];
        data.map((point, i) => {
            svgData.push({
                svgX: this.getSvgX(point.x),
                svgY: this.getSvgY(point.y),
                name: point.name,
                startDate: point.startDate,
                endDate: point.endDate,
                feedback: point.feedback
            });
        });

        let closestPoint = {};
        for (let i = 0, c = 500; i < svgData.length; i++) {
            if (Math.abs(svgData[i].svgX - this.state.hoverLoc) <= c) {
                c = Math.abs(svgData[i].svgX - this.state.hoverLoc);
                closestPoint = svgData[i];
            }
        }

        if (relativeLoc - yLabelSize < 0) {
            this.stopHover();
        } else {
            this.setState({
                hoverLoc: relativeLoc,
                activePoint: closestPoint
            })
            this.props.onChartHover(relativeLoc, closestPoint);
        }
    }
    // STOP HOVER
    stopHover() {
        this.setState({ hoverLoc: null, activePoint: null });
        this.props.onChartHover(null, null);
    }
    // MAKE ACTIVE POINT
    makeActivePoint() {
        const { color, pointRadius } = this.props;
        return (
            <circle
                className='linechart_point'
                style={{ stroke: color }}
                r={pointRadius}
                cx={this.state.activePoint.svgX}
                cy={this.state.activePoint.svgY}
            />
        );
    }

    render() {
        const { svgHeight, svgWidth } = this.props;
        return (
            <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} onMouseLeave={() => this.stopHover()} className={'svg_graph'}
                onMouseMove={(e) => this.getCoords(e)}>
                {this.makePath()}
                {this.makeAxis()}
                {/*{this.makeLabels()}*/}
                {this.state.hoverLoc ? this.makeActivePoint() : null}
            </svg>
        );
    }
}
LineChart.defaultProps = {
    data: [],
    color: '#2196F3',
    svgHeight: 500,
    svgWidth: 1000,
    color: '#2196F3',
    pointRadius: 5,
}
// export default LineChart;