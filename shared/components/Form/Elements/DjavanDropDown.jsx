import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';
import DropDownMenu from 'material-ui/DropDownMenu';
import { djavanTheme, borderGrey, errorRed } from '../../../constants/djavanTheme';

const bem = makeBem('djavanFormElement');

const getStyles = (style, error) => Object.assign({}, style, {
  border: error ? `1px solid ${errorRed}` : `1px solid ${borderGrey}`,
});

const DjavanDropDown = ({ label = '', help = '', error = '', disabled = false, autoWidth = true, selector = false, name, value, onChange, children }) =>
  <div className={bem}>
    <div className={bem.el('label')}>{label}</div>
    <DropDownMenu
      name={name}
      maxHeight={300}
      value={value}
      onChange={onChange}
      disabled={disabled}
      autoWidth={autoWidth}
      underlineStyle={djavanTheme.dropDownMenu.underlineStyle}
      iconStyle={djavanTheme.dropDownMenu.iconStyle}
      style={getStyles(djavanTheme.dropDownMenu.style, error)}
      className={bem.el('dropdown').mod({ selector }).toString()}
    >
      {children}
    </DropDownMenu>
    {(error || help) &&
      <div className={bem.el('message').mod({ error: !!error, help: !error && help })}>
        {error || help}
      </div>
    }
  </div>;

DjavanDropDown.propTypes = {
  label: PropTypes.string,
  help: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  autoWidth: PropTypes.bool,
  selector: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default DjavanDropDown;
