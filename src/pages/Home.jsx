import React from 'react';

const Home = () => {
    console.log("asdfadsf",import.meta.env.VITE_base_url)
    return (
        <div>
            <h1>This is home page</h1>
            <h1>${import.meta.env.VITE_BASE_URL}</h1>
        </div>
    );
};

export default Home;