# Rubbery Ducky App

Rubbery Ducky is a platform where you can read, publish and comment completely anonymously. It is a blog aimed at allowing people to express problems, feelings, frustrations or just to have fun among us bootcampers. It also has an extra function that has the sole purpose of giving you feedback based on your mood, laughter is never enough!

## The problem
The Bootcamp is running fast, and the rhythms are challenging. There may be moments of discouragement; some may feel difficult to share how they think, ask someone for help or even appear on social media.

## The insight
create an app where boot campers can find all the support they require, be free to express themselves, and sustain others by posting and commenting anonymously.

## Authors

- Federica Costantino - [@ricacostt](https://github.com/ricacostt)
- Mike Charalambides - [@MikeChara](https://github.com/MikeChara)
- Chris Sanger - [@C0dingChris](https://github.com/C0dingChris)
- Nicholas Pervez - [@nicholaspervez](https://github.com/nicholaspervez)

## Tech Stack

**Tools:** Trello, Figma, Excalidraw. 

**Languages:** HTML 5, CSS3, JavaScript. 

**Client:** React. 

**Server:** Node,js, Express.js, Pg, Nodemon, Dotenv. 

**Testing:** Postman, Jest, Supertest, Cypress


## Run Locally
Clone both backend and frontend in two separate directories
```bash
backend: git clone https://github.com/SchoolOfCode/bc13_w9_project-backend-team-granchio.git
frontend: git clone https://github.com/SchoolOfCode/bc13_w9_project-frontend-team-granchio.git
```

Add your personal .env file to include the sensible information.


Install dependencies in both repos

```bash
  npm install
```

Start the server in both repos. Make sure you run the backend first (it will run on port 3000) and after the frontend (it will run in a different port)

```bash
  npm start
```

### Run tests 
backend:
```bash
  npm test
```
frontend: 
```bash
  npx run cypress:open
```

# The app

![Schermata 2022-11-24 alle 22 13 09](https://user-images.githubusercontent.com/111753918/203869462-d1a98a39-0051-42ed-bf82-bd627ce30851.png)

### Granchio HomePage
There are mainly two options:
- Anon Duck: Anon Forum to read, add and comment
- Angry Duck: submit your mood and receive a feedback from a ducky robot

![Schermata 2022-11-24 alle 22 18 59](https://user-images.githubusercontent.com/111753918/203869775-061e08da-8677-4798-819f-52f3d9df19de.png)

This is one of the component created: create a new Post.
Just write a title and a content and press the Submit Post!

To write a post no matter where you are on the page click on the Submit Button on the right bottom corner, it will bring you up to the page!

To go back to the HomePage click on the Crabby Ducky at the top!

Thank you!
