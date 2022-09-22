import React from 'react'
import Header from '../Header/Header'
import OrderSummary from '../OrderSummary/OrderSummary';
import './AddressDetails.css'
import { TextField } from '@mui/material';
import { addAddress } from '../../services/dataService';

const fullnameRegex = /^[A-Z]{1}[a-z]{1,}$/;
const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
const pincodeRegex = /^[1-9]{1}[0-9]{5}$/
const localityRegex = /^[A-Z]{1}[a-z]{1,}$/;
const addressRegex = /^[A-Za-z0-9]{2,}$/;
const cityRegex = /^[A-Za-z0-9]{2,}$/;
const townRegex = /^[A-Za-z0-9]{2,}$/;


function AddressDetails() {
  const [view1, setView1] = React.useState(true);

  const [addressObj, setaddressObj] = React.useState({ fullname: "", phonenumber: "", pincode: "", locality: "", address: " ", city: " ", landmark: "",address_type:"Home", state: "Andhra Pradesh" });
  const [regexObj, setRegExObj] = React.useState({
    fullnameBorder: false, fullnameHelper: "",
    phonenumberBorder: false, phonenumberHelper: "",
    pincodeBorder: false, pincodeHelper: "",
    localityBorder: false, localityHelper: "",
    addressBorder: false, addressHelper: "",
    cityBorder: false, cityHelper: "",
    landmarkBorder: false, landmarkHelper: "",
  });

  const takefullname = (event) => {
    setaddressObj((prevState) => ({ ...prevState, fullname: event.target.value }));
  };
  const takephonenumber = (event) => {
    setaddressObj((prevState) => ({ ...prevState, phonenumber: event.target.value }));
  };
  const takepincode = (event) => {
    setaddressObj((prevState) => ({ ...prevState, pincode: event.target.value }));
  };
  const takelocality = (event) => {
    setaddressObj((prevState) => ({ ...prevState, locality: event.target.value }));
  };
  const takeaddress = (event) => {
    setaddressObj((prevState) => ({ ...prevState, address: event.target.value }));
  };
  const takecity = (event) => {
    setaddressObj((prevState) => ({ ...prevState, city: event.target.value }));
  };
  const takelandmark = (event) => {
    setaddressObj((prevState) => ({ ...prevState, landmark: event.target.value }));
  };


  const OrderClick = async () => {
    let fullnameTest = fullnameRegex.test(addressObj.fullname);
    let phonenumberTest = mobileRegex.test(addressObj.phonenumber);
    let pincodeTest = pincodeRegex.test(addressObj.pincode);
    let localityTest = localityRegex.test(addressObj.locality);
    let addressTest = addressRegex.test(addressObj.address);
    let cityTest = cityRegex.test(addressObj.city);
    let landmarkTest = townRegex.test(addressObj.landmark);



    if (fullnameTest === false) {
      setRegExObj((prevState) => ({
        ...prevState,
        fullnameBorder: true,
        fullnameHelper: "enter correct Name",
      }));
    } else if (fullnameTest === true) {
      setRegExObj((prevState) => ({
        ...prevState,
        fullnameBorder: false,
        fullnameHelper: "",
      }));
    }

    if (phonenumberTest === false) {
      setRegExObj((prevState) => ({
        ...prevState,
        phonenumberBorder: true,
        phonenumberHelper: "enter correct email",
      }));
    } else if (phonenumberTest === true) {
      setRegExObj((prevState) => ({
        ...prevState,
        phonenumberBorder: false,
        phonenumberHelper: "",
      }));
    }
    if (pincodeTest === false) {
      setRegExObj((prevState) => ({
        ...prevState,
        pincodeBorder: true,
        pincodeHelper: "enter correct password",
      }));
    } else if (pincodeTest === true) {
      setRegExObj((prevState) => ({
        ...prevState,
        pincodeBorder: false,
        pincodeHelper: "",
      }));
    }

    if (localityTest === false) {
      setRegExObj((prevState) => ({
        ...prevState,
        localityBorder: true,
        localityHelper: "Enter correct Mobile Number",
      }));
    } else if (localityTest === true) {
      setRegExObj((prevState) => ({
        ...prevState,
        localityBorder: false,
        localityHelper: "",
      }));
    }

    if (addressTest === false) {
      setRegExObj((prevState) => ({
        ...prevState,
        addressBorder: true,
        addressHelper: "Enter correct Mobile Number",
      }));
    } else if (addressTest === true) {
      setRegExObj((prevState) => ({
        ...prevState,
        addressBorder: false,
        addressHelper: "",
      }));
    }

    if (cityTest === false) {
      setRegExObj((prevState) => ({
        ...prevState,
        cityBorder: true,
        cityHelper: "Enter correct Mobile Number",
      }));
    } else if (cityTest === true) {
      setRegExObj((prevState) => ({
        ...prevState,
        cityBorder: false,
        cityHelper: "",
      }));
    }

    if (landmarkTest === false) {
      setRegExObj((prevState) => ({
        ...prevState,
        landmarkBorder: true,
        landmarkHelper: "Enter correct Mobile Number",
      }));
    } else if (landmarkTest === true) {
      setRegExObj((prevState) => ({
        ...prevState,
        landmarkBorder: false,
        landmarkHelper: "",
      }));
    }

    if (fullnameTest === true && phonenumberTest === true && pincodeTest === true && localityTest === true && addressTest === true && cityTest === true && landmarkTest === true) {
      // console.log("hitt the server");
      let response = await addAddress(addressObj);
      console.log(response)
      setView1(false)

    }
  };


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
                style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "100%" }}
                onChange={takefullname}
                error={regexObj.fullnameBorder}
                helperText={regexObj.fullnameHelper} />
            </div>
            <div className='fname'>
              <TextField id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder=" Phone Number "
                style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "100%" }}
                onChange={takephonenumber}
                error={regexObj.phonenumberBorder}
                helperText={regexObj.phonenumberHelper} />
            </div>
          </div>
          <div className="fullname">
            <div className='fname'>
              <TextField id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder=" Pincode "
                style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "100%" }}
                onChange={takepincode}
                error={regexObj.pincodeBorder}
                helperText={regexObj.pincodeHelper} />
            </div>

            <div className='fname'>
              <TextField id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder=" Locality "
                style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "100%" }}
                onChange={takelocality}
                error={regexObj.localityBorder}
                helperText={regexObj.localityHelper} />
            </div>
          </div>
          <div className="address">
            <TextField id="outlined-basic"
              variant="outlined"
              size="small"
              placeholder=" Address "
              style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "98.5%" }}
              onChange={takeaddress}
              error={regexObj.addressBorder}
              helperText={regexObj.addressHelper} />
          </div>
          <div className="fullname">
            <div className='fname'>
              <TextField id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder=" City/town "
                style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "100%" }}
                onChange={takecity}
                error={regexObj.cityBorder}
                helperText={regexObj.cityHelper} />
            </div>
            <div className='fname'>
              <TextField id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder=" Landmark "
                style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "100%" }}
                onChange={takelandmark}
                error={regexObj.landmarkBorder}
                helperText={regexObj.landmarkHelper} />
            </div>
          </div>
          <label className="type">Type</label>
          <div className="radio"/* onClick={handleradio} */>
            <input type="radio" className="home" value="Home" name="type" /> Home
            <input type="radio" className="work" value="Work" name="type" /> work
            <input type="radio" className="orther" value="Orther" name="type" /> Orther
          </div>
        </div>
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