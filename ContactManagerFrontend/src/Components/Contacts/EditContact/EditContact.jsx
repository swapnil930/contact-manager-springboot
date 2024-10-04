import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ContactServices } from '../../../Services/Services';
import Spinner from '../../NavBar/Spinner';

const EditContact = () => {
  let { contactId } = useParams();
  let navigate = useNavigate();
  let [state, setState] = useState({
    loading: true,
    contact: {
      name: "",
      photo: "",
      mobile: "",
      email: "",
      title: "",
      company: "",
      groupId: "",
    },
    errorMessage: ""
  });

  useEffect(()=>{
    let promise=new Promise((res,rej)=>{
      setState({...state, loading:true, contact:{}});
      let response = ContactServices.getContact(contactId);
      res(response);  
    })
    promise.then((resp)=>{
      setState({...state, loading:false, contact:resp.data.data})
    }).catch(()=>{
      setState({...state, loading:false, errorMessage:alert('data not found')})
    })
  },[contactId]);


  const submitHandler =(e) => {
    e.preventDefault();
    let promise=new Promise((res, rej)=>{
     
      setState({ ...state, loading: true });
      let response=ContactServices.updateContact(contactId, state.contact)
      res(response)
    })
    promise.then((res1)=>{
        setState({...state, loading:false});
        navigate("/contacts/list", { replace: true });
    })
    .catch(()=>{

      setState({...state, loading:false, 
        errorMessage:alert("Something went wrong while updating contact details")})
        navigate(`/contacts/edit/${contactId}`, { replace: true });
    })
  }

    

  const updateHandler = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      contact: {
        ...state.contact,
        [name]: value,
      },
    });
  };

  const { loading, contact, errorMessage } = state;

  return (
    <>
     <div className="container text text-center">{errorMessage}</div>
    <div className="update-contact" style={{ fontFamily: "sans-serif" }}>
      <div className="container">
        <h3 className="text-dark fw-bold" style={{ fontFamily: 'serif' }}>Edit Contact</h3>
        
        {loading ? (<Spinner/>) : (
          
          <div className="row">
            <div className="col-md-4">
            <form onSubmit={submitHandler}>
            <div className="mb-2">
              <input
                type="text" placeholder="Name" name="name" value={contact.name} onChange={updateHandler} className="form-control"
              />
            </div>
            <div className="mb-2">
              <input
                type="text" placeholder="Photo URL" name="photo" value={contact.photo} onChange={updateHandler} className="form-control"
              />
            </div>
            <div className="mb-2">
              <input
                type="tel"placeholder="Mobile Number"name="mobile"value={contact.mobile}onChange={updateHandler}className="form-control"
              />
            </div>
            <div className="mb-2">
              <input
                type="email"placeholder="Email"name="email"value={contact.email}onChange={updateHandler}className="form-control"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"placeholder="Company Name"name="company"value={contact.company}onChange={updateHandler}className="form-control"
              />
            </div>
            <div className="mb-2">
              <select
                name="groupId" value={contact.groupId} onChange={updateHandler} className="form-control"
              >
                <option value="">Select A Group</option>
                <option value="Colleague">Colleague</option>
                <option value="Family">Family</option>
                <option value="Collage">College</option>
                <option value="Social">Social</option>
                <option value="Friend">Friend</option>
              </select>
            </div>
            <div className="mb-2">
              <button type="submit" className="btn btn-success">
                Update
              </button>
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

export default EditContact;