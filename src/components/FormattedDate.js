import React from 'react';

const FormattedDate = ({date}) => (
  <span>
    {date.toLocaleString()}
  </span>
)

export default FormattedDate
export {
  FormattedDate
}
