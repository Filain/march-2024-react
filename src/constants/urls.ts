const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users'
const posts = '/posts'

const urls={
    users,
    posts,
    getPostByUserId: (id:string)=>`${users}/${id}/${posts}`,
}
export {baseURL, urls}