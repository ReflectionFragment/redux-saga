import React from "react";
import classname from 'classname';
import './Badge.scss'

const Badge =({color})=> <i className={classname('badge', {[`badge--${color}`]: color})} />;

export default Badge;
