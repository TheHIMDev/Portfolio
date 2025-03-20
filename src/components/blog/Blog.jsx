import React from 'react'
import Container from '../container/container'
import SectionHeader from '../sectionHeader/SectionHeader'
import BlogPosts from '../blogPosts/BlogPosts'
import styled from "./blog.module.css"

function Blog() {
  return (
    <section className={`${styled.blogSection} text-sky-50`}>
        <Container>
            <SectionHeader title={"Recent Blogs"} description={"We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers"}/>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <BlogPosts categoryName={"Tutorial"} blogTitle={"Introduction to HTML Tutorial"} PostCommentsNum={"0"} PostDate={"Oct 01, 2024"} blogImgSrc={"https://plus.unsplash.com/premium_photo-1676150789920-da4613e518e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGh0bWx8ZW58MHx8MHx8fDA%3D"}/>
                <BlogPosts categoryName={"tips"} blogTitle={"10 Tips for Improving User Experience"} PostCommentsNum={"0"} PostDate={"Oct 01, 2024"} blogImgSrc={"https://plus.unsplash.com/premium_photo-1661382011487-cd3d6b1d9dff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXh8ZW58MHx8MHx8fDA%3D"}/>
                <BlogPosts categoryName={"Tutorial"} blogTitle={"How to Use React Framework Tutorial"} PostCommentsNum={"0"} PostDate={"Oct 01, 2024"} blogImgSrc={"https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D"}/>
                <BlogPosts categoryName={"tips"} blogTitle={"Website Speed Optimization Techniques"} PostCommentsNum={"0"} PostDate={"Oct 01, 2024"} blogImgSrc={"https://plus.unsplash.com/premium_photo-1721922203081-4b1bbf3f9265?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"}/>
                <BlogPosts categoryName={"Tutorial"} blogTitle={"Introduction to HTML Tutorial"} PostCommentsNum={"0"} PostDate={"Oct 01, 2024"} blogImgSrc={"https://plus.unsplash.com/premium_photo-1676150789920-da4613e518e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGh0bWx8ZW58MHx8MHx8fDA%3D"}/>
                <BlogPosts categoryName={"tips"} blogTitle={"10 Tips for Improving User Experience"} PostCommentsNum={"0"} PostDate={"Oct 01, 2024"} blogImgSrc={"https://plus.unsplash.com/premium_photo-1661382011487-cd3d6b1d9dff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXh8ZW58MHx8MHx8fDA%3D"}/>
                <BlogPosts categoryName={"Tutorial"} blogTitle={"How to Use React Framework Tutorial"} PostCommentsNum={"0"} PostDate={"Oct 01, 2024"} blogImgSrc={"https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D"}/>
                <BlogPosts categoryName={"tips"} blogTitle={"Website Speed Optimization Techniques"} PostCommentsNum={"0"} PostDate={"Oct 01, 2024"} blogImgSrc={"https://plus.unsplash.com/premium_photo-1721922203081-4b1bbf3f9265?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"}/>
                
            </div>
        </Container>
    </section>
  )
}

export default Blog
