// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: Sep 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's first name and age and displays it back to user

  // get first name from text field
  const firstName = document.getElementById("first-name").value
	// get age from text field and cast it to integer
  const userAge = parseInt(document.getElementById("age-entered").value)

  // display name and age back to user
  document.getElementById('address').innerHTML = 'Your info is: ' + firstName + ', age ' + userAge + '.'
}