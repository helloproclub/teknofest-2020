const UserValidation = (values) => {
    const errors = {};
    if(!values.email || values.email === "") {
        errors.email = "Email Harus Diisi";
    }
    if(!values.password || values.password === "") {
        errors.password = "Password Harus Diisi";
    }
    if(!values.confirmPassword || values.confirmPassword === "") {
        errors.confirmPassword = "Confirm Password Harus Diisi";
    }
    if(!values.nama || values.nama === "") {
        errors.nama = "Nama Harus Diisi";
    }
    if(!values.nim || values.nim === "") {
        errors.nim = "NIM Harus Diisi";
    }
    if(isNaN(Number(values.nim))) {
        errors.nim = "NIM Harus Berupa Angka";
    }
    if(!values.fotoKTM || values.fotoKTM === "") {
        errors.fotoKTM = "Photo KTM Harus Diisi";
    }
    if(!values.cv || values.cv === "") {
        errors.cv = "CV/Resume Harus Diisi";
    }
    if(!values.coverLetter || values.coverLetter === "") {
        errors.coverLetter = "Cover Letter Harus Diisi";
    }
    if(!values.linkedinLink || values.linkedinLink === "") {
        errors.linkedinLink = "Link Linkedin Harus Diisi";
    }

    return errors;
}

export default UserValidation
