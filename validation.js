var hiring = document.getElementById("Hiring");
var salary = document.getElementById("salaryEntry");
var question = document.getElementById("Question");
var questionText = document.getElementById("questionEntry");
var comment = document.getElementById("Comment");
var commentText = document.getElementById("commentEntry");
var nameField = document.getElementById("nameField");
var addressField = document.getElementById("addressField");
var cityField = document.getElementById("cityField");
var emailField = document.getElementById("emailField");
var postalField = document.getElementById("postalField");
var resume = document.getElementById("AboutBlock");
var form = document.getElementById("formBlock");

function focusResume()
{
    resume.focus();
}

function focusForm()
{
    form.focus();
}

// Checks whether the entry only contains whitespace, and reset the field if true
function formBlank(value, selection)
{
    var check = /^\s*$/.test(value);
    if (check) // If the field only contains blank spaces, field is reset to empty
    {
        if (selection == 1)
        {        
            nameField.value = "";
        }
        else if (selection == 2)
        {           
            addressField.value = "";
        }
        else if (selection == 3)
        {          
            cityField.value = "";
        }
    }    
}

function validEmail()
{ 
    var check = false;
    if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(emailField.value))
    {
        check = true;
    }
    else
    {
        emailField.value = "";
    }
    return check;
}

function validPost()
{
    var check = false;
    if(/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/.test(postalField.value))
    {
        check = true;
    }
    else
    {
        postalField.value = "";
    }
    return check;
}

// Checks status of Radio buttons to enable/disable required fields
function radioCheck()
{
    if(hiring.checked == true)
    {
        salary.hidden = false;
        salary.disabled = false;
        commentText.disabled = true;
        questionText.disabled = true;
    }
    else if(question.checked == true)
    {
        salary.hidden = true;
        salary.disabled = true;
        commentText.disabled = true;
        questionText.disabled = false;
    }
    else if(comment.checked == true)
    {
        salary.hidden = true;
        salary.disabled = true;
        commentText.disabled = false;
        questionText.disabled = true;
    }
}





// Only 1 of the 3 radio buttons can be active at once, can required be applied to disabled fields and still successfully submit?

