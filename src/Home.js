import BlogList from './BlogList';
import useFecth from './useFetch';
const Home = () => {

    const url = 'http://localhost:8000/blogs'

    const {data: blogs, isPending, error} = useFecth(url)
    

    return (
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList 
                blogs={blogs} 
                title='All blogs' 
            />}
        </div>
    )
}

export default Home;