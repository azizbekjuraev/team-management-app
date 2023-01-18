import { useState } from "react";
import femaleProfile from "/src/img/femaleProfile.jpg";
import maleProfile from "/src/img/maleProfile.jpg";

const Employees = () => {
  const [selectedTeam, setSelectedTeam] = useState("TeamB");

  function handleTeamSelectionChange(event) {
    console.log(event.target.value);
    setSelectedTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((e) =>
      e.id === parseInt(event.currentTarget.id)
        ? e.teamName === selectedTeam
          ? { ...e, teamName: "" }
          : { ...e, teamName: selectedTeam }
        : e
    );
    setEmployees(transformedEmployees);
  }

  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC",
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD",
    },
  ]);
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <h1 className="row justify-content-center">Select team:</h1>
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card--collection">
            {employees.map((e) => (
              <div
                id={e.id}
                className={
                  e.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
                }
                style={{ cursor: "pointer" }}
                onClick={handleEmployeeCardClick}
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
