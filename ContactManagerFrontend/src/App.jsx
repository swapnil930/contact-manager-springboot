import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import {Routes,Route,Navigate} from 'react-router-dom'
import AddContact from './Components/Contacts/AddContact/AddContact'
import EditContact from './Components/Contacts/EditContact/EditContact'
import ViewContact from './Components/Contacts/ViewContact/ViewContact'
import ContactList from './Components/Contacts/ConatctList/ContactList'


export default function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Navigate to={'/contacts/list'}/>} />
    <Route path='/contacts/list' element={<ContactList/>} />
    <Route path='/contacts/add' element={<AddContact/>} />
    <Route path="/contacts/edit/:contactId" element={<EditContact />} />
    <Route path='/contacts/view/:contactId' element={<ViewContact/>} />
    <Route/>


    </Routes>
    </>
  )
}

