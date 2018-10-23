const Admintab = (props) => {
  function onclickhandler(e) {
    props.updateState(e.target.value)
  }
  
  return(
    <div className="tab">
      {/* <button value='profile' className="tablinks" onClick={onclickhandler}>Profile</button> */}
      <button value='reports' className="tablinks" onClick={onclickhandler}>Report</button>
      <button value='teachers' className="tablinks" onClick={onclickhandler}>Teachers</button>
      <button value='subjects' className="tablinks" onClick={onclickhandler}>Subjects</button>
      <button value='programs' className="tablinks" onClick={onclickhandler}>Programs</button>
    </div>
  )
}