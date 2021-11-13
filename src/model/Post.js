export default class Post {
    id;
    title;
    desc;
    photo;
    username;

    constructor (id,title, desc, photo, username) {
        this.id = id
        this.title = title
        this.desc = desc
        this.photo = photo
        this.username = username
    }


}