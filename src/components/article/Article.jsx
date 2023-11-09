import React from 'react'
import "./article.css"
function Article({ imgUrl, date, title}) {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p><a className='subtext__color'>Read Full Article</a></p>
      </div>
    </div>
  )
}

export default Article