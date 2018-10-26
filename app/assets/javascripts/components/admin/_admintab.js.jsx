const Admintab = (props) => {
  function onclickhandler(e) {
    props.updateState(e.target.value)
  }

  return (
    <div id="admin_tabs">
      {/* <button value='profile' className="tablinks" onClick={onclickhandler}>Profile</button> */}
      <button value='reports' type="button" id="tab_admin" className="btn btn-outline-primary" onClick={onclickhandler}>Report</button>
      <button value='teachers' type="button" id="tab_admin" className="btn btn-outline-primary" onClick={onclickhandler}>Teachers</button>
      <button value='subjects' type="button" id="tab_admin" className="btn btn-outline-primary" onClick={onclickhandler}>Subjects</button>
      <button value='programs' type="button" id="tab_admin" className="btn btn-outline-primary" onClick={onclickhandler}>Programs</button>
      <button value='parents' type="button" id="tab_admin" className="btn btn-outline-primary" onClick={onclickhandler}>Parents</button>
    </div>
  )
}