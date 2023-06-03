import PropTypes from 'prop-types';
import { Label, Span, Input } from 'components/Filter/Filter.styled';

const Filter = ({ value, onFilterChange }) => {
  return (
    <Label>
      <Span>Find contacts by name</Span>
      <Input type="text" value={value} onChange={onFilterChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
