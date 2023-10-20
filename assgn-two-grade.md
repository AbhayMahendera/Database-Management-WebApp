# Assignment Rubric: Node.js and Express Web Application

## General Information

- **Student Name:**
- **Assignment Title:** Building a Node.js and Express Web Application
- **Submission Method:** Git Repository Link

---

## Functional Requirements (70 points)

| Requirement                                            | Points |     |
| ------------------------------------------------------ | ------ | --- |
| Authentication                                         |        |     |
| - Login page (un/password & sumbmit(POST))             | 5      | 5   |
| - Hanlde login with hard coded authentication          | 5      | 5   |
| - Successful login redirection (redirect to list page) | 5      | 5   |
| Paginated List or table View                           |        |     |
| - Display objects from JSON file                       | 10     | 10  |
| - Render objects is a list or table                    | 5      | 5   |
| - Change the list endpoint so it returns only 25 users | 5      | 5   |
| Detail Page                                            |        |     |
| - Implement detail pages                               | 10     | 10  |
| - Display additional info                              | 5      | 5   |
| Data Handling                                          |        |     |
| - Load data from JSON file                             | 5      | 5   |
| - Proper data formatting                               | 5      | 5   |
| Template and Navigation                                |        |     |
| - All endpoints should be wrapped in a template        | 5      | 5   |
| - There shoould be a common menu                       | 5      | 0   |

## Technical Implementation (20 points)

| Requirement                        | Points |     |
| ---------------------------------- | ------ | --- |
| Styling                            |        |     |
| - Styling with Bootstrap/Tailwind  | 5      | 5   |
| - Visual appeal and responsiveness | 5      | 5   |
| Code Quality                       |        |     |
| - Clean and organized code         | 5      | 5   |
| - Express best practices           | 5      | 5   |

## Documentation (10 points)

| Requirement                    | Points |     |
| ------------------------------ | ------ | --- |
| README                         |        |     |
| - README provided              | 5      | 5   |
| - Instructions for local setup | 5      | 5   |

---

## Total Score: 95 / 100

### Comments:

Nice work Abhay. Love the starfield!

Couple of things not wrong but could be done another way:

`res.sendFile(__dirname + "/public/index.html");`

`res.redirect("/");`

`const userData = JSON.parse(fs.readFileSync("fakeUsers.json"));`

`const userData = require("./fakeUsers.json");`
