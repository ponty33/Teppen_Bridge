// import React, {Component} from "react"
// import "./LineChart.css"
class LineChart extends React.Component {
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
        return data.reduce((min, p) => p.y < min ? p.y : min, data[0].y);
    }
    getMaxY() {
        const { data } = this.props;
        return data.reduce((max, p) => p.y > max ? p.y : max, data[0].y);
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
        const { svgHeight, svgWidth, xLabelSize, yLabelSize } = this.props;
        const padding = 5;
        return (
            <g className="linechart_label">
                {/* Y AXIS LABELS */}
                <text transform={`translate(${yLabelSize / 2}, 20)`} textAnchor="middle">
                    {this.getY().max.toLocaleString('us-EN', { style: 'currency', currency: 'USD' })}
                </text>
                <text transform={`translate(${yLabelSize / 2}, ${svgHeight - xLabelSize - padding})`} textAnchor="middle">
                    {this.getY().min.toLocaleString('us-EN', { style: 'currency', currency: 'USD' })}
                </text>
                {/* X AXIS LABELS */}
                <text transform={`translate(${yLabelSize}, ${svgHeight})`} textAnchor="start">
                    {this.props.data[0].d}
                </text>
                <text transform={`translate(${svgWidth}, ${svgHeight})`} textAnchor="end">
                    {this.props.data[this.props.data.length - 1].d}
                </text>
            </g>
        )
    }



    render() {
        const { svgHeight, svgWidth } = this.props;
        return (
            <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
                {this.makePath()}
                {this.makeAxis()}
                {this.makeLabels()}
            </svg>
        );
    }
}
LineChart.defaultProps = {
    data: [],
    color: '#2196F3',
    svgHeight: 200,
    svgWidth: 200
}
// export default LineChart;