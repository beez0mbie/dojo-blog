import {useState} from 'react'
const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsun....', author: 'spider man', id:1 },
        {title: 'Strange Things happens', body: 'lorem ipsun....', author: 'Liza', id:2 },
        {title: 'Cool story', body: 'lorem ipsun....', author: 'Remark', id:3 },
    ])

    return (
        <div className="home">
            { blogs.map( (blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2 className="title">{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    )
}

export default Home;