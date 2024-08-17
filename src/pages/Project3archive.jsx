import Project from "../components/Project";
import portfoliopic from "../assets/archivepicture.jpg"
export const Project3archive = () => {
    return (
        <>
            <Project link={""}  
                     pictureLink={portfoliopic} 
                     title={"The Archives: A Personal Book Database"} 
                     timePeriod={"May 24 - ongoing"} 
                     technologiesUsed={["ASP.NET", "Tailwind", "SQL"]}  
                     about={"I am creating a web application which stores books that a user has read in a database. Based on these books my application can recommend the user new books to read. Users have many different ways to view metadata and information about the books that they have read."} />
        
    </>
    );
}