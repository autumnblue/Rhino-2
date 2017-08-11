import { FormGroup, } from 'reactstrap'

import AdjustmentsItem from '../AdjustmentsItem';
import AdjustmentFields from './AdjustmentFields';

const AdjustmentsArray = ({
  fields,
  adjustmentValidationErrors,

  onDelete,
  onEdit,
}) => (
  <div>
    <AdjustmentFields />

  {fields.map((member) => (
    <AdjustmentsItem
      member={member}
      key={member}
      adjustmentValidationErrors={adjustmentValidationErrors}

      onDelete={onDelete}
      onEdit={onEdit}
    />
  ))}
  </div>
)

export default AdjustmentsArray
