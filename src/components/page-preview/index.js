import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from "../layout";
import './styles.css';

const PagePreview = () => {
  const { id } = useParams();

  return (
    <Layout>
      <div className="text-wrapper">
        <h3>
          {(!id
            ? 'List of gnomes information is loading, please wait...'
            : 'The gnome information is loading, please wait...'
          )}
        </h3>
      </div>
    </Layout>
  );
}

export default PagePreview;
