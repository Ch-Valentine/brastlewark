import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Layout = ({ children, actions }) => (
  <div className="page">
    <header className="page-header">
      <h1 className="header-title">
        Brastlewark
      </h1>

      <div className="block-of-actions">
        {actions}
      </div>
    </header>

    <section className="page-content">
      { children }
    </section>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  actions: PropTypes.node,
}

Layout.defaultProps = {
  actions: null,
};

export default Layout;
