import React, { Component } from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";

class CO2List extends Component {
  render() {
    let CO2EmissionData = this.props.CO2data;
    CO2EmissionData = CO2EmissionData.sort((a, b) =>
      a.Year < b.Year ? 1 : b.Year < a.Year ? -1 : 0
    );
    if (CO2EmissionData.length === 0) return <p>There is not data</p>;
    console.log("kayvan hello 2!");

    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link class="navbar-brand" to="/co2">
            CO2 Chart
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>

        <table className="ui single line table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Total</th>
              <th>Gas Fuel</th>
              <th>Liquid Fuel</th>
              <th>Solid Fuel</th>
              <th>Cement</th>
              <th>Gas Flaring</th>
              <th>Per Capita</th>
            </tr>
          </thead>
          <tbody>
            {CO2EmissionData.map(co2 => (
              <tr key={co2.Year}>
                <td>
                  <Link to={"/co2/" + co2.Year}>{co2.Year}</Link>
                </td>
                <td>{co2["Total"]}</td>
                <td>{co2["Gas Fuel"]}</td>
                <td>{co2["Liquid Fuel"]}</td>
                <td>{co2["Cement"]}</td>
                <td>{co2["Gas Flaring"]}</td>
                <td>{co2["Gas Fuel"]}</td>
                <td>{co2["Per Capita"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default CO2List;
