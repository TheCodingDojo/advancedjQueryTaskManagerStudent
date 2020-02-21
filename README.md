## Task Manager

For this assignment we will use the follow jQuery concepts:

  * $(this)
  * Traversing html
    * .siblings()
    * .children()
    * .parent()
  * $(document).on()

Using the starter code, create the following:
 - [ ] jQuery click event on the Add Task button that appends the given HTML to the `.output` div
 ```html
  <button id="addTask">Add Task</button>
 ```
 - [ ] jQuery .on() method that handles the unique form submission
 ```html
    <form>
      <p>
        <input type="radio" name="complete" id="complete" value="true">
        <label for="complete">Complete</label>
      </p>
      <p>
        <input type="radio" name="complete" id="incomplete" value=false>
        <label for="incomplete">Incomplete</label>
      </p>
      <button>Update Task</button>
    </form>
 ```
 - [ ] Change the background color of the div
   - [ ] If complete: background color green
   - [ ] If incomplete: background color red
