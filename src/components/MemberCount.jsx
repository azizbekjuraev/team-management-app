export default function MemberCount(props) {
  return (
    <div>
      <h1 className="row justify-content-center mt-3">
        Team Member Allocation
      </h1>
      <h3 className="row justify-content-center">
        {props.selectedTeam}, has{" "}
        {props.teamMemberCount === 0
          ? "no member"
          : props.teamMemberCount + " member(s)"}
        {/* {props.selectedTeam}, has {props.teamMemberCount} member(s); */}
      </h3>
    </div>
  );
}
