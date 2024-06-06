

// Phone nvabar menu
const toggle = document.getElementById('toggle');
const nav = document.getElementById('ulnavbar');

    toggle.addEventListener('click', kebawah);

function kebawah() {
    ulnavbar.classList.toggle("active");
}


// Auto Slide Banner
document.addEventListener("DOMContentLoaded", function() {
    const banner = document.querySelector('.banner');
    const background = document.querySelectorAll('.background');
    let currentIndex = 0;

    const firstSlideClone = background[0].cloneNode(true);
    banner.appendChild(firstSlideClone);

    function showNextSlide() {
        currentIndex++;
        banner.style.transition = 'transform 1s ease-in-out';
        banner.style.transform = `translateX(-${currentIndex * 100}%)`;

        if (currentIndex === background.length) {
            setTimeout(() => {
                banner.style.transition = 'none';
                banner.style.transform = 'translateX(0)';
                currentIndex = 0;
            }, 1000); 
        }
    }

    setInterval(showNextSlide, 4000);
});

//Validation
document.addEventListener('DOMContentLoaded', () => {
  const name = document.getElementById('name');
  const date = document.getElementById('date');
  const message = document.getElementById('message');
  const contactForm = document.getElementById('contact-form');
  const storedName = document.getElementById('stored-name');
  const storedDate = document.getElementById('stored-date');
  const storedMessage = document.getElementById('stored-message');
  const errorElement = document.getElementById('outputerror');
  const success = document.getElementById('outputsuccess');

  const validate = (e) => {
      e.preventDefault();

      let isValid = true;
      let errorMessage = '';

      if (name.value.length < 3) {
          errorMessage = 'Your name should be at least 3 characters long.';
          isValid = false;
      } else if (!date.value) {
          errorMessage = 'Please select a date.';
          isValid = false;
      } else {
          const selectedDate = new Date(date.value);
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          if (selectedDate < today) {
              errorMessage = 'Please select a date that is not in the past.';
              isValid = false;
          }
      } if (message.value.length < 1) {
          errorMessage = 'Please write a message.';
          isValid = false;
      }

      if (!isValid) {
          errorElement.innerHTML = errorMessage;
          return;
      }

      storedName.value = name.value;
      storedDate.value = date.value;
      storedMessage.value = message.value;

      contactForm.reset();

      errorElement.innerHTML = '';
      success.innerHTML = 'Thank you! Your message has been stored.';

      setTimeout(() => {
          success.innerHTML = '';
      }, 6000);
  };

  contactForm.addEventListener('submit', validate);
}); 

