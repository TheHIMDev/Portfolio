import axios from "axios";

const client = axios.create({
    baseURL:"http://localhost:8001/"
})

export async function getLinks() {
    const {data} = await client("linkList")
    
    return data ; 
}

export async function getHeroImg() {
    const {data} = await client("heroImg")

    return data ;
}

export async function getFunFactItems() {
    const {data} = await client("FunFactArea")

    return data ;
}

export async function getServicesItems() {
    const {data} = await client("ServicesItems")

    return data ;
}

export async function getMySkillsItems() {
    const {data} = await client("MySkills");

    return data ;
}

export async function getResumeExperience() {
    const {data} = await client("ResumeExperience");

    return data ;
}

export async function getResumeEducation() {
    const {data} = await client("ResumeEducation");

    return data ;
}

export async function getClientsStoryItem() {
    const {data} = await client("ClientsStoryItem");

    return data
}

export async function getBlogPosts() {
    const {data} = await client("blogPosts");

    return data
}