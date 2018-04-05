# YayOrNay REST API Documentation

## User API

### Create

- description: verify facebook token and return jwt token
- request: `POST /api/auth/facebook`
    - content-type: `application/json`
    - body: object
      - access_token: (string) the facebook access tokens
- response: 200
    - content-type: `application/json`
    - body: object
      - token: (string) the JWT token
- response: 401
    - Unauthorized
- response: 500
    - Internal server error

``` 
$ curl -X POST -H "Content-Type: application/json" -D '{"access_token": "someRandomTokenGivenByFacebook"}' https://teamabsolutely.herokuapp.com/api/auth/facebook
```

### Read
- description: get all the votes for the current user
- request: `GET /api/user/getAllUserVotes`
    - Authorization: `JWTToken`
- response: 200
    - body: list of objects
        - itemId: (string) the id of the item the vote was casted for
        - voteYAY: (bool) flag for if the vote was yay or nay
- response: 401
    - Unauthorized
- response: 500
    - Internal server error

```
$ curl -H "Authorization: JWTToken" https://teamabsolutely.herokuapp.com/api/user/getAllUserVotes
```


## Item API

### Create

- description: create a new item
- request: `POST /api/items/create`
    - content-type: `application/json`
    - Authorization: `JWTToken`
    - body: object
      - name: (string) the name of the item
      - src: (string) the image url
- response: 200
    - content-type: `application/json`
    - body: item (see schema below)
- response: 401
    - Unauthorized
- response: 500
    - server error, item rejected

``` 
$ curl -X POST -H "Content-Type: application/json" -H "Authorization: JWTToken" -d '{"name": "Some name", "src": "http://coolimage.com/coolest"}' https://teamabsolutely.herokuapp.com/api/items/create
```

### Read

- description: get all the items
- request: `GET /api/items/getAll`
- response: 200
    - content-type: `application/json`
    - body: list of items (see schema below)
- response: 500
    - server error

``` 
$ curl https://teamabsolutely.herokuapp.com/api/items/getAll
```

### Read

- description: get top ten trending items
- request: `GET /api/items/getTrending`
- response: 200
    - content-type: `application/json`
    - body: list of items (see schema below)
- response: 500
    - server error

``` 
$ curl https://teamabsolutely.herokuapp.com/api/items/getTrending
```

### Read

- description: get items that match the query
- request: `GET /api/items/search/:query`
- response: 200
    - content-type: `application/json`
    - body: list of items (see schema below)
- reponse: 500
    - server error

```
$ curl https://teamabsolutely.herokuapp.com/api/items/search/superhero
```

### Update

- description: get items that match the query
- request: `POST /api/items/rateItem`
    - content-type: `application/json`
    - Authorization: `JWTToken`
    - body: object
        - itemId: (string) the items id to cast the vote on
        - voteYAY: (bool) whether the vote is yay or nay
- response: 200
    - content-type: `application/json`
    - body: updated item (see schema below)
- response: 401
    - Unauthorized
- reponse: 500
    - server error

```
$ curl -X POST -H "Content-Type: application/json" -H "Authorization: JWTToken" -d '{"itemId": "items id", "voteYAY": "True"}' https://teamabsolutely.herokuapp.com/api/items/rateItem
```

# Schemas

## User
- _id: (ObjectId) the id of the user
- facebook: (object) container for data colected from facebook
    - id: (string) facebook user id
    - token: (string) facebook access token
    - email: (string) user's emal
    - name: (string) user's name
    - gender: (string) user's gender
    - location: (object) container for location details
        - city: (string) user's city
        - country: (string) user's country
        - state: (string) user's province or state
        - continent: (string) user's continent
    - ageRange: (object) container for age details
        - min: (number) the min age for the user
        - max: (number) the max age for the user
    - votes: (list of objects) containers for vote details
        - itemId: (ObjectId) id of the item the vote was cast for
        - voteYAY: (bool) flag for if the vote was yay or nay


## Item
- _id: (ObjectId) the id of the item
- name: (string) the name of the item
- src: (string) the image url
- user: (string) the id of user that submitted
- dateSubmitted: (date) the date the item was submitted
- countYAY: (number) the total amount of yays for the item
- countNAY: (number) the total amount of nays for the item
- tags: (string) comma seperated list of tags
- counterGender: (object) container for number of votes based on gender
    - male: (object) container for yays and nays of males
        - yay: (number) the number of yays
        - nay: (number) the number of nays
    - female: (object) container for yays and nays of females
        - yay: (number) the number of yays
        - nay: (number) the number of nays
    - other: (object) container for yays and nays of peoplewho don't identify either male or female
        - yay: (number) the number of yays
        - nay: (number) the number of nays
- countAge: (object) container for the number of votes based on age
    - child: (object) container for yays and nays of children (age <= 12)
        - yay: (number) the number of yays
        - nay: (number) the number of nays
    - teen: (object) container for yays and nays of teenagers (age <= 18)
        - yay: (number) the number of yays
        - nay: (number) the number of nays
    - youngAdult: (object) container for yays and nays of young adults (age <= 26)
        - yay: (number) the number of yays
        - nay: (number) the number of nays
    - adult: (object) container for yays and nays of adults (age <= 40)
        - yay: (number) the number of yays
        - nay: (number) the number of nays
    - middleAgedAdult: (object) container for yays and nays of middle aged adults (age <= 65)
        - yay: (number) the number of yays
        - nay: (number) the number of nays
    - senior: (object) container for yays and nays of seniors (age > 65)
        - yay: (number) the number of yays
        - nay: (number) the number of nays
- countContinent: (object) container for numbers of votes based on continent
    - NA: (object) container for the yays and nays of north americans
        - yay: (number) the number of yays
        - nay: (number) the number of nays
    - SA: (object) container for the yays and nays of south americans
        - yay: (number) the number of yays
        - nay: (number) the number of nays
    - EU: (object) container for the yays and nays of europeans
        - yay: (number) the number of yays
        - nay: (number) the number of nays
    - AS: (object) container for the yays and nays of asians
        - yay: (number) the number of yays
        - nay: (number) the number of nays
    - AF: (object) container for the yays and nays of africans
        - yay: (number) the number of yays
        - nay: (number) the number of nays
    - OC: (object) container for the yays and nays of people from oceania
        - yay: (number) the number of yays
        - nay: (number) the number of nays