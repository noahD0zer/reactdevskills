import React, { Component } from 'react'

export default class NewSkillForm extends Component {
    render () {
        return (
            <form>
                <label>
                    Skill:
                    <input
                        type="text"
                        value={FormData.name}
                        onChange={handleSkillChange}
                    />
                </label>
                <label>Level
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </label>
                <button>ADD SKILL</button>
            </form>
        )
    }
}