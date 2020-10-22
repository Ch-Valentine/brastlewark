import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from "../layout";
import './styles.css';

const PagePreview = ({ children }) => {
  const { id } = useParams();

  return (
    <Layout>
      <div className="text-wrapper">
        <h3>
          {(!id
            ? 'List of gnomes information is loading'
            : 'The gnome information is loading'
          )}
        </h3>
      </div>
    </Layout>
  );
}

export default PagePreview;
