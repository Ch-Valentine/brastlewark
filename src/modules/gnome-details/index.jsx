import React from 'react';
import Layout from '../../components/layout';
import PagePreview from '../../components/page-preview';
import { useData } from '../../utils/hooks';
import { useParams, useHistory } from "react-router-dom";
import './styles.css';

const GnomeDetails = () => {
  const { data } = useData();
  const history = useHistory();

  return data ? (
    <Layout>
      <div className="gnome-page">
        Details for {data.name}
        <br/>
        <button type="button" onClick={history.goBack}>
          Back
        </button>
      </div>
    </Layout>
  ) : <PagePreview/>;
};

export default GnomeDetails;
