const Parenttab = (props) => {
  function onclickhandler(e) {
    props.updateState(e.target.value)
  }
  
  return(
    <div className="tab">
      {/* <button value='profile' className="tablinks" onClick={onclickhandler}>Profile</button> */}
      <button value='new_enrollment' className="tablinks" onClick={onclickhandler}>New Enrollment</button>
      <button value='current_enrollment' className="tablinks" onClick={onclickhandler}>Current Enrollment</button>
      <button value='reviews' className="tablinks" onClick={onclickhandler}>Reviews</button>
      <button value='assignments' className="tablinks" onClick={onclickhandler}>Assignment</button>
      <button value='reports' className="tablinks" onClick={onclickhandler}>Report</button>
    </div>
  )
}