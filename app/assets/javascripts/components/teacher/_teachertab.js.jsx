const Teachertab = (props) => {

  function onclickhandler(e) {
    props.updateState(e.target.value)
  }

  return (
    <div id="admin_tabs">
      <button value='profile' type="button" id="tab_admin" className="btn btn-outline-secondary" onClick={onclickhandler}>Profile</button>
      <button value='assignments' type="button" id="tab_admin" className="btn btn-outline-secondary" onClick={onclickhandler}>Assignments</button>
      <button value='programs' type="button" id="tab_admin" className="btn btn-outline-secondary" onClick={onclickhandler}>Programs</button>
      <button value='reviews' type="button" id="tab_admin" className="btn btn-outline-secondary" onClick={onclickhandler}>Reviews</button>
      <button type="button" id="tab_admin" className="btn btn-outline-secondary" disabled>teacher</button>
    </div>
  )
}