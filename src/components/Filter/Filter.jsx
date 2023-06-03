import { Label, Span, Input } from 'components/Filter/Filter.styled';

const Filter = ({ value, onFilterChange }) => {
  return (
    <Label>
      <Span>Find contacts by name</Span>
      <Input type="text" value={value} onChange={onFilterChange} />
    </Label>
  );
};

export default Filter;
