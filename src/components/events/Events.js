import React, { Component } from "react";
import axios from "axios";
import "./Events.css";
import { Route, NavLink, HashRouter } from "react-router-dom";

class Events extends Component {
  state = {
    page: 0,
    totalPages: 0,
    data: [],
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8888/getEvents?page=${this.state.page}`)
      .then((res) =>
        this.setState({
          data: this.getUnique(res.data._embedded.events, "name"),
          totalPages: res.data.page.totalPages,
        })
      );
  }

  renderEvents = (e, idx) => {
    return (
      <div className="event" key={idx}>
        <div className="container-event-img">
          <a href={e.url}>
            <img className="event-img" src={e.images[0].url} alt="" />
          </a>
        </div>
        <div className="event-info">
          <p className="date-format">
            {`${this.convertDate(e.dates.start.localDate)} ${this.convertTime(
              e.dates.start.localTime
            )}`}
          </p>
          <h3>{e.name}</h3>
          <p>{e._embedded.venues[0].name}</p>
        </div>
      </div>
    );
  };

  convertTime = (time) => {
    let h = time.slice(0, 2);
    let m = time.slice(3, 5);
    let newTime = h > 12 ? h - 12 + ":" + m + " PM" : h + ":" + m + " AM";
    return newTime;
  };

  convertDate = (date) => {
    let newDate = new Date(date);
    let dayOfTheWeek = newDate.toDateString().split(" ").slice(0, 1);
    let dayAndMonth = newDate.toDateString().split(" ").slice(1, 3).join(" ");
    let year = newDate.toDateString().split(" ").slice(-1);
    return `${dayOfTheWeek}, ${dayAndMonth}, ${year}`;
  };

  getUnique = (array, name) => {
    const unique = array
      .map((e) => e[name])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => array[e])
      .map((e) => array[e]);
    return unique;
  };

  getNextPage = () => {
    if (this.state.page < this.state.totalPages) {
      let count = this.state.page + 1;
      this.setState({
        page: count,
      });
      this.getNewEvents();
    } else {
      return;
    }
  };

  getPreviousPage = () => {
    if (this.state.page > 0) {
      let count = this.state.page - 1;
      this.setState({
        page: count,
      });
      this.getNewEvents();
    } else {
      return;
    }
  };

  getNewEvents = () => {
    axios
      .get(`http://localhost:8888/getEvents?page=${this.state.page}`)
      .then((res) => {
        this.setState({
          data: this.getUnique(res.data._embedded.events, "name"),
        });
      });
  };

  render() {
    const { data } = this.state;
    if (data.length !== 0) {
      return (
        <div>
          <h2 className="whatsup">
            what's <span className="up">up!</span>
          </h2>
          <div className="events">
            <div className="events-banner">
              <section>{data.map(this.renderEvents)}</section>
              <h2>Events</h2>
              <button
                className="roll-pages"
                onClick={() => this.getPreviousPage()}
              >
                -
              </button>
              <button className="roll-pages" onClick={() => this.getNextPage()}>
                +
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Events</h2>
        </div>
      );
    }
  }
}

export default Events;
