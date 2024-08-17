import Project from "../components/Project";
import portfoliopic from "../assets/mentalmathspicture.jpg"
export const Project2mentalmaths = () => {
    return (
        <>
            <Project link={"https://www.figma.com/proto/VzT2UCcJU9r56ZZgF84ibN/Maths-UI-Design-Kit?node-id=207-2783&starting-point-node-id=207%3A2783&t=RVfv3DZfc0Y3geu4-1"}
                     pictureLink={portfoliopic}
                     title={"Mental Maths Website"}
                     secondaryLink={"https://bluecoatschoolorg-my.sharepoint.com/:w:/g/personal/17kehindea_bluecoatstudent_org_uk/EW4n6DzS8LFDpNyBcrrWlrEBxsdHRPhW9QYLng7nNi6IBg?e=pVrKn5"}
                     secondaryLinkTitle={"Link to write up"}
                     timePeriod={"Oct 23 - May 24"}
                     technologiesUsed={["ASP.NET", "Tailwind", "SQL", "Docker", "Azure"]}
                     about={"I created a mental maths web application which can be used to improve mental maths skills. The web application allows users to login and save data such as high scores. There is a responsive leaderboard which updates itself when new highscores are added to the system. After each test a summary of information is shown to the user which contains information like accuracy and a standardised score."} />
            

        </>
    );
}
