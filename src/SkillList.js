
export default class SkillList extends Component {
    state = {
        skills = [
            { name: "HTML", level: 5 },
            { name: "CSS", level: 3 },
            { name: "JavaScript", level: 4 },
            { name: "Python", level: 2 },
        ];
    }
    
    function SkillList({ skills }) {
        return (
        <ul>
            {skills.map((skill, idx) => (
            <li key={idx}>
                {skill.name}: {skill.level}
            </li>
            ))} 
        </ul>
        );
    }
}    