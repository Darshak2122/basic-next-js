'use client'
import { useRouter } from "next/navigation"
const About = () => {

    const route = useRouter()
    const backToHome = () => {
        route.push('/')
    }
    return (
        <>
        <h1>Comming Soon About Page.......</h1>
        <button onClick={backToHome} style={{border:"1px solid white",padding:"10px",borderRadius:"20px"}}>Back TO Home</button>
        </>
    )
}
export default About 