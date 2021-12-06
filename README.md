# listing-app
The next frontier in real estate and mls listings!

A (simple) mobile first responsive, internationalized, accessible, api driven and caching app. 

Built as a create react app.

# operations
## install
```sh
yarn install && yarn start 
```

Open [http://localhost:3000/listings](http://localhost:3000/listings) to view the app

## tests
`yarn test`


# Code and Design Decisions

## state
State consists of: 
- listings retrieved from simplyrets api and cached in localStorage
- faves users clicking faves icon, caching and updating the listings model

I created a useListings hook to provide the data and also handle localSotrage caching of listings. There's only 1 page in this app so that's all that's needed at this time. I know more pages would be needed but I don't know what they are and what data they use. If listings data was needed in other future pages then I would change the approach and store the listings in a react context for the listings domain or depending on the scale of the app, performance and where data needs to be available I would start looking a state management library like redux or similar.

Uses https://api.simplyrets.com/properties to fetch mock listing data.

## accessability
- uses semantic markup e.g. `<h2>, <h3>, <address>, <small>, <ul>`
- images: "title" and "alt" text on images
- tabbing each card and fave icon 
- tab on to heart icon
- use of rems                                    

## responsiveness
- fluid layout using flexbox
- mobile first (heading text and margins)
- media queries, screen widths 375 to 1180 and between
    - 375 default
    - 760: h2/margins change to appprox mid
    - 1180: h2 change fs to 28px (all others same); change margins/padding to more

## testing
- uses react-testing-library and jest; mocked react-intl
- for e2e testing I'd use cypress.io (future)
- for static code checking I'd want typescript

## left to do
- "Listed" year as yy
- don't just update localStorage after fetch but instead check if data changed or is stale
- more tests e.g. mocking localStorage, useListings hook
- more abstractions
  - e.g. hook for localStorage
  - e.g. use of react context
  - e.g. consider react reducer for listing updates
- page loading and error states are super basic
- convert to use scss (or similar)
- convert to typescript

