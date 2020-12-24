import React, { useState } from "react";
import Select from 'react-select'
import {BookingContainer, BookingButton} from './BookingElements';
import DatePicker from 'react-date-picker';
import {guestoptions, childrenoptions, timeoptions} from './BookingSelect'

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
            <Select name = "TimeSelect"   width='10000px' options={timeoptions}clearable={false}/>
            <BookingButton>Confirm Booking</BookingButton>
        </BookingContainer>
  );
};


export default Booking;

 
