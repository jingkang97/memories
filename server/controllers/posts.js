import PostMessage from '../models/postMessage.js'
import express from 'express';
import mongoose from 'mongoose';


export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find()
        console.log(postMessages)

        res.status(200).json(postMessages);
    }catch (error){
        res.status(404).json({message: error.message})
    }
    // res.send('THIS WORKS!')
}

export const createPost = async (req, res) => {
    const post = req.body;

    // const newPost = new PostMessage({...post, creator: req.userId, createdAt: new Date().toISOString})
    const newPost = new PostMessage({...post, creator: req.userId})

    try{
        await newPost.save()
        res.status(201).json(newPost)
    }catch (error){
        res.status(409).json({message: error.message})
    }
    // res.send('Post Creation')
}


export const updatePost = async (req, res) => {
    const {id: _id} = req.params;
    const post = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')
    // async - need await
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new:true});
    res.json(updatedPost);
}


export const deletePost = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')

    await PostMessage.findByIdAndRemove(id);

    console.log('DELETE!')

    res.json({message: 'Post deleted successfully'})

}

export const likePost = async (req, res) => {
    const {id} = req.params

    // check if authenticated
    if(!req.userId) return res.json({message: 'Unauthenticated'})

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    // check if post has been liked by that user
    const index = post.likePost.findIndex((id) => id == String(req.userId))
    if(index == -1){
        // like the post
        post.likePost.push(req.userId)
    }else{
        // dislike the post
        post.likes = post.likes.filter((id) => id != String(req.userId))
    }


    const post = await PostMessage.findById(id);
    // const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true})

    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post}, {new: true})

    res.json(updatedPost);
}