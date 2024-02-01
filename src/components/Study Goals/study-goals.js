import "./study-goals.css"

function StudyGoal() {
    return (
        <div className="study-goal-section">
            <div className="title">Study Goals</div>
            <div>
            {/*have 4 boxes as default*/}
                <input className="first-box"/>
                <input className="goal-box"/>
                <input className="goal-box"/>
                <input className="goal-box"/>
            </div>
        </div>
    );
}

export default StudyGoal;