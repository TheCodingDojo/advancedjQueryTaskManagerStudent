
$(document).on('click', '#addTask', function(){
  var task = $(this).siblings('input').val();
  $(this).siblings('input').val('');
  var taskHTML = taskBuilder(task);
  $('.output').append(taskHTML);
})

$(document).on('submit', 'form', function(){
  var isComplete = $(this).children('input:checked').val();
  if(isComplete == "true") {
    $(this).parent('div').css("background-color", "green");
  } else {
    $(this).parent('div').css("background-color", "red");
  }
  return false;
})

function taskBuilder(taskName) {
  let task = `
  <div class="task" style="border: 1px solid black;">
  <h2>${ taskName }</h2>
  <form>
    <label for="complete">Complete</label>
    <input type="radio" name="complete" id="complete" value="true">
    <label for="incomplete">InComplete</label>
    <input type="radio" name="complete" id="incomplete" value="false">
    <button>Update Task</button>
  </form>
</div>
  `
  return task;
}

