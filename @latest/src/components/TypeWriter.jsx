import React from 'react'
import TypeIt from 'typeit-react'
import styled from 'styled-components';




export default function TypeWriter() {

    return (
        <>
            <Wrapper>
                <TypeIt className="largeTxt"
                    getBeforeInit={(instance) => {
                        instance.type("And now for something completely").pause(300).delete(10).pause(800).type("not so completely different. ");

                        // Remember to return it!
                        return instance;
                    }}

                />;

            </Wrapper>

        </>
    )
}

const Wrapper = styled.div`
 display: flex;
 padding: 3rem 1rem;
 
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    line-height: auto;
    `