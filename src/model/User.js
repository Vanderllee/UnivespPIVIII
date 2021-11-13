
export default class User {
    id;
    username;
    email;
    password;
    profilePic;

    constructor (username, email, password, profilePic) {
        this.username = username
        this.email = email
        this.password = password
        this.profilePic = profilePic
    }
}