import React, { Component, PropTypes } from 'react';
import makeBem from 'bem-cx';

const bem = makeBem('djavanFormElement');

const DjavanCheckboxGroupView = ({ label = '', help = '', error = '', required = false, children }) =>
  <div className={bem}>
    <div className={bem.el('label').mod({ required })}>{label}</div>
    {children}
    {(error || help) && <div className={bem.el('message').mod({ error: !!error, help: !error && help })}>{error || help}</div>}
  </div>;

DjavanCheckboxGroupView.propTypes = {
  label: PropTypes.string,
  help: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.node,
  required: PropTypes.bool,
};

export default DjavanCheckboxGroupView;
