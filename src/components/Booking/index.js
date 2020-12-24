import React, { useState, Component } from "react";
import Select from 'react-select'
import {BookingContainer, BookingButton} from './BookingElements';
import DatePicker from 'react-date-picker';


const childrenoptions = [
  { value: '0', label: '0' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' }
]
const guestoptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
]

const timeoptions = [
  { value: '10', label: '10:00' },
  { value: '11', label: '11:00' },
  { value: '12', label: '12:00' },
  { value: 'xx', label: 'xx:xx' },
]
const Booking = () => {
    const [value, onChange] = useState(new Date());
    return (
        <BookingContainer>
            <h1>Booking Detail</h1>
            <p>Adult: </p>
            <Select name = "NoOfGuest" options={guestoptions} clearable={false}  />
            <p>Child: </p>
            <Select name = "NoOfChildren" options={childrenoptions}clearable={false} />
            <p>Date: </p>
            <DatePicker
                onChange={onChange}
                value={value}/>
            <p>Time</p>
            <Select name = "TimeSelect" options={timeoptions}clearable={false}/>
            <BookingButton>Confirm Booking</BookingButton>
        </BookingContainer>
  );
};


export default Booking;

 
