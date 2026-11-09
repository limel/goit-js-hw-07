# JavaScript Homework 7

A set of five small exercises covering DOM selection, rendering, events, and
form handling with vanilla JavaScript.

## Exercises

1. **Categories** (`task-1.html`) — counts the categories and the items in each
   category, then prints the results to the browser console.
2. **Image gallery** (`task-2.html`) — builds a gallery from an array of image
   URLs and alternative text.
3. **Name input** (`task-3.html`) — updates a greeting as the user types. If the
   input is empty, the greeting displays “Anonymous”.
4. **Login form** (`task-4.html`) — checks that the email and password fields
   are filled in, logs the submitted values to the console, and resets the form.
5. **Color switcher** (`task-5.html`) — changes the page background to a random
   color and displays its hex value.

## Run locally

The project has no package manager dependencies or build step. Serve the project
directory with a local static web server, then open the provided URL in a
browser and select an exercise from the home page. Serving the files over HTTP
is recommended because the exercises use JavaScript modules.

The gallery loads its images from external URLs, so an internet connection is
needed to display them.

## Project structure

```text
.
├── index.html
├── task-1.html
├── task-2.html
├── task-3.html
├── task-4.html
├── task-5.html
├── css/
│   └── common.css
└── js/
    ├── task-1.js
    ├── task-2.js
    ├── task-3.js
    ├── task-4.js
    └── task-5.js
```

Each task page links to its corresponding JavaScript module and includes a link
back to `index.html`.
