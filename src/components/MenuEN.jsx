import React from 'react';
import Drinks from './Drinks';
import CoursesContainer from './CoursesContainer';
import DessertsContainer from './DessertsContainer';
import WinesContainer from './WinesContainer';

const MenuEN = ({ mainFilter, subFilter, menu, variables }) => {
    if (mainFilter === 'drinks') {
        return (
        <div>
            <Drinks menu={menu} subFilter={subFilter} />
        </div>
        );
    } else if (mainFilter === 'wines') {
        return (
        <div>
            <WinesContainer menu={menu} subFilter={subFilter} />
        </div>
        );
    } else if (mainFilter === 'menu') {
        return (
        <div>
            <CoursesContainer menu={menu} subFilter={subFilter} variables={variables}/>
        </div>
        );
    } else if (mainFilter === 'desserts') {
        return (
        <div>
            <DessertsContainer menu={menu} subFilter={subFilter} />
        </div>
        );
    }
    return null;
    };

    export default MenuEN;
