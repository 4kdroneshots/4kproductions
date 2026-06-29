// Placeholder business inbox — replace with the real address before launch.
const BUSINESS_EMAIL = 'hello@4kproductions.com';

function mailtoSubmit(form, subject, buildBody) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const body = buildBody(data);
    const url = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  });
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  mailtoSubmit(contactForm, 'New message from 4K Productions website', (data) => (
    `Name: ${data.get('name')}\n` +
    `Email: ${data.get('email')}\n\n` +
    `${data.get('message')}`
  ));
}

const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
  mailtoSubmit(bookingForm, 'New booking request — 4K Productions', (data) => (
    `Name: ${data.get('name')}\n` +
    `Email: ${data.get('email')}\n` +
    `Phone: ${data.get('phone') || '—'}\n` +
    `Date: ${data.get('date')}\n` +
    `Time: ${data.get('time')}\n` +
    `Service: ${data.get('service')}\n\n` +
    `Extra information:\n${data.get('extra') || '—'}`
  ));
}
