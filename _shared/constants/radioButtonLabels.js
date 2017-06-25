const radioButtonLabels = (question) => {
  if (question === 'true') {
    return {
      true: 'true',
      false: 'false',
    };
  }
  return {
    true: 'Yes',
    false: 'No',
  };
};

export default radioButtonLabels;
