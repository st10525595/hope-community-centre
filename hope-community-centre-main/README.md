# Hope Community Centre - Website Project

A community website for Hope Community Centre in Mbombela, Mpumalanga.
Helping families with food support, after-school programmes and skills training.

**Live Site:** [Paste your Netlify / GitHub Pages link here]
**GitHub Repo:** [Paste your GitHub repo link here]

---

## Part 1 - Proposal

**Project Goal:** Build a simple, mobile-friendly website to help Hope Community Centre get more volunteers, sponsors and community members.

**Target Audience:** Families in Mbombela, youth 16-25, local businesses, volunteers and sponsors.

**Key Features Planned:**
- Home, About, Programs, Get Involved, Enquiry and Contact pages
- Volunteer and sponsor enquiry forms
- Mobile responsive design
- Contact via email

**Budget:** R0 - Built with free tools (HTML, CSS, JavaScript, GitHub, Netlify)
**Timeline:** Part 1 Proposal -> Part 2 Website Structure -> Part 3 Forms & Validation

---

## Part 2 - Website Structure

**Pages Built:**
- `index.html` - Home
- `about.html` - About Us
- `programs.html` - Programs (After-School, Food Parcels, Skills Training)
- `get-involved.html` - Volunteer / Sponsor
- `enquiry.html` - Enquiry Form
- `contact.html` - Contact Form

**Features:**
- Responsive navigation with ☰ hamburger button on phone size
- `style.css` for consistent colours and layout on all pages
- SEO: Every page has its own `<title>` and `<meta name="description">`
- Works on laptop + phone

---

## Part 3 - Form Functionality & Validation

### What Was Added
- **enquiry.html:** Form for Volunteer / Sponsor / After-School / Food Parcel / Skills Training. After submit, shows cost / availability response (e.g. Sponsor 1 family = R350/month, Volunteering = FREE Saturdays 09:00-13:00).
- **contact.html:** Form for general messages. Compiles name, email, phone, message type and message into an email to `info@hopecommunitycentre.org.za`.

### Validation
- HTML5: `required`, `type="email"`, `pattern`, `minlength`, `maxlength`
- JavaScript: Checks name (min 3 chars), phone (must be 10 digits), message (min 10 chars), date (cannot be in past)

### Error Handling
- Errors show in RED on the page next to the field, not just alert()
- Example: "❌ Phone must be 10 digits e.g. 0821234567"

### AJAX Submission
- Forms submit with `fetch()` - NO page reload
- Shows "Sending..." then "✅ Thank you..." on same page
- Form resets after success

---

## Changelog

### Added (Part 3 - New)
- Added enquiry.html and contact.html with full validation
- Added error handling - red errors on page
- Added AJAX submission with fetch()

### Changed / Fixed (Feedback from Part 2)
- Fixed navigation links on all pages
- Fixed mobile layout - forms now responsive on phone
- Improved style.css so enquiry and contact match other pages

### 2026-11-02 - Part 3 Submission
- All forms tested and working

---

## How To Test
1. Leave fields empty and submit - see red error messages
2. Enter wrong email / wrong phone - see error
3. Fill correctly - see "Sending..." then "✅ Thank you..." without reload

## References
1. W3Schools. HTML Forms. https://www.w3schools.com/html/html_forms.asp
2. MDN Web Docs. Client-Side Form Validation. https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
3. MDN Web Docs. Fetch API / AJAX. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
4. Hope Community Centre. Internal program info, 2024.