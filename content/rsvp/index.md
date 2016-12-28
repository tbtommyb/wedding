+++
date = "2016-12-26T23:23:26Z"
title = "RSVP"
draft = false
image_source = "test.jpg"
thankyou = true

+++

We really hope you can attend. Please fill out the following form for each person:

<form id="gform" method="POST" action="https://script.google.com/macros/s/AKfycbxRo8H99CLeWAQ7sICqzZBu27tGUn25gspVprSbr2-k8Mm0uSo_/exec">
  <fieldset>
    <legend>Name (required)</legend>
    <label>First name<input type="text" name="first_name" required></label>
    <label>Second name<input type="text" name="second_name" required></label>
  </fieldset>
  <fieldset>
    <legend>Attending (required)</legend>
    <label><input type="radio" name="attending" value="yes" required>Yes</label>
    <label><input type="radio" name="attending" value="no">No</label>
  </fieldset>
  <fieldset>
    <legend>Dietary requirements (required)</legend>
    <label><input type="radio" name="dietary_requirements" value="none" required>None</label>
    <label><input type="radio" name="dietary_requirements" value="veg">Vegetarian</label>
    <label><input type="radio" name="dietary_requirements" value="vegan">Vegan</label>
    <label><input type="radio" name="dietary_requirements" value="other" id="other">Other</label>
    <label>If other please specify: <input type="text" name="requirements_details" id="other_details"></label>
  </fieldset>
  <input type="submit" class="btn"></input>
</form>

<script data-cfasync="false" type="text/javascript" src="/assets/js/handleFormSubmit.js"></script>