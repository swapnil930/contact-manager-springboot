
package com.jspider.contact_manager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jspider.contact_manager.entity.Response;
import com.jspider.contact_manager.entity.Contacts;
import com.jspider.contact_manager.services.ContactService;

@CrossOrigin(origins="*")

@RestController
public class Controller {

	@Autowired
	private ContactService service;

	@PostMapping(value = "/contacts")
	protected ResponseEntity<Response<Contacts>> addUser(@RequestBody Contacts contact) {

		Contacts addedContact = service.addContact(contact);
		Response<Contacts> response = new Response<>();
		response.setMessage("Contact added");
		response.setHttpStatusCode(HttpStatus.CREATED.value());
		response.setData(addedContact);
		return new ResponseEntity<Response<Contacts>>(response, HttpStatus.CREATED);
	}
	
	@GetMapping(value = "/contacts")
	protected ResponseEntity<Response<List<Contacts>>> findAllContacts() {
	    List<Contacts> contacts = service.findAllContacts();
	    Response<List<Contacts>> response = new Response<>();
	    
	    if (contacts.size() > 0) {
	        response.setMessage("Contact found");
	        response.setHttpStatusCode(HttpStatus.OK.value()); 
	        response.setData(contacts);
	        return new ResponseEntity<>(response, HttpStatus.OK); 
	    } else {
	        response.setMessage("Users not found");
	        response.setHttpStatusCode(HttpStatus.NOT_FOUND.value());
	        response.setData(contacts);
	        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
	    }
	}


	@PutMapping(value = "/contacts/{id}")
	protected ResponseEntity<Response<Contacts>> updateUser(@RequestBody Contacts contact) {
		System.out.println(contact+"this updated contact");
		Contacts updatedUser = service.updateUser(contact);
		Response<Contacts> response = new Response<>();
		response.setMessage("Contact updated");
		response.setHttpStatusCode(HttpStatus.OK.value());
		response.setData(updatedUser);
		return new ResponseEntity<Response<Contacts>>(response, HttpStatus.OK);
	}

	@GetMapping(value = "/contacts/{id}")
	protected ResponseEntity<Response<Contacts>> findUserById(@PathVariable(name = "id") int id) {
		Contacts contact = service.findUserById(id);
		
		Response<Contacts> response = new Response<>();
		if (contact!= null) {
			response.setMessage("User found");
			response.setHttpStatusCode(HttpStatus.OK.value());
			response.setData(contact);
			return new ResponseEntity<Response<Contacts>>(response, HttpStatus.OK);
		} else {
			response.setMessage("User not found");
			response.setHttpStatusCode(HttpStatus.NOT_FOUND.value());
			return new ResponseEntity<Response<Contacts>>(response, HttpStatus.NOT_FOUND);
		}
	}

	

	@DeleteMapping(value = "/contacts/{id}")
	protected ResponseEntity<Response<Contacts>> deleteUser(@PathVariable(name = "id") int id) {
	    Contacts deletedContact = service.deleteContact(id);
	    Response<Contacts> response = new Response<>();
	    if (deletedContact != null) {
	        response.setMessage("User deleted successfully");
	        response.setHttpStatusCode(HttpStatus.OK.value()); 
	        response.setData(deletedContact);
	        return new ResponseEntity<>(response, HttpStatus.OK);  
	    } else {
	        response.setMessage("User not found");
	        response.setHttpStatusCode(HttpStatus.NOT_FOUND.value());
	        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);  
	    }
	}


	

	
}
