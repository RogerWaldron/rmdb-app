## Movie Database

### WHAT

This application allow users to favorite their favorite actors and directors. It then displays a list of movies in which their favorites have worked together.

### Tech Stack:

- NextJS
- React
- React-query
- Tailwind CSS
- Typescript

This is a [Next.js](https://nextjs.org/) project bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Example queries to API

> Have Brad Pitt and Edward Norton ever been in a movie together?

`URL: /discover/movie?with_people=287,819&sort_by=vote_average.desc`

> Has David Fincher ever worked with Rooney Mara?

`URL: /discover/movie?with_people=108916,7467&sort_by=popularity.desc`

> What are the most popular movies?

`URL: /discover/movie?sort_by=popularity.desc`

### API Used

- [TMDB](https://www.themoviedb.org/)

API supports routes:
/search,
/discover,
/find

[API Documentation](https://www.themoviedb.org/documentation/api)
