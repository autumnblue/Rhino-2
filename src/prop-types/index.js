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

export const serviceOrderType = shape({
  status: string.isRequired,
  csv_enabled: bool.isRequired,
  custom_title: string.isRequired,
  days_to_complete: number.isRequired,
  id: number.isRequired,
  signed_date: string,
  strategic_considerations: string.isRequired,
  version: number.isRequired,
  assessment_count: number.isRequired,
  hours_per_day: number.isRequired,
  start_date: string,
  travel_enabled: bool.isRequired,
  end_date: string,
  scope_intro: string.isRequired,
  number_of_employees: number.isRequired,
  payment: string.isRequired,
  composite_id: string.isRequired,
  version_date: string.isRequired,
  created: string.isRequired,
  notes: string.isRequired,
  sign_by_date: string.isRequired,
  total_due: number.isRequired,
  remediation_text: string.isRequired,
  rules_of_engagement: string.isRequired,
});
