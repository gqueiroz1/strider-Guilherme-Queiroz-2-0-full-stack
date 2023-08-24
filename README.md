# Guilherme Antônio Queiróz

## Posterr - Strider Full Stack Assessment 2.0

## Instructions

### Initialization

To initialize the project run `npm run dev` inside `client` folder
also run `npm run dev` inside `server` folder

### Database

This project uses production-ready MongoDB Atlas. So you won't have to worry about configuring anything in order to have the database running.

However, you can reset data by seeding `users` and `posts`.

Inside `/server` run `npm run users:seed` or `npm run posts:seed`

### How to test
#### Posts and reposts
- Users can post / repost 5 times a day

- Users can repost only original posts

You can change the user inside the store `/client/src/stores/users.js`.

Just change the `defaultUser` state to one of these users: `mikec091, adalovelace, johndoe`

## Critique

### Improvements
- Authentication
  - User register
  - Login
  - Forgot my password

- Email service
  - Forgot my password emails

- Post interactions
  - Likes and comments

- Real time chat
  - Using websockets we could build a very nice chat service
  - Also, for small projects, we could try Firebase Firestore (realtime)

- External buckets
  - Image storages
  - As small projects, this could use Firebase to store images on Firebase Cloud Storage
  - As big projects, there are more scalable services like AWS S3

- Tests
  - Implementation of unit tests on front and backend using Jest

### Scaling
#### If we had to scale the project, these are some of the changes we would have to do:
- Database service
  - Currently using free MongoDB service, if the app had to grow, this would be the first to fail.
  - Shared ram wouldn't handle the processing load.
  - Limited storage space

- Auth Security
  - For bigger projects, the need for security also increases.
  - I have worked on a product that implemented a Auth HUB, so every authentication logic goes inside one project
    
    This can be a very powerfull solution, making possible even integrations with 3rd party.
