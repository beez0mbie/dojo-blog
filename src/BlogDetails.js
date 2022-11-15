import { useParams } from "react-router-dom";
import useFecth from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const {data: blog, isPending, error} = useFecth(`http://localhost:8000/blogs/${id}`);

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            { blog && (
                <article>
                    <h2 className="title">{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div className="body">{blog.body}</div>
                </article>
            ) }
        </div> 
    );
}
 
export default BlogDetails;