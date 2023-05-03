import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import "./BookingForm.css"
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function BookingForm(props) {
  const handleOpen = () => props.setOpen(true);
  const handleClose = () => props.setOpen(false);
  const { parkingPlazaReadOnlyDetails } = props;
  const [bookingDetails, setBookingDetails] = useState({
    parking_plaza_id: parkingPlazaReadOnlyDetails.parking_plaza_id,
    amount: parkingPlazaReadOnlyDetails.amount,
    transaction_id: parkingPlazaReadOnlyDetails.transaction_id
  });

  const handleChange = (e) => {
    setBookingDetails((state) => ({ ...state, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    console.log(bookingDetails);
    props.setOpen(false);
  }
  return (
    <div>
      {console.log(bookingDetails)}
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
          className='bookingForm'
        >
          <h3 className='bookingFormHeading'>Booking Form</h3>
          <TextField
            margin="normal"
            fullWidth
            id="parking_plaza_id"
            label="Parking Plaza ID"
            name="parking_plaza_id"
            defaultValue={bookingDetails.parking_plaza_id}
            autoFocus
            InputProps={{
              readOnly: true,
            }}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="timeContainer">
              <TimePicker
                margin="normal"
                required
                fullWidth
                id="parking_start_time "
                label="Parking Start Time"
                name="parking_start_time "
                autoFocus
                onChange={(e) => handleChange(e)} />
              <TimePicker
                margin="normal"
                required
                fullWidth
                id="parking_end_time  "
                label="Parking End Time"
                name="parking_end_time "
                autoFocus
                onChange={(e) => handleChange(e)} />
            </div>
          </LocalizationProvider>
          {/* <TextField
            margin="normal"
            required
            fullWidth
            id="parking_start_time "
            label="Parking Start Time"
            name="parking_start_time "
            autoFocus
            onChange={(e) => handleChange(e)}
          /> */}
          {/* <TextField
            margin="normal"
            required
            fullWidth
            id="parking_end_time  "
            label="Parking End Time"
            name="parking_end_time "
            autoFocus
            onChange={(e) => handleChange(e)}
          /> */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="vehicle_no   "
            label="vehicle Number"
            name="vehicle_no  "
            autoFocus
            onChange={(e) => handleChange(e)}
          />
          <TextField
            margin="normal"
            fullWidth
            id="amount "
            label="amount"
            name="amount "
            defaultValue={bookingDetails.amount}
            autoFocus
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            id="transaction_id"
            label="transaction id "
            name="transaction_id  "
            defaultValue={bookingDetails.transaction_id}
            autoFocus
            InputProps={{
              readOnly: true,
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Book Slot
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
