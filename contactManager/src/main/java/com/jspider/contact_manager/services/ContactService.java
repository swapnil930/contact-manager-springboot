package com.jspider.contact_manager.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspider.contact_manager.entity.Contacts;
import com.jspider.contact_manager.respository.ContactRepository;



@Service

public class ContactService {

	@Autowired
	ContactRepository repository;
	
	public Contacts addContact(Contacts contact) {
		return repository.save(contact);
		
	}


	public List<Contacts> findAllContacts() {
		return repository.findAll();
	}


	public Contacts updateUser(Contacts contact) {
		
		return repository.save(contact);
	}


	public Contacts findUserById(int id) {
	      Optional<Contacts> contact= repository.findById(id);
	      if(contact.isPresent()) {
	    	  return contact.get();
	      }else {
	    	  return null;
	      }
	}


	public Contacts deleteContact(int id) {
		Contacts contact=repository.findById(id).get();
		repository.deleteById(id);
		
		return contact;
	}
	

}
	