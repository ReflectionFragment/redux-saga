import React from "react";
import classname from 'classname';
import './Badge.scss'

const Badge = ({color, onClick, className}) =>
    <i
        onClick={onClick}
        className={classname('badge', {[`badge--${color}`]: color}, className)}
    />;

export default Badge;
