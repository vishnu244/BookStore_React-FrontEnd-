import React from 'react'
import Header from '../Header/Header'
import OrderSummary from '../OrderSummary/OrderSummary';
import './AddressDetails.css'
import { TextField } from '@mui/material';
import { addAddress } from '../../services/dataService';



function AddressDetails() {
  const [view1, setView1] = React.useState(true);

  const OrderClick = () => {
    setView1(false)
  }

  return (
    <div>
      <div className='AddressDetailsContainer'>
        <div className='details'>
          <div className='custdetails'>
            <p>Customer Details</p>
          </div>
          <div className="fullname">
            <div className='fname'>
              <TextField id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder=" Full Name "
                style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "100%" }} />
            </div>
            <div className='fname'>
              <TextField id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder=" Phone Number "
                style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "100%" }} />
            </div>
          </div>
          <div className="fullname">
            <div className='fname'>
              <TextField id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder=" Pincode "
                style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "100%" }} />
            </div>
            <div className='fname'>
              <TextField id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder=" Locality "
                style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "100%" }} />
            </div>
          </div>
          <div className="address">
            <TextField id="outlined-basic"
              variant="outlined"
              size="small"
              placeholder=" Address "
              style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "98.5%" }} />
          </div>
          <div className="fullname">
            <div className='fname'>
              <TextField id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder=" City/town "
                style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "100%" }} />
            </div>
            <div className='fname'>
              <TextField id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder=" Landmark "
                style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "100%" }} />
            </div>
          </div>
          <label className="type">Type</label>
          <div className="radio"/* onClick={handleradio} */>
            <input type="radio" className="home" value="Home" name="type" /> Home
            <input type="radio" className="work" value="Work" name="type" /> work
            <input type="radio" className="orther" value="Orther" name="type" /> Orther
          </div>
        </div>
        <button style={{ color: "white" }}>FaceBook</button>

        <div className='continue'>
          <button onClick={OrderClick} >CONTINUE</button>
        </div>


      </div>
      {view1 ? <div className="ordersummary">
        <p className="ordersum"  >Order Summary </p>
      </div>
        : <OrderSummary />}
    </div >
  )
}

export default AddressDetails