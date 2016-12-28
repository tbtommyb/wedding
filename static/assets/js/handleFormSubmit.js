// get all data in form and return object
function getFormData() {
  var elements = document.getElementById('gform').elements; // all form elements
  var fields = Object.keys(elements).map(function(k) {
    if(elements[k].name !== undefined) {
      return elements[k].name;
    // special case for Edge's html collection
    } else if(elements[k].length > 0) {
      return elements[k].item(0).name;
    }
  }).filter(function(item, pos, self) {
    return self.indexOf(item) == pos && item;
  });
  var data = {};
  fields.forEach(function(k) {
    data[k] = elements[k].value;
    if(elements[k].type === 'checkbox') {
      data[k] = elements[k].checked;
    // special case for Edge's html collection
    } else if(elements[k].length) {
      for(var i = 0; i < elements[k].length; i++) {
        if(elements[k].item(i).checked) {
          data[k] = elements[k].item(i).value;
        }
      }
    }
  });
  return data;
}

function handleFormSubmit(event) {  // handles form submit withtout any jquery
  event.preventDefault();           // we are submitting via xhr below
  var data = getFormData();         // get the values submitted in the form
  var url = event.target.action;  //
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  // xhr.withCredentials = true;
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    document.querySelector('.article-content').style.display = 'none'; // hide form
    document.getElementById('thankyou_message').style.display = 'block';
    document.getElementById('reset_form').addEventListener('click', resetForm, false);
    return;
  };
  // url encode form data for sending as post data
  var encoded = Object.keys(data).map(function(k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
  }).join('&');
  xhr.send(encoded);
}

function loaded() {
  // bind to the submit event of our form
  var form = document.getElementById('gform');
  form.addEventListener('submit', handleFormSubmit, false);
}

function resetForm() {
  document.getElementById('gform').reset();
  document.querySelector('.article-content').style.display = 'block';
  document.getElementById('thankyou_message').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', loaded, false);
