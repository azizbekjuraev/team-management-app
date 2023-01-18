import femaleProfile from "/src/img/femaleProfile.jpg";
import maleProfile from "/src/img/maleProfile.jpg";

const Employees = (props) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <h1 className="row justify-content-center">Select team:</h1>
          <select
            className="form-select form-select-lg"
            value={props.selectedTeam}
            onChange={props.handleTeamSelectionChange}
          >
            <option value="Team A">Team A</option>
            <option value="Team B">Team B</option>
            <option value="Team C">Team C</option>
            <option value="Team D">Team D</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card--collection">
            {props.employees.map((e) => (
              <div
                id={e.id}
                className={
                  e.teamName === props.selectedTeam
                    ? "card m-2 standout"
                    : "card m-2"
                }
                style={{ cursor: "pointer" }}
                onClick={props.handleEmployeeCardClick}
              >
                {e.gender === "female" ? (
                  <img src={femaleProfile} className="card--img--top" alt="" />
                ) : (
                  <img src={maleProfile} className="card--img--top" alt="" />
                )}
                <div className="card--body p-2">
                  <h5 className="card--title">Fullname: {e.fullName}</h5>
                  <p className="card--text">
                    <b>Designation: </b> {e.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
