const Parenttab = (props) => {
  function onclickhandler(e) {
    props.updateState(e.target.value)
  }

  return (
    <div>
      {/* <button value='profile' className="tablinks" onClick={onclickhandler}>Profile</button> */}
      <button value='new_enrollment' type="button" id="tab" className="btn btn-outline-info" onClick={onclickhandler}>New Enrollment</button>
      <button value='current_enrollment' type="button" id="tab" className="btn btn-outline-info" onClick={onclickhandler}>Current Enrollments</button>
      <button value='reviews' type="button" id="tab" className="btn btn-outline-info" onClick={onclickhandler}>Reviews</button>
      <button value='assignments' type="button" id="tab" className="btn btn-outline-info" onClick={onclickhandler}>Assignments</button>
      <button value='reports' type="button" id="tab" className="btn btn-outline-info" onClick={onclickhandler}>Report</button>
    </div>
  )
}