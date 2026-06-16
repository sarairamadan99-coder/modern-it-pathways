const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
const CALENDLY_URL = 'https://calendly.com/sarairamadan/modern-it-pathways-intro-call';

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function setFormStatus(form, message, type) {
  const status = form.querySelector('[data-form-status]');
  if (!status) return;
  status.textContent = message;
  status.className = `form-status ${type}`;
}

function validateIntakeForm(form) {
  const fields = [
    form.querySelector('[name="name"]'),
    form.querySelector('[name="email"]'),
    form.querySelector('[name="support_type"]'),
    form.querySelector('[name="help_message"]')
  ];

  fields.forEach((field) => field?.setAttribute('aria-invalid', 'false'));

  const [name, email, supportType, helpMessage] = fields;
  if (!name.value.trim()) return name;
  if (!email.value.trim() || !isValidEmail(email.value.trim())) return email;
  if (!supportType.value) return supportType;
  if (!helpMessage.value.trim()) return helpMessage;
  return null;
}

document.querySelectorAll('[data-intake-form]').forEach((form) => {
  const submitButton = form.querySelector('button[type="submit"]');
  const defaultButtonText = submitButton?.textContent || 'Continue to Scheduling';

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const invalidField = validateIntakeForm(form);
    if (invalidField) {
      invalidField.setAttribute('aria-invalid', 'true');
      invalidField.focus();
      setFormStatus(form, 'Please complete the required fields before continuing.', 'error');
      return;
    }

    if (FORM_ENDPOINT.includes('YOUR_FORM_ID')) {
      setFormStatus(
        form,
        'This form needs a submission endpoint before it can send. Please try again later, or email me directly.',
        'error'
      );
      return;
    }

    const formData = new FormData(form);
    formData.append('source_page', window.location.href);
    formData.append('_subject', 'New Modern IT Pathways inquiry');

    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';
    setFormStatus(form, 'Submitting...', 'pending');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });

      if (!response.ok) throw new Error('Form submission failed');

      setFormStatus(form, 'Thanks -- taking you to scheduling...', 'success');
      window.location.assign(CALENDLY_URL);
    } catch (error) {
      submitButton.disabled = false;
      submitButton.textContent = defaultButtonText;
      setFormStatus(form, 'Something went wrong. Please try again, or email me directly.', 'error');
    }
  });
});
