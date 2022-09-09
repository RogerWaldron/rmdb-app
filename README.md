This is a [Next.js](https://nextjs.org/) project bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Movie Database

Idea return suggested movies based on users favorites

Support queries like:

### Actors

> Have Brad Pitt and Edward Norton ever been in a movie together?

`URL: /discover/movie?with_people=287,819&sort_by=vote_average.desc`

> What are the highest rated science fiction movies that Tom Cruise has been in?

`URL: /discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc`

### Directors

> Has David Fincher ever worked with Rooney Mara?

`URL: /discover/movie?with_people=108916,7467&sort_by=popularity.desc`

### Movies

> What are the most popular movies?

`URL: /discover/movie?sort_by=popularity.desc`

> What are the best dramas that were released this year?

`URL: /discover/movie?with_genres=18&primary_release_year=2022`

### Tech Stack:

- NextJS
- React
- React-query
- Tailwind CSS
- Typescript

### 3rd Party Apis

- [TMDB](https://www.themoviedb.org/)

Supported routes:
/search,
/discover,
/find

[API Documentation](https://www.themoviedb.org/documentation/api)
