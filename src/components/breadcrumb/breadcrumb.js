import React from 'react';
import './breadcrumb.less';

import { classnames } from '../../utils';
import { NavList } from '../nav-list';


const BreadCrumb = ({className, items, render, ...rest}) => {
    return(
        <NavList 
            className={classnames('k-breadcrumb', className)} 
            items={items}
            render={render}
            layout='horizontal'
            {...rest} 
        />
    );
}

export default BreadCrumb;