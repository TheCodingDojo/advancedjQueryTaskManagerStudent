
$(document).on('click', '#addTask', function(){
  var task = $(this).parent().parent().siblings('div').children('div').children('input').val();
  $(this).parent().parent().siblings('div').children('div').children('input').val('');
  var taskHTML = taskBuilder(task);
  $('.card-columns').append(taskHTML);
})

$(document).on('submit', 'form', function(){
  var isComplete = $(this).children('div').children('input:checked').val();
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
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">${ taskName }</h2>
      <form>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="complete" id="complete" value="true">
          <label class="form-check-label" for="complete">Complete</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="complete" id="incomplete" value=false>
          <label class="form-check-label" for="incomplete">Incomplete</label>
        </div>
        <button class="btn btn-primary">Update Task</button>
      </form>
    </div>
  </div>
  `;
  return task;
}

