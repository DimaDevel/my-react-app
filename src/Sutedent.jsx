import PropTypes from "prop-types";

export default function Student({
  name = "Guest",
  age = 0,
  isStudent = false,
}) {
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

// Student.defaultProps = {
//     name: 'Guest',
//     age: 0,
//     isStudent: false
// };
