package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class Physician extends User implements HIPAACompliantUser {
	private ArrayList<String> patientNotes;
	
	// TO DO: Constructor that takes an IDcopy
    public Physician(Integer id) {
        this.id = id;
        this.patientNotes = new ArrayList<>();
    }

    public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
                "Datetime Submitted: %s \n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }

    @Override
    public boolean assignPin(int pin) {
        // Check if the pin is exactly 4 digits
        if (String.valueOf(pin).length() == 4) {
            this.pin = pin;
            return true; // Pin assigned successfully
        } else {
            return false; // Invalid pin
        }
    }

    @Override
    public boolean accessAuthorized(Integer confirmedAuthID) {
        // Simple authorization logic (e.g., allow access if the confirmedAuthID matches the user's ID)
        return confirmedAuthID.equals(this.id);
    }


    // TO DO: Setters & Getters
    public ArrayList<String> getPatientNotes(){
        return this.patientNotes;
    }
    public void setPatientNotes(ArrayList<String> patientNotes){
        this.patientNotes = patientNotes;
    }
}
