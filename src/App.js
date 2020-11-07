import React from "react";
import API from "./utils/API";
import Table from "./components/Table"
import Header from "./components/Header"
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
  
  handleSortByFirst = () => {
    if (this.state) {
        const sortFirst = this.state.employees.sort((a,b) => (a.name.first > b.name.first)?1 : -1);
        this.setState({ filtered: sortFirst });
    }
};
handleSortByLast = () => {
  if (this.state) {
      const sortLast = this.state.employees.sort((a,b) => (a.name.last > b.name.last)?1 : -1);
      this.setState({ filtered: sortLast });
  }
};

  render() {
    return (
      <div className="App">
      <Header />
      <br />
      <div className="btns">
      <button onClick={this.handleSortByFirst}> this will filter by first name</button>
      <button onClick={this.handleSortByLast}> this will filter by last name</button>
      </div>
      <br />

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
