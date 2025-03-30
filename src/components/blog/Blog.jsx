import React, { useEffect, useState } from 'react'
import Container from '../container/container'
import SectionHeader from '../sectionHeader/SectionHeader'
import BlogPosts from '../blogPosts/BlogPosts'
import styled from "./blog.module.css"
import { getBlogPosts } from '../../services/api'

function Blog() {

  const [blogPosts , setBlogPosts] = useState([])

  useEffect(() => {
    getBlogPosts().then(res => setBlogPosts(res))
  },[])

  return (
    <section className={`${styled.blogSection} text-sky-50`}>
        <Container>
            <SectionHeader title={"Recent Blogs"} description={"We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers"}/>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                  blogPosts.map((item) => (
                    <BlogPosts key={item.id}  CategoryUrl={item.CategoryUrl} PostCommentsNum={item.PostCommentsNum} PostDate={item.PostDate} blogImgAlt={item.blogImgAlt} blogImgSrc={item.blogImgSrc} blogTitle={item.blogTitle} blogUrl={item.blogUrl} categoryName={item.categoryName}/>
                  ))
                }
                
            </div>
        </Container>
    </section>
  )
}

export default Blog
