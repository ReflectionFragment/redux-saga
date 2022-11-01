import React from "react";
import classname from 'classname';

const Badge =({color})=> <i className={classname('badge', {[`badge--${color}`]: color})} />;

export default Badge;