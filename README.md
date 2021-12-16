# Ski-client
- **Homepage** - Displaying Login and Signup buttons as well as company information.
- **Login** - As users, we want to log in so we can see the SkiResorts! 😎

- **Sign Up** Displaying email, password, name and image input -> Link to /login
- **Homepage** - Landing Page after Login with button to go to Ski Resort List
- **Ski Resort Page**- View and search for all slopes with add button Slope .
- **Create Slope Page** - Form to create a new slope
- **Edit Slope Page** - Page which allow to edit  a specific slope with an integrated Delete button .
- **Profile Pege** - Page which allow to edit  the user's profile.
- **Log Out** - As users, we want to close our session once we finished navigating through this amazing page so no one can get back to our account. 👋
- **404** - As users, we want to be politely warned that this page does not exist and it was our fault to search for it. ⚠️
- **500** - As users, we want to be politely warned that the amazing team behind the project screwd it up and it's not our fault. 💔


## Server Routes (back-end)

| **Method** | **Route**            | **Description**                                    | **Request - Body** |
| ---------- | -------------------- | -------------------------------------------------- | ------------------ |
| `GET`      | `/`                  | Main page route.                                   |                    |
| `POST`     | `/auth/login`        | Renders `login` page.                              |                    |
| `POST`     | `/auth/signup`       | Renders `signup-form` page.                        |                    |
| `GET`      | `/auth/verify`       | Verifies token stored.                             |                    |
| `GET`      | `/api/users/current` | Gets current user info.                            |                    |
| `PUT`      | `/api/users/current` | Update the current user.                           |                    |
| `GET`      | `/`                  | .                                                  |                    |
| `POST`     | `/dashboard/admin`   | Sends form data to the server on `dashboard-admin` |                    |
| `GET`      | `/logout`            | Delete the session from the sessions collection.   |                    |

## Client Routes (front-end)

| **Method** | **Route**               | **Description**            | **Request - Body** |
| ---------- | ----------------------- | -------------------------- | ------------------ |
| `GET`      | `/`                     | Shows homepage.            |                    |
| `POST`     | `/signup`               | Renders `signup` page.     |                    |
| `POST`     | `/login`                | Renders `login` page.      |                    |
| `GET`      | `/slopes`               | Shows all Ski slopes.      |                    |
| `GET`      | `/slopes/add`           | Adds a Ski slope.          |                    |
| `PUT`      | `/profile`              | Update the user's profile. |                    |
| `GET`      | `/slope/detail/slopeId` | Shows specific slope       |                    |
| `GET`      | `/slope/edit/slopeId`   | Edit a specific slope      |                    |



## Models

User model

```
{
	"name": String,
	"Email": String
	"Password": String
	"Image": String
	"MySkiSlope": [{type:Schema.Types.ObjectId, ref: "Slope"}]
  }
```

Slope model

```
{
	"name": String,
	"Country":String,
	"Image": String
	"level": {
		type: String,
		enum: ["beginner", "intermediate", "Pro"],
	created: { type: Date, default: Date.now },
	comments: { type: String },
	rating: { type: Number },
	user: { type: Schema.Types.ObjectId, ref: "User" },
  }
```

## Backlog

- Create a public API with the db we made.

## Links

#### Git

https://github.com/Luisfdearaujo

https://snowhill.netlify.app/

#### Slides

https://www.canva.com/design/DAEusqiPIbU/XwWTs1Z6UBa7-RISnN9DNw/view?utm_content=DAEusqiPIbU&utm_campaign=designshare&utm_medium=link&utm_source=shareyourdesignpanel
