import React from "react";
import API from "./utils/API";
import Table from "./components/Table"
class App extends React.Component {

  state = {
    employees: []

  }
  componentDidMount() {
    API.getEmp()
      .then(res => {
        this.setState({ employees: res.data.results })
      })
  }
  render() {
    return (
      <div className="App">
        {this.state.employees.map(employee => (
          <Table
            picture={employee.picture.medium}
            first={employee.name.first}
            last={employee.name.last}
            age={employee.dob.age}
            email={employee.email}
            phone={employee.phone}
          />
        ))}
      </div>
    );
  }
}

export default App;
