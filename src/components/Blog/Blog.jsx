import React from 'react';

const Blog = () => {
    return (
        <div className='lg:px-12 p-5 grid grid-cols-1 md:grid-cols-1 my-4 mx-6 bg-neutral-50 rounded'>
            <h1 className='text-xl font-bold underline text-center'>Answers</h1>
            <div className='bg-white my-4 p-3 rounded'>
                <p className='text-xl font-semibold underline mb-2'>Differences between uncontrolled and controlled components?</p>
                <div>
                    <p>In React, a controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state. A controlled component receives its current value and an update callback via props, and the parent component manages the state of the component. When the user interacts with the component, the parent component updates the state, which in turn updates the component's value. An uncontrolled component, maintains its own internal state, and when the user interacts with the component, it updates its own state, which in turn updates the component's value.
                    </p>
                </div>
            </div>
            <div className='bg-white my-4 p-3 rounded'>
                <p className='text-xl font-semibold underline mb-2'>How to validate React props using PropTypes?</p>
                <div>
                    <p>PropTypes is React's internal mechanism for adding type checking to component props. React components use a special property called propTypes to set up type checking. When props are passed to a React component, they are checked against the type definitions configured in the propTypes property.
                    </p>
                </div>
            </div>
            <div className='bg-white my-4 p-3 rounded'>
                <p className='text-xl font-semibold underline mb-2'>Difference between nodejs and express js?</p>
                <div>
                    <p>NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile application.
                    </p>
                </div>
            </div>
            <div className='bg-white my-4 p-3 rounded'>
                <p className='text-xl font-semibold underline mb-2'>What is a custom hook, and why will you create a custom hook?</p>
                <div>
                    <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;