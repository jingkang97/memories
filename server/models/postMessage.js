import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    caption: String,
    creator: String,
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
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