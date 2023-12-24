import React, { useState } from 'react';
import './Tabs.css'; // CSS file for styling

const Tabs = (props) => {
    const { tabs, handler } = props;
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
        if (handler) {
            handler(tabs[index]);
        }
    };

    return (
        <>
            <div className="tabs-container">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={index === activeTab ? 'active-tab' : ''}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </>
    );
};

export default Tabs;
