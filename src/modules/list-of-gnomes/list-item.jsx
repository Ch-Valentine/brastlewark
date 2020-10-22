import React from 'react';
import { Link } from 'react-router-dom';
import { GNOME } from '../../utils/prop-types';

const ListItem = ({ id, name, thumbnail, professions }) => (
  <Link to={`/gnomes/${id}`} className="list-item">
    <img className="list-item__avatar" alt={`${name} avatar`} src={thumbnail} />
    <div className="list-item__name">
      { name }
    </div>
  </Link>
);

ListItem.propTypes = GNOME;

export default ListItem;
