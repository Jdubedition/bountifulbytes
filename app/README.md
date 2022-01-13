# app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Components and Setup
* Frameworks/Structure
  * Vue
    * Plugin: typescript
    * Plugin: vuetify
    * Theme: blog-free (https://store.vuetifyjs.com/products/blog-theme-free)
* Favicon.ico - Creacted using https://favicon.io/favicon-generator/ and Kubernetes style
  * Font: Ubuntu
  * Color: #326ce5
* Images
  * https://pixabay.com/
  * https://unsplash.com/
  * https://www.pexels.com/
* Code blocks in articles
  * raw-loader to enable Typescript to read markdown files
  * Marked - Markdown renderer
  * PrismJS - Syntax highlighter used for code blocks in articles that are produced by markdown renderer, marked.
* Cloudflare email routing to send email to/from justin@bountifulbytes.com and Gmail account
  * Enter email module in Cloudflare and create custom address
  * Add email DNS records to Cloudflare per the instructions on the module page
  * Using Gmail SMTP server to reply to email with justin@bountifulbytes.com
    * https://myaccount.google.com/apppasswords
    * Select "Mail" under the drop-down for "Select app"
    * Select "Other" under the drop-down for "Select device"
    * When prompted for text input, enter justin@bountifulbytes.com
    * Copy the password
    * Go to Gmail and under Settings  Accounts and Import  Send mail as, click "Add another email address"
    * Enter the name and enter the email address with the custom domain used above
    * Uncheck "Treat as an alias"
    * Click next
    * When prompted for "SMTP Server", enter smtp.gmail.com and leave the port as 587
    * Username will be the Gmail email address without the @gmail.com portion
    * Enter the password captured above
    * Gmail will send a verification email to justin@bountifulbytes.com to make sure that I own it, either click on the link or enter the confirmation code
    * Now I can send email from justin@bountifulbytes.com, but the recipient will see that it is from gmail.com
