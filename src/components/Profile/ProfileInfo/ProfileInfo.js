import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatus }) => {
    if (!profile) {
        return <Preloader />;
    }
    return (
        <div>
            <div className={styles.description_block}>
                <img src={profile.photos.large} alt="profile_photo" />
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    );
};

export default ProfileInfo;
