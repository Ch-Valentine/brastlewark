import React from 'react';
import { useHistory, Link } from "react-router-dom";
import Layout from '../../components/layout';
import KeyValueInfo from './KeyValueInfo';
import PagePreview from '../../components/page-preview';
import { useData } from '../../utils/hooks';
import './styles.css';

const GnomeDetails = () => {
  const history = useHistory();
  const { data, gnomeIdByName } = useData();

  const {
    name,
    age,
    height,
    weight,
    hair_color,
    thumbnail,
    gender,
    friends,
    professions,
  } = data || {};

  return data ? (
    <Layout
      actions={(
        <button className="back-button" type="button" onClick={history.goBack}>
          back
        </button>
      )}
    >
      <div className="gnome">
        <img className="gnome__avatar" src={thumbnail} alt={`${name} avatar`} />

        <div className="gnome__info">
          <span className="gnome__info-name">{name}</span>
          <KeyValueInfo keyName="Age" value={age}/>
          <KeyValueInfo keyName="Height" value={height}/>
          <KeyValueInfo keyName="Weight" value={weight}/>
          <KeyValueInfo keyName="Hair color" value={hair_color}/>
          <KeyValueInfo keyName="Gender" value={gender}/>
          <KeyValueInfo keyName="Professions" value={professions.join(', ') || '-'}/>
          <KeyValueInfo keyName="friends">
              {friends.length ? friends.map(friendName => (
                <Link
                  className="friend"
                  key={friendName}
                  to={`/gnomes/${gnomeIdByName[friendName]}`}>
                  {friendName}
                </Link>
              )) : '-'}
          </KeyValueInfo>
        </div>
      </div>
    </Layout>
  ) : <PagePreview/>;
};

export default GnomeDetails;
