import { formatMoney, formatAdjustment } from 'src/helpers';

const ServiceGroupCosts = ({
  name,
  instances,
  adjustments,
  subtotal,
  total,
}) => (
  <div>
    <h6>{name}</h6>
    <ul>
      {instances.map(({ cost, instance }) => (
        <li>
          {instance.display_name}
          {' '}
          <strong className="float-right">${formatMoney(cost)}</strong>
        </li>
    ))}
    </ul>
    <p>
    Subtotal:
    {' '}
      <strong className="float-right">${formatMoney(subtotal)}</strong>
    </p>
    <Base component="ul" exists={adjustments.length}>
      {adjustments.map(({ value, modifier }) => (
        <li>
          {formatAdjustment({ value, modifier })}
        </li>
    ))}
    </Base>
    <p>
      <u>
    Total Due:
    </u>
      {' '}
      <strong className="float-right">
        <u>
        ${formatMoney(total)}
        </u>
      </strong>
    </p>
  </div>
);


export default ServiceGroupCosts;
