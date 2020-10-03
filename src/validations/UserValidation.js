const UserValidation = (values) => {
    const errors = {};
    if(!values.email || values.email === "") {
        errors.email = "Email is Required";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid Email Address";
    }
    if(!values.password || values.password === "") {
        errors.password = "Password is Required";
    }
    if(!values.confirmPassword || values.confirmPassword === "") {
        errors.confirmPassword = "Confirm Password is Required";
    }
    if(!values.name || values.name === "") {
        errors.name = "Nama is Required";
    }
    if(!values.nim || values.nim === "") {
        errors.nim = "NIM is Required";
    }
    if(isNaN(Number(values.nim))) {
        errors.nim = "NIM Must Be A Number";
    }
    if(!values.ktm_url || values.ktm_url === "") {
        errors.ktm_url = "Photo KTM is Required";
    }    
    if(!values.cv_url || values.cv_url === "") {
        errors.cv_url = "CV/Resume is Required";
    }
    if(!values.letter_url || values.letter_url === "") {
        errors.letter_url = "Cover Letter is Required";
    }
    if(!values.linkedin_url || values.linkedin_url === "") {
        errors.linkedin_url = "Link Linkedin is Required";
    }

    return errors;
}

export default UserValidation
