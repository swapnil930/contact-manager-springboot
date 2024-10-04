package com.jspider.contact_manager.respository;  // Corrected 'repository' spelling

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;  // Correct import for @Repository

import com.jspider.contact_manager.entity.Contacts;

@Repository  // Add the correct @Repository annotation
public interface ContactRepository extends JpaRepository<Contacts, Integer> {
}
