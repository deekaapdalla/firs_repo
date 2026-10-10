alert("Welcome to Deeka's Portfolio!");

const heading = document.querySelector('#Home h1');
if (heading) {
  heading.addEventListener('click', function () {
    heading.textContent = 'welcome to my Portfolio!';
    alert('You clicked on the heading!');
  });
}

const projectLinks = document.querySelectorAll('#Home a');
projectLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    alert('welcome to my projects');
  });
});

const darkButton = document.querySelector('#darkmodeBtn');
if (darkButton) {
  darkButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    darkButton.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
  });
}

const contactForm = document.querySelector('#contactform');
if (contactForm) {
  const formMessage = document.querySelector('#formmessage');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('#name')?.value.trim();
    const email = document.querySelector('#email')?.value.trim();
    const message = document.querySelector('#message')?.value.trim();

    if (!formMessage) {
      return;
    }

    if (!name || !email || !message) {
      formMessage.textContent = 'Please fill in all fields.';
      return;
    }

    formMessage.textContent = 'Thank you, ' + name + '! Your message is ready to send.';
    contactForm.reset();
  });
}