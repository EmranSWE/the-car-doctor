import React from 'react';
import DynamicTitle from '../Shared/dynamicTitle/DynamicTitle';

const About = () => {
    return (
        <div>
            {/* <Helmet>
                <title>About -Genius Car services</title>
            </Helmet> */}
            <DynamicTitle title='About'></DynamicTitle>
            <h2>This is about us:</h2>
        </div>
    );
};

export default About;