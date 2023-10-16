import './App.css';
import NewSkillForm from './NewSkillForm'

export default function App() {
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList />
      <hr />
      <NewSkillForm />
    </div>
  );
}
