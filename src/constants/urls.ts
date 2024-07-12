const baseURL = 'https://jsonplaceholder.typicode.com/'

const users ='/users'
const posts = '/posts'
const comments = '/comments'

const urls ={
    users,
    posts,
    comments,
    userPosts: (id:string)=>`${users}/${id}${posts}`
}

export {baseURL, urls}