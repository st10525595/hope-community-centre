// 1. MOBILE MENU
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('mainNav');
if(menuBtn && nav){
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

// 2. FORM VALIDATION + AJAX
function handleForm(formId, successId){
  const form = document.getElementById(formId);
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    const errorBox = document.getElementById(successId);

    if(name.length < 2){
      errorBox.textContent = "⚠️ Please enter your full name.";
      errorBox.style.color = "red"; errorBox.style.display = "block";
      return;
    }
    if(!email.includes('@') || !email.includes('.')){
      errorBox.textContent = "⚠️ Please enter a valid email address.";
      errorBox.style.color = "red"; errorBox.style.display = "block";
      return;
    }
    if(message.length < 10){
      errorBox.textContent = "⚠️ Please write a message of at least 10 characters.";
      errorBox.style.color = "red"; errorBox.style.display = "block";
      return;
    }

    errorBox.textContent = "Sending...";
    errorBox.style.color = "#174a17"; errorBox.style.display = "block";

    setTimeout(() => {
      errorBox.textContent = "✅ Thank you " + name + "! Your message was sent. We will reply within 24 hours.";
      form.reset();
    }, 800);
  });
}
handleForm('volunteerForm','volunteerMsg');
handleForm('contactForm','contactMsg');