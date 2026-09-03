CLEANLY — CLEANING SERVICE WEBSITE TEMPLATE

A modern, responsive website template designed for cleaning businesses.

Built with React 19, Vite, Tailwind CSS v4, React Router, and Lucide React.


PAGES INCLUDED

- Home
- Services
- Individual Service Pages
- Pricing
- About
- Reviews
- Contact / Quote Form
- Blog
- Individual Blog Posts
- 404 Page


REQUIREMENTS

- Node.js 20 or newer


GETTING STARTED

1. Unzip the Cleanly template.

2. Open a terminal inside the project folder.

3. Install the dependencies:

npm install

4. Start the development server:

npm run dev

5. Open the local address shown in your terminal.

Usually:

http://localhost:5173


BUILDING FOR PRODUCTION

When you are ready to publish the website, run:

npm run build

The production files will be created in the "dist" folder.

You can deploy the website using Netlify, Vercel, Cloudflare Pages, or another hosting provider that supports Vite/React.


CUSTOMIZING YOUR WEBSITE

BUSINESS INFORMATION

Open:

src/data/site.js

You can change:

- Business name
- Tagline
- Phone number
- Email address
- Business hours
- Address
- Social media links
- Formspree form ID


HOMEPAGE TEXT

Open:

src/data/homepage.js

This file controls the main homepage content, including:

- Hero heading
- Hero description
- Buttons
- Trust badges
- Satisfaction badge
- Services section
- Why Choose Us section
- Final call-to-action


SERVICES

Open:

src/data/services.js

You can edit the cleaning services offered by the business.

You can change service names, descriptions, prices, and service details.


PRICING

Open:

src/data/pricing.js

Use this file to customize the pricing plans displayed on the website.


REVIEWS

Open:

src/data/reviews.js

Replace the sample reviews with real customer reviews.


FAQS

Open:

src/data/faqs.js

Edit the frequently asked questions and answers.


REPLACING IMAGES

Website images are stored in:

public/images/


HERO IMAGE

The homepage hero image is:

public/images/hero.jpg

To replace it:

1. Add your new image to public/images/
2. Rename the new image to hero.jpg
3. Replace the existing hero.jpg

No code changes are required as long as the new image uses the same filename.


BEFORE & AFTER IMAGES

Open:

src/components/BeforeAfterGallery.jsx

The before-and-after gallery contains image paths that can be customized.

For example:

before: {
  label: 'Before',
  image: '/images/kitchen-before.jpg',
},

after: {
  label: 'After',
  image: '/images/kitchen-after.jpg',
},

Then place those images inside:

public/images/

If an image is set to null, the website will display an "Add photo" placeholder instead.


CONTACT / QUOTE FORM

The quote form uses Formspree to receive customer inquiries.

Each buyer should connect their own Formspree account.

To connect a Formspree form:

1. Create a Formspree account.
2. Create a new form.
3. Copy your Form ID.
4. Open:

src/data/site.js

5. Find:

formspreeId: 'YOUR_FORMSPREE_FORM_ID',

6. Replace it with your own Formspree ID.

The quote form will then send customer submissions to the email connected to the buyer's Formspree account.


COLORS & STYLING

The main colors and theme settings can be customized in:

src/index.css

Look for the @theme section.


NAVIGATION

To change navigation links, open:

src/components/Navbar.jsx


FOOTER

To customize the footer, open:

src/components/Footer.jsx

You can change:

- Business information
- Contact information
- Social media links
- Footer links


SOCIAL MEDIA

Social media links are managed through:

src/data/site.js

Update the Facebook and Instagram URLs with the business's actual social media profiles.


IMAGES AND COMMERCIAL USE

Replace demo images with images you have permission to use commercially.

If you use third-party images, check their current license and usage requirements before publishing the website.


SUPPORT

For template support, contact:

YOUR SUPPORT EMAIL HERE


LICENSE

This template is licensed for use by the purchaser according to the license terms provided with the purchase.

The template may be customized for personal or business use.

Redistributing, sharing, or reselling the original template files as a competing website template is not permitted.