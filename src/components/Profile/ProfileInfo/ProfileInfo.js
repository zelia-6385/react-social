import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }
    return (
        <div>
            {/* <div>
                <img
                    src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"
                    alt="banner"
                />
            </div> */}
            <div className={styles.description_block}>
                <img src={props.profile.photos.large} alt="profile_photo" />
                <ProfileStatus status={'Hello my friends'} />
            </div>
        </div>
    );
};

export default ProfileInfo;
