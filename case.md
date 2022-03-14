## Main Criterias

- [x] The project must be developed as a spa which must be done with React JS.
- [x] Server side renderings are must be handled via Next JS.
- [ ] You must use Apollo Client hooks when sending a query or mutation.
- [ ] All query responses must be cached both apolloClient context and localStorage.
- [ ] You must use Context API as state management.
- [x] You must use a css pre-processor like "sass" or "less" or any other css pre-processors.
- [x] You must build case in a responsive layout. You can prefer to use Bootstrap kind CSS layouts. Or you can use directly @media queries.
- [x] You can add your own design. You do not have to do it as it seems.
- [x] Every component needs to be a functional component which must be maximum 300 lines.
- [x] You must use react hooks.
- [ ] Every function which you type need a "what is it for" description to understand it.
- [x] You must use ES& features (like Arrow functions, object destructuring, template literals etc.).
- [ ] There must be only 1 main menu component for both desktop and mobile views.
- [x] Design can be different from draft

## Delivering Criterias

You will have got 7 days to finish it. If you got any trouble or any other problems please contact with us.
Project must be serve in private Github repository.
After delivering the project we'll be doing a pair programming to inspect your code.

## Scenario

When i open the page it needs to show listing page which includes all tournaments at the beginning. In this case "tournaments query" must be handled in server side rendering. If i refresh the page all the items votes which coming from database needs to be resetted.

### Menu & Header

- [x] Header must include Community Gaming's logo on left side and menu on right side.
- [x] Menu must includes "Tournaments Listing", "Add New", "Sign In" items. (Sign-in will be non-functional it's gonna be just showing)

### State

- [ ] You need to send a request to get 6 tournaments tournaments from database for saving them to localStorage as an initial state. When that request happened after rendering there must be a "loading" information in interface. if there are anyother tournaments which already added before by user; these needs to be also exist in localStorage in same initial state. All tournaments votes must be zero if they are coming from database directly. When i soft refresh the page; it needs to be take values from "apollo cache". otherwise it can send request again.

### Tournament Cards

- [ ] Cars will have point amount, cover image, tournament name, owner name, deadline and last vote date which is a meaningful time format.
- [ ] Every tournament card will have 4 buttons:
  - [ ] **Up vote**: When user clicks on it tournaments point must be increased 1 point.
  - [ ] **Down vote**: When user clicks on it tournaments point must be decreased 1 point.
  - [ ] **Delete**: This button will be shown when card is hovered. When user clicks on it there must be a confirmation modal shown which it's title must include clicked item's tournament name which is saying "are you sure about to delete this tournament". This modal will have "**Cancel**" and "**Delete**" buttons.
  - [ ] **Update**: When user clicks on it there must be a modal shown which includes clicked item's informations to edit it. This modal will have "**Cancel**" and "**Save**" buttons.
- [ ] Every action without voting must give a feedback to users with like toast messages or alerts. Like "Tournament deleted successfully".

### Sorting Cards

- [ ] Tournament's must be sorted from of dropdown button or select box which includes "**order by most voted**" and "**order by less voted**" options.
- [ ] Default sorting of cards must be vote count by "**most voted**" points.
- [ ] If there are any cards got same points; sorting needs to be done via "**Last Voting Date**". The newest voted must be shown in first order.

### Pagination

- [ ] There must be a pagionation which includes 6 items per page.

### Adding a tournament

- [ ] I can be able to add a new tournament via clicking "**Add New Tournament**" button which redirect user a page which must include "coverImage, name, alias, owner id _(this field must be disabled)_, owner username, owner avatar, deadline ( you can use a datepicker for it or users can directly type date in it ), prize" form fields in it. All the fiels which written are mandotary except owner id information. It needs to be random UUID. There must be a validation before save the tournament. This tournament needs to be saved on "localStorage". After adding a tournament it needs to redirect me to listing page. After adding a tournament, you need to refetch the "query" which you already send in server side.

### Mobile view

- [ ] In mobile every card must be shown as a row.
- [ ] every card and it's content needs to fit on screen.
- [ ] Images must be responsive
- [ ] Menu must be shown in bottom as like in mobile applications. (You can take a referance from communitygaming.io)

### View Breakpoints

- [x] 1200px, 901px, 768px will be breakpoints of view.

### Queries which you need to use
**graphql endpoint**
https://web.dev.daory.net/graphql

**get tournaments query**
query getAllTournaments($count: Int!, $offset: Int!){
listedTournaments(count: $count, offset: $offset) {
id
name
deadline
waitlistParticipantsCount
owner {
id
username
avatar
}
}
}
