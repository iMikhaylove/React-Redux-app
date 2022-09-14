import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://cameralabs.org/media/cameralabs/images/Tanya/_II_October/14.10/23stunning-landscape-view-argentina.jpg" />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;

