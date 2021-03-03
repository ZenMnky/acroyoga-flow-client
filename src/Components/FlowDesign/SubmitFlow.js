import React from 'react'

export default function SubmitFlow(props) {
    const {flowTitle, setFlowTitle} = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('flow title: ', flowTitle.trim())
    }

    const handleReset = (e) => {
        e.preventDefault();
        setFlowTitle('')
    }

    return (
        <section>
            <form>
                <label htmlFor='flow-title'>Flow Title</label>
                <br />
                <input type='text' name='flow-title' value={flowTitle} onChange={e => setFlowTitle(e.target.value)} required />

                <div>
                    <button onClick={e => handleSubmit(e)}>Save Flow</button>{' '}
                    <button onClick={e => handleReset(e)}>Reset</button>
                </div>
            
            </form>
            
        </section>
    )
}
