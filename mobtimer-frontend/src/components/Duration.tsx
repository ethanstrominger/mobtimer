import React, { useState } from 'react'

const Duration = () => {
    const [durationMinutes, setDurationMinutes] = useState(5);
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <label>Turn Duration (minutes): </label>
            <input
                value={durationMinutes}
                onChange={(e) => setDurationMinutes(e.target.value as unknown as number)}
                type="text"
                placeholder="Enter a Turn Duration"
            />
            <button type="submit">Update</button>
        </form>
    )
}

export default Duration