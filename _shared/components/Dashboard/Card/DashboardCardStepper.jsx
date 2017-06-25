import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';
import _ from 'lodash';

const bem = makeBem('djavanDashboardCard');

const isSelected = (steps, status, index) => {
  const arrayIndex = _.findIndex(steps, ['id', status]);
  return {
    left: index <= arrayIndex,
    right: index < arrayIndex,
    hidden: arrayIndex >= 0 && index !== arrayIndex,
  };
};

const DashboardCardStepper = ({ steps, status, label }) =>
  <div className={bem.el('stepper')}>
    {label && <div className={bem.el('stepper').el('label')}>{label}</div>}
    <div className={bem.el('stepper').el('holder')}>
      {_.map(steps, (step, index) => {
        const selected = isSelected(steps, status, index);
        return (<div className={bem.el('stepper').el('step')} key={index}>
          <div className={bem.el('stepper').el('step').el('left').mod({ selected: selected.left })} />
          <div className={bem.el('stepper').el('step').el('right').mod({ selected: selected.right })} />
          <div className={bem.el('stepper').el('step').el('circle').mod({ selected: selected.left })} />
          <div className={bem.el('stepper').el('step').el('title').mod({ selected: selected.left, hidden: selected.hidden })}>
            {steps[index].title.toLowerCase()}
          </div>
        </div>);
      })}
    </div>
  </div>;


DashboardCardStepper.propTypes = {
  steps: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default DashboardCardStepper;
