import './myStyle.css';

import React from 'react';
import styles from './CSSModule.module.css';

function StyleSheet({ primary }) {
    const className = primary ? 'primary' : '';
    return (
        <div>
            <h1 className={`${className} font-xl`}>Style Sheet</h1>
            <h1 className={styles.primary}>Style Sheet</h1>
        </div>
    )
}

export default StyleSheet
