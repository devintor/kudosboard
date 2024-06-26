## Unit Assignment: Kudos Board

Submitted by: **Devin Torres**

<!-- Deployed Application (optional): [Kudos Board Deployed Site](ADD_LINK_HERE) -->

### Application Features

#### CORE FEATURES

- [x] **Home Page**
  - [x] Displays header, banner, search, board grid, and footer.
  - [x] Displays preview of all boards on initial page load.
    - [x] Boards previews should show an image/gif and board title.
  - [x] Users can click on a category (recent, celebration, thank you, inspiration) to filter the boards.
    - [x] Recent displays most recently created boards.
    - [x] Other categories display boards of that type.
  - [x] Users can search for a board by name.
  - [x] Users can click on a board to navigate to a new page containing that board.
  - [x] Users can create a new board.
    - [x] Boards should have a title, category, and author (optional).
  - [x] User can delete boards.
  
- [x] **Board Page**
  - [x] Displays a list of all cards for a board.
    -  [x] Each card features a text message.
    -  [x] Each card features a gif found using the [GIPHY API](https://developers.giphy.com/docs/api/).
    -  [x] Users can optionally sign the card as the author.  
-   [x] Cards can be upvoted.
-   [x] Cards can be deleted.


#### STRETCH FEATURES


- [ ] **User Accounts**
  - [ ] Users should be able to log in with a username and password.
  - [ ] Users should be able to sign up for a new account.
  - [ ]  Boards and cards should be associated with a user.
    - [ ]  Anonymous cards or cards by guest users should still be allowed.
  - [ ] Add a new filter option on the home page to display only the current user's boards.
  - [ ] Allow boards to be deleted only if they are owned by the user.
- [x] **Deployment**
  - [x] Website is deployed via Render.
- [ ] **Comments**
  - [ ] Users should be able to comment on cards.


### Walkthrough Video

[https://drive.google.com/file/d/1BFwIXt26y9GoPW50W_c9_KmvH-DR9onJ/view?usp=sharing](url)

search bar functionality
[https://drive.google.com/file/d/1jekuHF7ECKRQ9NSjXwZoph-lg7EF2qu_/view?usp=sharing](url)

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

I felt unprepared to define all of the routes and CRUD functions.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
I would have tried to implement the user authentication, but it just seemed incredibly overwhelming as a feature that I did not look at until the last day.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I was very proud of my styling, which has been a general trend. I noticed that many of my peers opted to use the same styling of the provided sample site, so I was satisfied with the uniqueness of my site. One thing that I noticed and later implemented was that the Recent category was not meant to be filter but rather a simple sort. I was originally including it in the list of categories when creating a new board, but removed after noticing this in Emmanuel's project.

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

David and Cristobal were incredibly helpful in pointing me in the right direction when I approached with several miscellaneous bugs.
