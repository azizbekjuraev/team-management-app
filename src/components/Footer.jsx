export default function Footer() {
  let today = new Date();
  return (
    <footer>
      <div className="row justify-content-center mt-3 mb-4">
        <div className="row justify-content-center mt-3">
          All rights reserved - {today.getFullYear()}
        </div>
      </div>
    </footer>
  );
}
