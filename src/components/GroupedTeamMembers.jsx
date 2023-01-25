import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setSelectedTeam }) => {
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    let teams = [];
    let teamAMembers = employees.filter(
      (employee) => employee.teamName === "Team A"
    );
    let teamA = {
      team: "Team A",
      members: teamAMembers,
      collapsed: selectedTeam === `Team A` ? false : true,
    };
    teams.push(teamA);

    let teamBMembers = employees.filter(
      (employee) => employee.teamName === "Team B"
    );
    let teamB = {
      team: "Team B",
      members: teamBMembers,
      collapsed: selectedTeam === `Team B` ? false : true,
    };
    teams.push(teamB);

    let teamCMembers = employees.filter(
      (employee) => employee.teamName === "Team C"
    );
    let teamC = {
      team: "Team C",
      members: teamCMembers,
      collapsed: selectedTeam === `Team C` ? false : true,
    };
    teams.push(teamC);

    let teamDMembers = employees.filter(
      (employee) => employee.teamName === "Team D"
    );
    let teamD = {
      team: "Team D",
      members: teamDMembers,
      collapsed: selectedTeam === `Team D` ? false : true,
    };
    teams.push(teamD);
    return teams;
  }

  function handleTeamClick(event) {
    let transformedGroupData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );
    setGroupedData(transformedGroupData);
    setSelectedTeam(event.currentTarget.id);
  }

  return (
    <main className="container text-center mt-5">
      {groupedEmployees.map((item) => {
        return (
          <div
            key={item.team}
            className="card mt-2"
            style={{ cursor: "pointer" }}
          >
            <h4
              id={item.team}
              className="card-header text-secondary bg-white"
              onClick={handleTeamClick}
            >
              Team name: {item.team}
            </h4>
            <div
              id={"collapse_" + item.team}
              className={item.collapsed === true ? "collapse" : ""}
            >
              <hr />
              {item.members.map((member) => {
                return (
                  <div className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">
                        Full Name: {member.fullName}
                      </span>
                    </h5>
                    <p>Designation: {member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default GroupedTeamMembers;
