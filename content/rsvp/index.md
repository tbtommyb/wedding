+++
date = "2016-12-26T23:23:26Z"
title = "RSVP"
draft = false
image_source = "test.jpg"

+++

We really hope you can attend. Please fill out the following form for each person:

<form id="gform" method="POST" action="https://script.google.com/macros/s/AKfycbxRo8H99CLeWAQ7sICqzZBu27tGUn25gspVprSbr2-k8Mm0uSo_/exec">
  <fieldset>
    <legend>Name</legend>
    <label>First name<input type="text" name="first_name"></label>
    <label>Second name<input type="text" name="second_name"></label>
  </fieldset>
  <fieldset>
    <legend>Attending</legend>
    <label><input type="radio" name="attending" value="yes">Yes</label>
    <label><input type="radio" name="attending" value="no">No</label>
  </fieldset>
  <fieldset>
    <legend>Dietary requirements</legend>
    <label><input type="radio" name="dietary_requirements" value="none">None</label>
    <label><input type="radio" name="dietary_requirements" value="veg">Vegetarian</label>
    <label><input type="radio" name="dietary_requirements" value="vegan">Vegan</label>
    <label><input type="radio" name="dietary_requirements" value="other">Other</label>
    <label>If other please specify: <input type="text" name="dietary_requirements"></label>
  </fieldset>
  <input type="submit" class="btn"></input>
</form>

<script data-cfasync="false" type="text/javascript" src="/assets/js/handleFormSubmit.js"></script>