// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blogs-list">
      {blogsList.map(eachBlog => (
        <BlogItem blogDetails={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}

export default BlogList
