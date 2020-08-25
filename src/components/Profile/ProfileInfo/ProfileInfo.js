import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"
                    alt="banner"
                />
            </div>
            <div className={styles.description_block}>Description</div>
        </div>
    );
};

export default ProfileInfo;
