let toDoContainer = $("#container")
let taskList = $('#pending-list')
let completedList = $('#completed-list')
let input = $("#input")
let btnAdd = $("#addItem")


btnAdd.click(function(){
    
    let inputItem = input.val()
    let singleTask = $('<li>').html(inputItem)
    let checkbox = $("<input>").attr("type", "checkbox")

    

    checkbox.change(function(){
        // completedList.parent().append($(this).parent());
        //$(this).parent().prependTo(completedList)

       if($(this).is(":checked")) {
           // add to completed list 
            let li = $(this).parent()
            completedList.append(li)

       } else {
           // add to pending list
            let li = $(this).parent()
            taskList.append(li)
       }

        // let li = $(this).parent()
        // completedList.append(li)

    

        
        
        

        console.log("checked!")
        
    })

    
    console.log(inputItem)
    console.log("click")
    
    input.val("") //clears input


    let deleteButton = $("<button>Remove</button>")
    

    deleteButton.click(function(){
        $(this).parent().remove()
    })

    singleTask.prepend(checkbox)
    
    singleTask.append(deleteButton)

    taskList.append(singleTask)

    })

    $( function() {
        $(".sortable" ).sortable();
        $(".sortable" ).disableSelection();

    })

    