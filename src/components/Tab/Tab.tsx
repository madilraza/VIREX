import React from 'react'

const Tab: React.FC = ({ children }) => {
    return <div className="component-tab">
        <div />
        <div className="component-tab__text">{children}</div>
        <div className="component-tab__selected"></div>
    </div>
}

export default Tab;