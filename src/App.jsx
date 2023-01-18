import { useState, useEffect } from "react";
import Header from "./components/Header";
import Employees from "./components/Employees";
import MemberCount from "./components/MemberCount";
import Footer from "./components/Footer";
function App() {
  const [selectedTeam, setSelectedTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "Team A"
  );

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeesList")) || [
      {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "Team A",
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "Team A",
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "Team A",
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "Team B",
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "Team B",
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "Team B",
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "Team C",
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "Team C",
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "Team C",
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "Team D",
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "Team D",
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "Team D",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  useEffect(() => {
    localStorage.setItem("employeesList", JSON.stringify(employees));
  }, [employees]);

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

  return (
    <>
      <Header />
      <MemberCount
        selectedTeam={selectedTeam}
        teamMemberCount={
          employees.filter((e) => e.teamName === selectedTeam).length
        }
      />
      <Employees
        employees={employees}
        selectedTeam={selectedTeam}
        handleEmployeeCardClick={handleEmployeeCardClick}
        handleTeamSelectionChange={handleTeamSelectionChange}
      />
      <Footer />
    </>
  );
}

export default App;
