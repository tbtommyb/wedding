var elGForm = document.getElementById('gform');
var elArticleContent = document.querySelector('.article-content');
var elSubmitButton = document.getElementById('submit');
var elErrorMessage = document.getElementById('error-message');
var elsRequiredTextInputs = document.querySelectorAll("input[required][type='text']");
var elsRadios = document.querySelectorAll("input[type='radio']");

var forEach = function(array, callback, scope) {
  for(var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

// get all data in form and return object
function getFormData() {
  var elements = elGForm.elements; // all form elements
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

function handleErrorMessages() {
  elErrorMessage.style.visibility = 'visible';
  forEach(elsRequiredTextInputs, function(i, el) {
    el.addEventListener('input', function() {
      elErrorMessage.style.visibility = 'hidden';
    });
  })

  forEach(elsRadios, function(i, el) {
    el.addEventListener('change', function() {
      elErrorMessage.style.visibility = 'hidden';
    });
  })
}

function handleFormSubmit(event) {
  event.preventDefault();
  if(!event.target.checkValidity()) {
    handleErrorMessages();
    return;
  }
  elErrorMessage.style.visibility = 'hidden';
  elSubmitButton.value = 'Submitting...';
  elSubmitButton.disabled = true;
  var data = getFormData();
  var url = event.target.action;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    elArticleContent.style.display = 'none'; // hide form
    document.getElementById('thankyou_message').style.display = 'block';
    document.body.scrollTop = 0;
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
  elSubmitButton.disabled = false;
  elGForm.addEventListener('submit', handleFormSubmit, false);
}

function resetForm() {
  elGForm.reset();
  elSubmitButton.value = 'Submit RSVP';
  elSubmitButton.disabled = false;
  elArticleContent.style.display = 'block';
  document.getElementById('thankyou_message').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', loaded, false);
