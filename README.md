# Google Books Search

## About
In this web application, it was created using React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. This also uses Node, Express and MongoDB so that users can save books to review or purchase later.

## How this app was built
This application requires at minimum 2 pages:

- Search - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.


- Saved - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

1. Create the app with these commands below:

```bash
npx create-react-app app-name

cd app-name

npm start
```
It should automatically open your web browser to [http://localhost:3000/]( http://localhost:3000/) 

2. Add code to connect to a MongoDB database named googlebooks using the mongoose npm package.

3. Using mongoose, then create a Book schema.

4. From Google Books API, get these following fields
 - Title
 - Authors
 - Description
 - Image
 - Link

5. Creating documents in your books collection similar to the following:
```js
    {
      authors: ["Suzanne Collins"]
      description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
      title: "The Hunger Games"
    }
    ```

6. Add the following Express routes for your app:

* `/api/books` (get) - Should return all saved books as JSON.

* `/api/books` (post) - Will be used to save a new book to the database.

* `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.

## Deployed page!
[Google Book Search](https://react-google-books-tn.herokuapp.com/)

## Github:
[books-search](https://github.com/thuynguyen-nht/books-search)

### Visit me at:
[Github page](https://github.com/thuynguyen-nht)