import { compose, onlyUpdateForKeys, withPropsOnChange, withHandlers, withState } from 'recompose';
import { Field, formValues } from 'redux-form';
import { InputGroupAddon, InputGroup } from 'reactstrap';
import { Button, Icon, ReduxOutputText, ReduxHidden, ReduxPriorityVote, ReduxInput, ReduxDatePicker } from 'src/components';
import { empty, withReduxFormValues, formatMoney } from 'src/helpers';

import css from './style.css';

/* const formValuesEnhancer = withReduxFormValues(({ member }) => ({
  id: `${member}.id`,
  unitPrice: `${member}.unit_price`,
  numberOfHours: `${member}.number_of_hours`
}));*/

const idEnhancer = withState('id', 'onSetId');
const unitPriceEnhancer = withState('unitPrice', 'onSetUnitPrice');
const numberOfHoursEnhancer = withState('numberOfHours', 'onSetNumberOfHours');

const handlersEnhancer = withHandlers({
  onEdit: ({ onEdit, id, member }) => () => setTimeout(onEdit, 0, id, member),
  onDelete: ({ onDelete, id }) => (evt) => {
    evt.preventDefault();
    onDelete(id);
  },
});

const propsEnhancer = withPropsOnChange([
  'serviceInstanceValidationErrors',
  'id',
  'unitPrice',
  'numberOfHours',
], ({
  serviceInstanceValidationErrors,
  id,
  unitPrice,
  numberOfHours,
}) => ({
  validationErrors: serviceInstanceValidationErrors[id] || empty,
  totalDue: +unitPrice * +numberOfHours,
}));

const enhance = compose(
  idEnhancer,
  unitPriceEnhancer,
  numberOfHoursEnhancer,
  handlersEnhancer,
  propsEnhancer,
  onlyUpdateForKeys([
    'validationErrors',
    'totalDue',
  ]),
);

const ServiceInstanceItem = ({
  member,
  validationErrors,
  totalDue,

  onDelete,
  onEdit,

  onSetId,
  onSetUnitPrice,
  onSetNumberOfHours,
}) => (
  <tr className={css.row}>
    <Field name={`${member}.id`} component={ReduxHidden} onFill={onSetId} />
    <Field name={`${member}.unit_price`} component={ReduxHidden} onFill={onSetUnitPrice} />
    <Field name={`${member}.number_of_hours`} component={ReduxHidden} onFill={onSetNumberOfHours} />
    <td>

      <Field
        component={ReduxPriorityVote}
        name={`${member}.custom_sort_priority`}
        onChange={onEdit}
      />
    </td>
    <td>
      <Field
        component={ReduxOutputText}
        name={`${member}.display_name`}
      />
    </td>
    <td>
      <div className={css.unitPrice}>
        <Field
          component={ReduxInput}
          name={`${member}.unit_price`}
          onBlur={onEdit}
          addonPre="$"
          parse={parseInt}
          error={validationErrors.unit_price}
        />
      </div>
      &nbsp;x&nbsp;
      <div className={css.numberOfHours}>
        <Field
          component={ReduxInput}
          name={`${member}.number_of_hours`}
          type="number"
          addonPost="hrs"
          error={validationErrors.number_of_hours}
          parse={parseInt}

          onBlur={onEdit}
        />
      </div>
      {' '}
      Total&nbsp;Due:&nbsp;<strong>${formatMoney(totalDue)}</strong>
    </td>
    <td>
      <nobr>
      From&nbsp;
      <Field
        component={ReduxDatePicker}
        name={`${member}.start_date`}
        className={css.date}
        showIcon={false}
        placeholder="Start Date"
        onChange={onEdit}
        error={validationErrors.start_date}
        formatAsDate
      />
      </nobr>
      {' '}
      <nobr>
      to&nbsp;
      <Field
        component={ReduxDatePicker}
        name={`${member}.end_date`}
        className={css.date}
        showIcon={false}
        placeholder="End Date"
        onChange={onEdit}
        error={validationErrors.end_date}
        formatAsDate
      />
      </nobr>
    </td>
    <td>
      <Button onClick={onDelete}>
        <Icon wb="close" />
      </Button>
    </td>
  </tr>
);

export default enhance(ServiceInstanceItem);
