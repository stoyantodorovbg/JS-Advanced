/**
 * Created by Stoyan on 14.7.2017 г..
 */
function submitInJudje() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {

            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(post, content, likes, dislikes) {
            super(post, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this._comments = [];
        }

        get comments() {
            return this._comments;
        }

        set comments(_comments) {
            this._comments = _comments;
        }


        addComment(comment) {
            this._comments.push(comment);
        }

        toString() {
            let result = super.toString() + `\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                result += `\nComments:\n${this.comments.map(e => ' * ' + e).join('\n')}`;
            }
            return result;
        }

    }

    class BlogPost extends Post{
        constructor(title, content, views) {
            super(title, content);
            this._views = Number(views);
        }

        get views() {
            return this._views;
        }

        set views(_views) {
            this._views = this.view();
            return this._views;
        }

        view() {
            this._views++;
            return this;
        }

        toString() {
            let result = super.toString();
            return result + `\nViews: ${this.views}`;
        }
    }

    return {
        Post: Post,
        SocialMediaPost:SocialMediaPost,
        BlogPost: BlogPost
    }

}
let createInstance = submitInJudje();
let post = new createInstance.Post("Post", "Content");

console.log(post.toString());

let scm = new createInstance.SocialMediaPost("TestTitle", "TestContent", 5, 10);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

let blogPost = new createInstance.BlogPost("TestTitle", "TestContent", 5);
blogPost.view().view();
console.log(blogPost.toString());
