// import React, { Component } from 'react';
// import './App.css';
class Home extends React.Component {
  createFakeData() {
    // This function creates data that doesn't look entirely random
    const data = []
    for (let x = 0; x <= 5; x++) {
      const random = Math.random();
      const temp = data.length > 0 ? data[data.length - 1].y : 50;
      const y = random >= .45 ? temp + Math.floor(random * 20) : temp - Math.floor(random * 20);
      data.push({ x, y })
    }
    return data;
  }
  render() {
    return (
      // <div className="container">
      //   {/* <div>react svg line chart [part 1]</div> */}
      //   <br />
      //   <div className="container1">
      //     <div className="vertical_label">
      //       <h1>Vertical!</h1>
      //     </div>
      //     <div className="graph_container">
      //       <div className="graph"><LineChart data={this.createFakeData()} /></div>
      //     </div>
      //   </div>
      //   <div className="bottom_label">bottom</div>
      // </div>



      <div className="flex-container">
        <div className="left_graph">left</div>
        <div className="graph_container">center <LineChart data={this.createFakeData()} /></div>
        <div>right</div>
      </div>



    );
  }
}
// export default App;

// const Home = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="card">
//         <ul className="list-group list-group-flush">
//           <li className="list-group-item">Cras justo odio</li>
//           <li className="list-group-item">Dapibus ac facilisis in</li>
//           <li className="list-group-item">Vestibulum at eros</li>
//         </ul>
//       </div>
//       <Footer />
//     </div>
//   )
// }