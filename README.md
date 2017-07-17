# Djavan - Rhino Security Assessment and Reporting Tool

For project structure see [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md).

### Requirements

- NodeJS 8+
- NPM 5+

### Install and run the app

- Install deps with `npm install`
- Run development server with `npm run dev`
- Open http://localhost:6001 (port is specified via `PORT` env variable)


### Environment Variables

- `PORT=6001` port of a server which serves index.html for any paths.
- `WEBPACK_PORT=6002` port of webpack-dev-server.
- `API_URL=https://djavan-server-dev.rsl.host/api/v1/` API root endpoint

## Conventions

### Trello

We use [Trello](https://trello.com/b/ceoqc9LQ/djavan-front-end) as a task manager.

Anybody can assign a card to Anybody. Anybody can create cards.

- Created card can be assigned to nobody. At this case anybody can start doing the task.
- Created card can be self-assigned.
- Created card can be assigned to another team member. It makes sense when the assignee is the best candidate to do the task.

When you start doing a task, a card should be moved to "IN DEVELOPMENT" list. Make sure that the card is assigned to you. When the task is done, it should be moved to "IN TESTING" list.

Every work that is going to take more than 30 minutes should be followed by a Trello card. For example you want to make minor refactoring and you think it will take an hour, then create a card and assign it to yourself.

When a commit is made it should be connected to a corresponding Trello card (you don't need to do it if you make a change which doesn't belong to any card and the change is took less than 30 minutes). There should be one commit per one feature/fix/chore etc. and you can attach few commits to one Trello card (e. g. one card requires to make 2 features). This can be done via Trello UI: open a card -> Power-Ups -> Bitbucket.

When you write a comment to a card, don't forget to mention a person who should get a notification.


### Rules and guidelines for commit messages

#### TL;DR

1. Use git's file staging: `git add` rather than `git commit -a`.
1. Use `npm run commit` instead of `git commit`.

#### Details

This repository uses [semantic-release](https://github.com/semantic-release/semantic-release) for a clearer, more useful changelog, and for automatic [semantic versioning](http://semver.org).

This means commit messages must be in a special format with a structured summary line and a body. If you use `npm run commit`, you're prompted for everything. If you don't, the format's simple enough to get right manually -- and if you get it wrong, the commit fails anyway as a githook enforces the format.

How it works:

1. Make repository changes as usual.
1. Stage files for commit using `git add`.
1. Instead of `git commit`, use `npm run commit`.
1. Follow the instructions.

Commit messages are stored in git in this format:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
```

For example:

```
feat(services): Add foo field

This lets us show the foo.
```

For more info read about [AngularJS Commit Message Conventions](https://github.com/conventional-changelog/conventional-changelog-angular/blob/master/convention.md). We require to use `type` and `subject`; `scope` is desirable. Other commit text components are optional.
