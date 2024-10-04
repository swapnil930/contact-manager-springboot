import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContactServices } from '../../../Services/Services';
import Spinner from '../../NavBar/Spinner';

const AddContact = () => {
  const navigate = useNavigate(); // using useNavigate hook

  let [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
      photo: "",
      mobile: "",
      email: "",
      company: "",
      groupId: ""
    },
    errorMessage: ""
  });

  const updateHandle = (event) => {
    const {value,name} = event.target;
      setState({
        ...state,
        contact: {
          ...state.contact,
          [name]: value
        }
      });
    }


  let { loading, contact, errorMessage } = state;

  const submitHandler = (event) => {
    event.preventDefault();
    setState({ ...state, loading: true });
  
    ContactServices.createContact(contact)
      .then((response) => {
        setState({ ...state, loading: false });
        navigate("/contacts/list", { replace: true });
      })
      .catch(() => {
        setState({
          ...state,
          loading: false,
          errorMessage: "Data Not Posted.."
        });
        alert("Data Not Posted");
      });
  };

  return (
    <>
      <div className="container text text-center">{errorMessage}</div> 
      <div className="add-contact" style={{fontFamily:'sans-serif'}}>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-dark fw-bold" style={{ fontFamily: 'serif' }}>Create Contact</p>
              <p style={{ fontFamily: 'cursive' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolor, aliquam vel eveniet, maiores cum ratione aut harum reiciendis exercitationem aspernatur distinctio vero reprehenderit impedit? Totam ducimus consequuntur unde beatae!
              </p>
            </div>
          </div>

      {loading?(<Spinner/>):(
        
        <div className="row">
        <div className="col-md-4">
          <form onSubmit={submitHandler}>
            <div className="mb-2">
              <input
                type="text" placeholder="Name" name="name" value={contact.name} onChange={updateHandle} className="form-control"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"placeholder="Photo URL"name="photo"value={contact.photo}onChange={updateHandle}className="form-control"
              />
            </div>
            <div className="mb-2">
              <input
                type="tel"placeholder="Mobile Number"name="mobile"value={contact.mobile}onChange={updateHandle}className="form-control"
              />
            </div>
            <div className="mb-2">
              <input
                type="email" placeholder="Email" name="email" value={contact.email} onChange={updateHandle} className="form-control"
              />
            </div>
            <div className="mb-2">
            <input
               type="text" placeholder="Company Name" name="company" value={contact.company} onChange={updateHandle} className="form-control"
              />

            </div>
            <div className="mb-2">
              <select
                name="groupId" value={contact.groupId} onChange={updateHandle} className="form-control">
                <option value="">Select A Group</option>
                <option value="Colleague">Colleague</option>
                <option value="Family">Family</option>
                <option value="Collage">College</option>
                <option value="Social">Social</option>
                <option value="Friend">Friend</option>
              </select>
            </div>
            <div className="mb-2">
              <input type="submit" value="Create" className="btn btn-success" />
              <Link to="/contacts/list" className="btn btn-danger ms-2">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
      )}
     </div>
    </div>
  </>
  );
};

export default AddContact;
