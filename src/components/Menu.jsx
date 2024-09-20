import React from 'react';
import Bebidas from './Bebidas';
import PlatosContainer from './PlatosContainer';
import PostresContainer from './PostresContainer';
import VinosContainer from './VinosContainer';

const Menu = ({ mainFilter, subFilter, menu, variables }) => {
    
  if (mainFilter === 'bebidas') {
    return (
      <div>
        <Bebidas menu={menu} subFilter={subFilter} />
      </div>
    );
  } else if (mainFilter === 'vinos') {
    return (
      <div>
        <VinosContainer menu={menu} subFilter={subFilter} />
      </div>
    );
  } else if (mainFilter === 'menú') {
    return (
      <div>
        <PlatosContainer menu={menu} subFilter={subFilter} variables={variables}/>
      </div>
    );
  } else if (mainFilter === 'postres y digestivos') {
    return (
      <div>
        <PostresContainer menu={menu} subFilter={subFilter} />
      </div>
    );
  }
  return null;
};

export default Menu;