import React from 'react'
import faker from 'faker';
import TextInputField from './TextInputField';
import FlexSection from './FlexSection';
import Button from './Button';
import Form from './FormContainer';

export default function SubmitFlow(props) {
    const {flowTitle, setFlowTitle, setSelectedAcroYogaElements} = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('flow title: ', flowTitle.trim())
    }

    const handleReset = (e) => {
        e.preventDefault();
        // clear selected flow elements by passing in an empty array
        setSelectedAcroYogaElements([]);
    }

    const handleRandomTitle = (e) => {
        e.preventDefault();
        setFlowTitle(faker.random.words(3).toLowerCase());
    }

    const handleClearTitle = (e) => {
        e.preventDefault();
        setFlowTitle('');
    }

    return (
        <section>
            <Form>
                <label htmlFor='flow-title'>Flow Title</label>
                <br />
                <TextInputField type='text' name='flow-title' value={flowTitle} onChange={e => setFlowTitle(e.target.value)} required />
               
                <FlexSection>
                    <Button type='submit' onClick={e => handleSubmit(e)}>
                        Save Flow   
                    </Button>
                    <Button type='reset' onClick={e => handleReset(e)}>
                        Clear Flow
                    </Button>
                    <Button type='button' onClick={e => handleRandomTitle(e)}>
                        Random Title
                    </Button>
                    <Button type='button' onClick={e => handleClearTitle(e)}>
                        Clear Title
                    </Button>
              
                </FlexSection>   
            </Form>
                         
            
        </section>
    )
}
