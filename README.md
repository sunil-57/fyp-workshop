# fyp-workshop [IN PROGRESS]

Code for Final Year Project(FYP) workshop at Informatics College Pokhara(ICP)

## Features

The repo will implement a mini-twitter. The first iteration will

- allow users to have a username and a password
- allow users to signup, signin, delete account
- allow users to change password
- allow users to create, read, update, delete 250 chars tweets
- allow users to have a profile with all of their past tweets
- allow users to follow other users, view who they are following and
who follows them
- allow users to have a feed on the homepage from all the users followed

## Goals

The goals of the repo is to be

- Simple
  - Do we need a database? Yes.
  - Do we need an ORM? May be not. Once you know working with databases,
  an ORM will help. Full-stack frameworks will often manage migrations for you too.
  They often also help generate fake data for testing.
  However, these are conveniences once you know what you are doing--not necessarily
  the best entry tools.
  - In essence, if there is a simpler solution available to achieve our goals,
  we prefer that.
- Complete
  - Do we need version control? Yes. Moreover, we use github issues to track
  project features and completeness.
  - Do we need tests? Yes.
  - Do we need to support every feature we set out to support? Yes.
  - Effectively, we intend to hit every criteria that an FYP is expected to
  use and implement.

## Installation and Usage

We provide a docker compose to tie together the database, the backend and the frontend.

While it is not currently implemented, we intend the following command
to get the project up and running:

```bash
docker compose up
```

## A Note to Maintainers

Please have a descriptive git commit as well as provide an overview of individual
component inside associated `README.md`. It is expected that the students will study
the code and the git history before attending the workshop.

## A Note on Security

Feel free to poke around as much as you would like. Anyone who finds and
reports a bug will be added to the repo's "Gratitude List" as a contributor.

Please note that availability is not one of the security goals for this repo.
Bugs that crash the server will not be considered relevant. Only bugs that
either leak or corrupt the database will be considered valid.

## A Note to Students

It is best to read this codebase in the following order:
Keep in mind that this repo also has a linear history so you can
follow the git history to see the progress for how the instructors setup and grew
the repo

- Homepage README
- `db/README` has an ERD, this is the entrypoint
- get the database up and running. Run sql files and play around a bit
- consider the endpoints you might need. You will need some familiarity with
[HTTP Protocol and its methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- `be/README` for the api designed for this application
- `be/db.py` for the code to interact with the database
- `be/app.py` for the web layer. You will need some familiarity with [JWT tokens](https://jwt.io). try running the application and interacting with it
via curl/postman/thunderclient and related tools.
