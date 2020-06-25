import React from 'react';
import styles from '../scss/styles.module.scss';

export const ListHeader = () => {
    return (
        <div className={"d-block "+styles.header}>
            <h3 className={styles.title}>History</h3>

            <a className={"btn btn-lg btn-outline-primary "+styles.btn} href={"#"}>+ Schedule meeting</a>
        </div>
    )
};
