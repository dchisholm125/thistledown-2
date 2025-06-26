# Thistledown Recovery Home

## Technology Stack

 - Nuxt 3
 - Vue 3 Composition API
 - GitHub repo
 - Netlify (CI/CD)
 - Netlify Functions (serverless endpoints)
 - Nodemailer (SMTP through Gmail)
 - Twilio (SMS text messages)

### Nuxt 3

Nuxt is a meta-framework built on top of Vue 3 and is heavily "opinionated" on folder structure. Nuxt makes the process of building out a router MUCH simpler by favoring any Vue components in the `/pages` folder as servable URL's. Beyond this, Nuxt can also change it's rendering to server-side, client-side, or a hybrid to increase performance.

### Vue 3 (Composition API)

Vue 3 allows developers to component-ize reusable components throughout a webpage. The Composition API further allwos you to struvcture your components into "single file components" which bring together the HTML, CSS, and JavaScript specific to your component's needs. You can import global variables, other components, and anything else necessary to that component as you would with typical web development, but in a much simpler syntax and organization.

### GitHub Repo

GitHub is a place to store all necessary files either publicly or privately. This project is public, and can be found at [Thistledown's GitHub Repo Page](https://github.com/dchisholm125/thistledown-2/)

### Netlify (CI/CD)

Netlify is the "glue" between the files stored at [Thistledown's GitHub Repo Page](https://github.com/dchisholm125/thistledown-2/) and hosting the page publicly over the internet at [https://www.thistledownrecoveryhome.com/](https://www.thistledownrecoveryhome.com/). Netlify is automated, and everytime it detects a change to the GitHub Repo, it will begin a new "build and deploy" pipeline. When completed successfully, the page is automatically published without issues.

### Netlify Functions (serverless endpoints)

This is the "magic" that send the emails and text messages. Putting typical API endpoints in a very specific folder in your project (`netlify/functions`) enables the feature. It acts as a server, but it called a "serverless" server. This feature is billable, so it may go away as it brings expense into the mix --- the whole goal of this project was to be as open source and expense-free as possible.