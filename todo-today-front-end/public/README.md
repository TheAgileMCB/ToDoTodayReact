# ToDoToday
### A React front end to help you GET IT DONE.

## License
This application is licensed under an [MIT License](https://github.com/mcbarnhart/ToDoTodayReact/blob/master/LICENSE).

## Requirements
- [ ] Design your application with a header, main section, and a footer
- [ ] The overall styling is up to you
- [x] The header should present the application title
- The main section must have:
- [ ] A Form where the user can a new item to the todo list
### Items should have the following fields:
- [ ] To Do Item Text
- [ ] Assigned To
- [ ] Status (complete/incomplete)
- [ ] Difficulty (number between 1 and 5)
- [ ] The list of items in the to do list
- [ ] Each item in list should show the text of the item as well as the assignee
- [ ] When clicked, toggle the “complete” status of the item.
- [ ] Items should be styled differently when complete/incomplete making their status visually obvious
- [ ] Implementation Notes/Details
#### Create separate components for each visual part of the application
- [x] Header
- [x] Footer
- [x] To Do List
- [ ] Each function must be a function component (no classes!)
- [ ] Use a useEffect() hook to change the title of the browser with the complete/incomplete counts
### Optional
- [x] Separate the Form and List display elements into separate components within a wrapper component
- [ ] Use the wrapper to hold the state and methods

## API
This application is designed to partner with my [ToDoToday .NET API](https://github.com/mcbarnhart/ToDoTodayAPI).