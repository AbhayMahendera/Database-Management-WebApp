# Assignment Rubric: Cleanup, Refactoring & Adding REST Endpoints to your Application

## General Information

- **Assignment Title:** Cleanup, Refactoring & Adding REST Endpoints to your Application
- **Submission Method:** Git Repository on the **main branch**

---

## Functional Requirements (70 points)

| Requirement                                                 | Points |     |
| ----------------------------------------------------------- | ------ | --- |
| Github                                                      |        |     |
| - code is on the main branch                                | 5      | 5   |
| - node_modules is not in the repository                     | 5      | 5   |
| Routes                                                      |        |     |
| - api CRUD endpoints added for users                        | 10     | 7   |
| - api CRUD endpoints added for products                     | 10     | 7   |
| - api login endpount added                                  | 10     | 7   |
| - routes are refactored router modules                      | 15     | 15  |
| Data                                                        |        |     |
| - user data is moved under data folder                      | 5      | 0   |
| - product data is moved under data folder                   | 5      | 0   |
| Service Classes                                             |        |     |
| - create a User Service for CRUD operations                 | 10     | 10  |
| - create a Product Service for CRUD operations              | 10     | 10  |
| - create an AuthenticationService for simple authentication | 15     | 15  |

## Total Score: 84 / 100

### Comments:

Hi Abhay - the code looks excellent but you fell short on a couple of things. Small one was not moving data under the data folder. Not a big issue but that was the spec. More importantly:

1. Missing package.json - I had to install the dependencie manually to run.
2. You did remove node_modules buyt there is no .gitignore file
3. The api routes are required in app.js but you don't attach them to the app so the endpoints don'work.
