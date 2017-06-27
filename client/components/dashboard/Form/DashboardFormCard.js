import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import makeBem from 'bem-cx';
import { Card, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

const bem = makeBem('djavanDashboardFormCard');

const DashboardFormCard = ({ title, backLink, outerWidth, innerWidth, children, }) =>
  <Card className={bem} style={{ width: outerWidth }}>
    <CardText>
      {!!backLink && <Link className={bem.el('backButton')} to={backLink}><NavigationArrowBack color="#000000" /></Link>}
      <div className={bem.el('logo')} />
      <div className={bem.el('logo').el('text')}>
        Djavan - Rhino Security Labs
      </div>
      {title && <div className={bem.el('title')}>{title}</div>}
      <div className={bem.el('content')} style={{ width: innerWidth }}>{children}</div>
    </CardText>
  </Card>;

DashboardFormCard.propTypes = {
  title: PropTypes.string,
  backLink: PropTypes.string,
  outerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  innerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
};

export default DashboardFormCard;
