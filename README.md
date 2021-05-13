## UMTSoftware
http://lesanalexandru.site/projects/UMTSoftware/ -> Demo

A one page project that presents the requirements of an algorithmic problem and demonstrates its functionality.

### Project specifications
- Functionality was implemented using vanilla javascript
- Responsive UI created using css and bootstrap
- Floating input 
- Execution button (also can run the program by pressing the Enter key)
- Buttons with css property "pointer-events: none;" and specific color were used to display the result

### Execution steps
- Read the string from the input
- Remove brackets (if exists)
- Remove the last comma and any whitespace after it (if exists)
- Split the string and transform each element to a number
- Display the final array in the input
- The array is transmitted as a parameter to the function responsible for solving the problem
- The returned result is displayed on UI

### Description
&nbsp;&nbsp;&nbsp;Users can enter a string of numbers with or without array-specific square brackets or it can be just one parenthesis. If the string ends with a comma, the program deletes it. After converting the string to an array with numbers, it is displayed in the input so that the user can see what it looks like if he accidentally entered a letter, or 2 consecutive commas and the program considered that there is a 0 between them...<br/>
&nbsp;&nbsp;&nbsp;Also, the function doesn't run if no character is entered in the input, to prevent the creation of a null array.<br/> 
&nbsp;&nbsp;&nbsp;To display the result, are used 3 different buttons(default, true, false) and they are displayed or hidden using the "d-none" bootstrap class that handles the "display: none;" css property. 

