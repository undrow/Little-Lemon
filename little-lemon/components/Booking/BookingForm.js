import React from 'react';
import PropTypes from 'prop-types';
import styles from './Booking.module.css';

const Booking = () => (
  <div className={styles.Booking} data-testid="Booking">
    <form>
      <h1>Book a table!</h1>
      <label for={date}>Date</label> <br></br>
      <input type={number} name={date}></input>
      <label for={time}>Time</label> <br></br>
      <input type={time} name={time}></input>
      <label for={guests}>Number of guests</label> <br></br>
      <input type={number} name={guests}></input>
      <label for={occasion}>Occasion</label> <br></br>
      <input type={text} name={occasion}></input>
      <br></br>
      <input type={submit}>submit</input>
    </form>
  </div>
);

Booking.propTypes = {};

Booking.defaultProps = {};

export default Booking;
