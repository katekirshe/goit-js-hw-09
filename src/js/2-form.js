const form = document.querySelector("form");
const localStorageFormDataString = localStorage.getItem("feedback-form-state");
const localStorageFormData = JSON.parse(localStorageFormDataString);
form.elements.message.value = localStorageFormData?.message ?? "";
form.elements.email.value = localStorageFormData?.email ?? "";
 
const formData = { email: localStorageFormData?.email ?? "", message: localStorageFormData?.message ?? "" };

form.addEventListener("input", function (event) {
    event.preventDefault();

    const data = event.target;

    if (data.name === "email") {
        formData.email = data.value;
    } else if (data.name === "message") {
        formData.message = data.value;
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));

});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = event.target.elements;
    const email = data.email.value;
    const message = data.message.value;
    console.log(email, message);
    if (!email.length || !message.length) {
        alert ("Fill please all fields!")
    } else {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        form.reset();
        formData.email = "";
        formData.message = "";
    }
});