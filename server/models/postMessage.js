import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    caption: String,
    username: String,
    creator: String,
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    // likeCount: {
    //     type: Number,
    //     default: 0
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now()
    // }
})

postSchema.set('timestamps', 
// {
    // createdAt: "createdAt",

// }
true);

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage;