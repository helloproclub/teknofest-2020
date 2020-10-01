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
    if(!values.nama || values.nama === "") {
        errors.nama = "Nama is Required";
    }
    if(!values.nim || values.nim === "") {
        errors.nim = "NIM is Required";
    }
    if(isNaN(Number(values.nim))) {
        errors.nim = "NIM Must Be A Number";
    }
    if(!values.fotoKTM || values.fotoKTM === "") {
        errors.fotoKTM = "Photo KTM is Required";
    }
    if(!values.cv || values.cv === "") {
        errors.cv = "CV/Resume is Required";
    }
    if(!values.coverLetter || values.coverLetter === "") {
        errors.coverLetter = "Cover Letter is Required";
    }
    if(!values.linkedinLink || values.linkedinLink === "") {
        errors.linkedinLink = "Link Linkedin is Required";
    }

    return errors;
}

export default UserValidation
