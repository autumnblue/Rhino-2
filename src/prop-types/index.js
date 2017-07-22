import { number, string, shape, arrayOf, any, node, bool } from 'prop-types';

// this module exports the most widely used custom prop types

// common types

export const breadcrumbsType = arrayOf(shape({
  label: node.isRequired,
  url: string,
}));

export const selectOptionsType = arrayOf(shape({
  label: node,
  value: any.isRequired,
}));


// entity types

export const clientType = shape({
  id: number.isRequired,
  name: string.isRequired,
});

export const issuerType = shape({
  id: number.isRequired,
  name: string.isRequired,
  is_default: bool.isRequired,
});

export const userType = shape({
  id: number.isRequired,
  first_name: string.isRequired,
  last_name: string.isRequired,
});

export const serviceType = shape({
  id: number.isRequired,
  name: string.isRequired,
});

export const toolType = shape({
  id: number.isRequired,
  name: string.isRequired,
  html_body: string.isRequired,
});

export const documentTemplateType = shape({
  id: number.isRequired,
  is_default: bool.isRequired,
  html_body: string.isRequired,
});

export const industryType = shape({
  id: number.isRequired,
  name: string.isRequired,
  html_body: string.isRequired,
});
