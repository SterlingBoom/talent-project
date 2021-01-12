
let selectOne = e => document.querySelector(e)
let selectAll = e => document.querySelectorAll(e)
let createElement = e => document.createElement(e)

let errorMessages = {
    "FirstName": "The first name field is required",
    "LastName": "The last name field is required",
    "Email": "The email field is required",
    "Phonenumber": "The phone field is required",
    "City": "The city field is required",
    "Country": "The locality field is required",
    "currentOrganisation": "The last organisation field is required",
    "employmentStatus": "The current employment status field is required",
    "Title": "The title field is required",
    "linkedin": "The linkedin profile URL field is require",
     "github": "The github profile URL field is required",
    "terms": "Please Check Candidate Terms To Proceed."
}
let userInputs = Array.from(selectAll(".user-data")) 
let buttons = Array.from(selectAll(".button"))
buttons.map((button) => {
    button.addEventListener("click", e => { 
        let { target} = e
        
        
        switch (target.id) { 
            case "submit-user-data":
                e.preventDefault()
                if (userInputs.every(input => input.value !== "")) {
                    target.textContent = "submitted"
                } else {
                    userInputs.map((userInput) => {
                        if (userInput.value === "") {
                            // let {parentNode , ne{xtElementSibling, id} = userInput
                            userInput.classList.add("border-error-color")
                            let errorElement = createElement("p")
                            errorElement.textContent = errorMessages[`${userInput.id}`]
                            userInput.parentNode.insertBefore(errorElement, userInput.nextElementSibling) 
                        }else if(userInput.id === "terms" && !userInput.checked) {

                            userInput.classList.add("border-error-color")
                            let errorElement = createElement("p")
                            errorElement.textContent = errorMessages[`${userInput.id}`]
                            userInput.parentNode.insertBefore(errorElement, userInput.nextElementSibling) 
                        }
                    })
                }
        
            default:
                return false
        }
    })
})
 


