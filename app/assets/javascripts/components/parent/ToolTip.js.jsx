

class ToolTip extends React.Component {

  render() {
    const {hoverLoc, activePoint} = this.props;
    const svgLocation = document.getElementsByClassName("svg_graph")[0].getBoundingClientRect();

    let placementStyles = {};
    let width = 150;
    placementStyles.width = width + 'px';
    placementStyles.left = hoverLoc + svgLocation.left - (width/2);

    return (
      <div className='hover' style={ placementStyles }>
        <div className='date'>{ activePoint.d }</div>
        <div className='price'>{activePoint.p }</div>
      </div>
    )
  }
}

