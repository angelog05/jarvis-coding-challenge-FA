# Jarvis Coding Challenge

This test is designed to measure the level of experience both syntax and different javascript APIs 

> **¡IMPORTANT!**
>
> This is a FullStack test, so It is not necessary to add design, colors, font, themes, etc 

## Evaluation Criteria
* [x] Proper implementation of React library capabilities
* [x] Proper implementation & documentation of an API endpoint
* [x] ECMAScript 6
* [x] Correct usage of git tools
* [x] Code Readable and Consistent (together with Best Practices)
* [x] Exception Handling
* [X] Unit Tests

## Recommendations
* You can import any library that could be helpful for your solution
* There is no IDE Restriction
* Design or Styles are not required. 

## Getting started

Once granted the access to this repo, You will be given **24h** to fork and send a pull-request with the improvements/solutions.

## Challenge

### Backend

> **Note!**
>
> Do this test in the `backend/` directory.
> In the case of the API's [Giphy](https://developers.giphy.com/docs/api) Key is not working, feel free to generate a new one. Even if the API is not working, feel free to select a different one with similar capabilities 

Currently in the folder `backend/` of this repository, you will find a boilerplate project with a 'Hello world' endpoint. 
The main idea is to improve this basic Backend, enabling a service that connects and retrieve the GIFs from the API [Giphy](https://developers.giphy.com/docs/api). 
[The GIPHY Search Endpoint](https://developers.giphy.com/docs/api/endpoint#search) gives you instant access to a library with millions of gifs by entering a word or phrase. 

| Method | Endpoint        | Description                                                                      |
|--------|-----------------|----------------------------------------------------------------------------------|
| GET    | /gifs           | Get a list of gifs, given a word. Such list of gifs can be paginated             |


### Frontend

> **Note!**
>
> Do this test in the `frontend/` directory.

In the folder `frontend/` of this repository, you will find a React project boilerplate with a basic application which renders a list of Gifs. 
Same as with the Backend, the idea of the frontend is to improve as much as possible the application, consuming the endpoint created in the backend and adding Pagination and a Search Input. 
 
| View | Description                                                                                                                                                                       |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| List  | Here you should list all gifs with pagination, limiting to 10 gifs by page and implementing a Text Search Input to be able to find Gifs by any word |                             

### Bonus Points
* [x] Redux

Good Luck 💪
====
Let us know any doubt! We will be happy with your answer
