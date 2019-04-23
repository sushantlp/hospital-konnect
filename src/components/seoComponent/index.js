import React from "react";
import "./seo.css";

export default class Seo extends React.Component {
  render() {
    return (
      <div class="container">
        <p className="menu-label"> Most Searched Localities In Bangalore </p>
        <ul className="menu-list">
          <li>
            <a href="/">Hospital in Yelahanka</a>
          </li>
          <li>
            <a href="/">Hospital in Banashankari</a>
          </li>
          <li>
            <a href="/">Hospital in BTM Layout Stage 1</a>
          </li>
          <li>
            <a href="/">Hospital in BTM Layout Stage 2</a>
          </li>
          <li>
            <a href="/">Hospital in Electronic City</a>
          </li>
          <li>
            <a href="/">Hospital in JP Nagar</a>
          </li>
          <li>
            <a href="/">Hospital in HSR Layout</a>
          </li>
          <li>
            <a href="/">Hospital in Marathahalli</a>
          </li>
          <li>
            <a href="/">Hospital in RT Nagar</a>
          </li>
          <li>
            <a href="/">Hospital in Jaya Nagar</a>
          </li>
        </ul>

        <hr className="spacer is-4" />

        <p className="menu-label"> Popular Doctors In Bangalore </p>
        <ul className="menu-list">
          <li>
            <a href="/">Pain Management Specialist in Bangalore</a>
          </li>
          <li>
            <a href="/">Homoeopath in Bangalore</a>
          </li>
          <li>
            <a href="/">Neuropsychiatrist in Bangalore</a>
          </li>
          <li>
            <a href="/">Joint Replacement Surgeon in Bangalore</a>
          </li>
          <li>
            <a href="/">Dentist in Bangalore</a>
          </li>
          <li>
            <a href="/">Oral Medicine and Radiology in Bangalore</a>
          </li>
          <li>
            <a href="/">Sports Medicine Physician in Bangalore</a>
          </li>
          <li>
            <a href="/">ENT/ Otorhinolaryngologist in Bangalore</a>
          </li>
          <li>
            <a href="/">Neonatologist in Bangalore</a>
          </li>
          <li>
            <a href="/">Clinical Embryologist in Bangalore</a>
          </li>
        </ul>
      </div>
    );
  }
}
