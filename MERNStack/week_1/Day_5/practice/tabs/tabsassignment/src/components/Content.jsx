
import React from 'react';

const Content = (props) => {
    const { content } = props;
    return (
        <>
            <div className="content">
                <textarea cols="30" rows="10"  value={content} />
            </div>
        </>
    );
};

export default Content;
