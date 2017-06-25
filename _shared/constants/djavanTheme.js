import { fade } from 'material-ui/utils/colorManipulator';
import { transparent, white, black, grey200, grey800, redA700 } from 'material-ui/styles/colors';

export const djavanRed = '#AD1F1F';
export const djavanRed8 = fade(djavanRed, 0.08);
export const interestingBlue = "#279ccb";
//export const djavanGrey = '#03A9F4';
export const djavanGrey = '#333333';
export const black26 = fade(black, 0.26);
export const black38 = fade(black, 0.38);
export const black54 = fade(black, 0.54);
export const black87 = fade(black, 0.87);
export const disabledGrey = fade('#4F4F4F', 0.26);
export const overlayGrey = '#999999';
export const borderGrey = '#DDDDDD';
export const errorRed = '#d50000';

export const djavanTheme = {
  palette: {
    // textColor: grey200,
    // alternateTextColor: white,
    // primary1Color: djavanRed,
    accent1Color: djavanGrey,
  },
  card: {
    titleColor: black87,
    subtitleColor: black54,
    fontWeight: 400,
    titleStyle: {
      paddingTop: 0,
      paddingLeft: 0,
    },
    actionButtonStyle: {
      float: 'right',
    },
  },
  cardText: {
    textColor: black87,
  },
  checkbox: {
    labelColor: black87,
    labelDisabledColor: black26,
    boxColor: black54,
    checkedColor: djavanGrey,
    disabledColor: disabledGrey,
    requiredColor: djavanGrey,
  },
  datePicker: {
    color: djavanGrey,
    textColor: white,
    calendarTextColor: black54,
    selectColor: djavanGrey,
    selectTextColor: white,
    calendarYearBackgroundColor: white,
    textFieldStyle: {
      width: '100%',
      fontSize: 16,
      lineHeight: 1.5,
      padding: '13px 15px 9px 16px',
      border: `1px solid ${borderGrey}`,
    },
  },
  drawer: {
    width: 230,
  },
  dropDownMenu: {
    style: {
      fontSize: 16,
      lineHeight: 46,
      border: `1px solid ${borderGrey}`,
    },
    iconStyle: {
      top: 12,
      fill: black54,
    },
    underlineStyle: {
      display: 'none',
    },
  },
  flatButton: {
    fontSize: 14,
    fontWeight: 500,
    color: transparent,
    textColor: white,
    primaryColor: interestingBlue,
    primaryTextColor: djavanRed,
    secondaryColor: djavanRed,
    secondaryTextColor: djavanGrey,
    disabledColor: transparent,
    disabledTextColor: black26,
    buttonFilterColor: djavanGrey,  // Hover color
  },
  floatingActionButton: {
    buttonSize: 34,
    miniSize: 30,
    color: djavanRed,
    iconColor: white,
    secondaryColor: white,
    secondaryIconColor: djavanRed8,
    disabledColor: disabledGrey,
    disabledTextColor: white,
  },
  listItem: {
    itemStyle: {
      fontSize: 14,
      fontWeight: 500,
      color: black54,
    },
    ItemStyleActive: {
      fontSize: 14,
      fontWeight: 500,
      color: djavanRed,
      backgroundColor: djavanRed8,
    },
    iconStyle: {
      color: black54,
    },
    IconStyleActive: {
      color: djavanRed,
    },
  },
  menuItem: {
    selectedTextColor: djavanGrey,
    rightIconDesktopFill: black54,
  },
  radioButton: {
    size: 20,
    labelColor: black87,
    labelDisabledColor: black26,
    borderColor: black54,
    checkedColor: djavanGrey,
    disabledColor: disabledGrey,
    requiredColor: djavanGrey,
  },
  raisedButton: {
    fontSize: 14,
    fontWeight: 500,
    color: grey200,
    textColor: black54,
    primaryColor: djavanRed,
    primaryTextColor: white,
    secondaryColor: djavanGrey,
    secondaryTextColor: white,
    disabledColor: disabledGrey,
    disabledTextColor: black54,
  },
  refreshIndicator: {
    strokeColor: borderGrey,
    loadingStrokeColor: djavanRed,
    style: {
      position: 'relative',
      margin: 'auto',
    },
  },
  selectField: {
    style: {
      fontSize: 16,
      border: `1px solid ${borderGrey}`,
    },
    hintStyle: {
      color: black38,
      paddingLeft: 16,
    },
    iconStyle: {
      top: 12,
      fill: black54,
      marginRight: 16,
    },
    underlineStyle: {
      display: 'none',
    },
  },
  autoComplete: {
    style: {
      fontSize: 16,
      border: `1px solid ${borderGrey}`,
    },
    hintStyle: {
      color: black38,
      paddingLeft: 16,
    },
    underlineStyle: {
      display: 'none',
    },
  },
  slider: {
    selectionColor: djavanGrey,
    rippleColor: djavanGrey,
  },
  stepper: {
    iconColor: djavanGrey,
  },
  svgIcon: {
    styleRelevance: {
      width: 18,
      height: 18,
      color: djavanRed,
    },
    white: {
      color: white,
    },
  },
  tabs: {
    backgroundColor: transparent,
    textColor: overlayGrey,
    selectedTextColor: white,
  },
  tableRow: {
    height: 93,
  },
  textField: {
    textColor: black87,
    hintColor: black38,
    errorColor: redA700,
    borderColor: borderGrey,
    hintStyle: {
      borderColor: borderGrey,
      backgroundColor: '#ff0000',
      padding: 20,
    },
    floatingLabelStyle: {
      color: black87,
      fontSize: 18,
      fontWeight: 400,
    },
    helpTextStyle: {
      color: black54,
    },
  },
  toggle: {
    labelColor: black87,
    labelDisabledColor: black26,
    thumbOnColor: djavanGrey,
    thumbOffColor: white,
    thumbDisabledColor: borderGrey,
    thumbRequiredColor: djavanGrey,
    trackOnColor: fade(djavanGrey, 0.5),
    trackOffColor: disabledGrey,
    trackDisabledColor: disabledGrey,
    trackRequiredColor: fade(djavanGrey, 0.5),
  },
  toolbar: {
    height: 64,
    iconColor: white, // Title color
    backgroundColor: grey800,
  },
  zIndex: {
    layer: 5000,
  },
};
