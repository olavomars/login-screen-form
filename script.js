const element = document.getElementById('btn');
element.addEventListener('click', myFunction);

function myFunction() {
  if (element.classList.contains('active'));
  {
    $().button('toggle');
  }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      },
      false
    );
  });
})();

$(document).ready(function () {
  $('img').on('contextmenu', function () {
    return false;
  });
});
