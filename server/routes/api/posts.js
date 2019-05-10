const express = require('express')
const mongodb = require('mongodb')
const router = express.Router()

//GEt posts
router.get('/', async(req,res)=>{
    const posts = await loadPostsCollection()
    res.send(await posts.find({}).toArray())
})

//add posts
router.post('/', async (req,res) =>{
    const posts = await loadPostsCollection()
    posts.insertOne({
        text: req.body.text,
        created_at: new Date(),
        updated_at: null
    })
    res.status(201).send()
})

//delete posts
router.delete('/:id', async (req,res) => {
    const posts = await loadPostsCollection()
    posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send()
})

async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://kcsujeet:admin123@cluster0-uci96.mongodb.net/test?retryWrites=true', {useNewUrlParser: true})
    return client.db('Cluster0').collection('posts')
}


module.exports = router