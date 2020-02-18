
$(document).on('click', '#addTask', function(){
  var task = $(this).parent().siblings('p').children('input').val();
  $(this).parent().siblings('p').children('input').val('');
  var taskHTML = taskBuilder(task);
  $('.card-columns').append(taskHTML);
})

$(document).on('submit', 'form', function(){
  var isComplete = $(this).children('p').children('input:checked').val();
  console.log(isComplete);
  if(isComplete == "true") {
    $(this).parent('div').css("background-color", "green");
  } else {
    $(this).parent('div').css("background-color", "red");
  }
  return false;
})

function taskBuilder(taskName) {
  let task = `
    <div>
      <h2>${ taskName }</h2>
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
    </div>
  `;
  return task;
}

