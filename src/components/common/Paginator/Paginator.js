import React from 'react';
import styles from './Paginator.module.css';

let Paginator = ({ currentPage, totalUsersCount, pageSize, onPageChanged }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={styles.pagination_buttons}>
            {pages.map((page, index) => (
                <span
                    className={currentPage === page ? styles.selected_page : undefined}
                    key={index}
                    onClick={() => {
                        onPageChanged(page);
                    }}>
                    {page}
                </span>
            ))}
        </div>
    );
};

export default Paginator;
