+++
date = "2016-12-26T23:23:26Z"
title = "RSVP"
draft = false
image_source = "1.jpg"
thankyou = true
script = "handleFormSubmit.js"
+++

We really hope you can attend! We'd be grateful if you could RSVP within **two weeks** of receiving the invitation.

Please fill out the following form for each person:

<form id="gform" method="POST" action="https://script.google.com/macros/s/AKfycbxRo8H99CLeWAQ7sICqzZBu27tGUn25gspVprSbr2-k8Mm0uSo_/exec">
  <fieldset>
    <legend>Name (required)</legend>
    <label>First&nbsp;name<input type="text" name="first_name" required></label>
    <label>Surname<input type="text" name="second_name" required></label>
  </fieldset>
  <fieldset>
    <legend>Attending (required)</legend>
    <label><input type="radio" name="attending" value="yes" required>Yes</label>
    <label><input type="radio" name="attending" value="no" id="not-attending">No</label>
  </fieldset>
  <fieldset>
    <legend>Dietary requirements</legend>
    <label><input type="radio" name="dietary_requirements" value="none" id="none">None</label>
    <label><input type="radio" name="dietary_requirements" value="veg">Vegetarian</label>
    <label><input type="radio" name="dietary_requirements" value="vegan">Vegan</label>
    <label><input type="radio" name="dietary_requirements" value="other" id="other">Other</label>
    <label>Please specify any details:<input type="text" name="requirements_details" id="other_details"></label>
  </fieldset>
  <fieldset>
    <legend>Coaches (optional)</legend>
    <p>There will be limited spaces on coaches going from the ceremony to the wedding breakfast, allocated on a first-come-first-served basis. If you are attending the wedding breakfast and would like to request a coach place, please tick the box below. We will email confirmation for your group if you provide an email address.</p>
    <label><input type="checkbox" name="coach" value="yes">Request a coach place</label>
    <label><input type="text" name="email">Email</label>
  </fieldset>
  <fieldset>
    <legend>Music (optional)</legend>
    <p>We're putting together an awesome playlist and need your help! Let us know the songs you think we should play.</p>
    <textarea cols="50" rows="10" name="music"></textarea>
  </fieldset>
  <p class="is-error" id="error-message">Please enter first name, last name and whether you're attending.</p>
  <input type="submit" id="submit" class="right-align btn navy" value="Submit RSVP">
</form>
