import React from 'react'
import { CiCalendar } from 'react-icons/ci'
import { FaRegComments } from 'react-icons/fa'
import { NavLink } from 'react-router'
import styled from "./blogPost.module.css"

function BlogPosts({blogImgSrc,blogImgAlt,CategoryUrl,PostDate,PostCommentsNum,blogTitle,blogUrl,categoryName}) {
  return (
    <div className={styled.blogItem}>
      <div className={styled.blogThumb}>
        <img src={blogImgSrc} alt={blogImgAlt} />
        <NavLink to={CategoryUrl} className={styled.category}>{categoryName}</NavLink>
      </div>
      <div className={styled.blogContent}>
        <div className={styled.blogMeta}>
            <ul className={`ul-rest`}>
                <li>
                    <i>
                        <CiCalendar size={20} />
                    </i>
                    {PostDate}
                </li>
                <li>
                    <i>
                        <FaRegComments size={20} />

                    </i>
                    comment ({PostCommentsNum})
                </li>
            </ul>
            <h3 className={styled.blogTitle}>
                <NavLink to={blogUrl}>{blogTitle}</NavLink>
            </h3>
        </div>
      </div>
    </div>
  )
}

export default BlogPosts
