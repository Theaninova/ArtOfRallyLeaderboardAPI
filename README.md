# ArtOfRallyLeaderboardAPI
Documentation of the Art of Rally leaderboard API

# Get Leaderboard

```
https://www.funselektorfun.com/artofrally/leaderboard/
  [:leaderboard-string]/
  [:filter-id]/
  [:platform]/
  [:user-id]/
  [:friends]
```

Friends are formatted as `[:userid-1,:userid-2,...]` **including**
the square brackets.

# Get a leaderboard entry for a specific user
**You need to pass the *specific* platform for the user you want to get the
entry for.**

```
https://www.funselektorfun.com/artofrally/leaderboard/
  [:leaderboard-string]/
  1/
  [:platform]/
  [:user-id]
```

# Composing the leaderboard string

```
[area]_[stage]_[direction]_[weather]_[group]
```
