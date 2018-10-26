const Parenttab = (props) => {
  function onclickhandler(e) {
    props.updateState(e.target.value)
  }

  return (
    <div id="admin_tabs">
      <button value='new_enrollment' type="button" id="tab_admin" className="btn btn-outline-secondary" onClick={onclickhandler}>New Enrollment</button>
      <button value='current_enrollment' type="button" id="tab_admin" className="btn btn-outline-secondary" onClick={onclickhandler}>Current Enrollments</button>
      <button value='reviews' type="button" id="tab_admin" className="btn btn-outline-secondary" onClick={onclickhandler}>Reviews</button>
      <button value='assignments' type="button" id="tab_admin" className="btn btn-outline-secondary" onClick={onclickhandler}>Assignments</button>
      <button value='reports' type="button" id="tab_admin" className="btn btn-outline-secondary" onClick={onclickhandler}>Report</button>
      <button type="button" id="tab_admin" className="btn btn-outline-secondary" disabled>parent</button>
    </div>
  )
}


