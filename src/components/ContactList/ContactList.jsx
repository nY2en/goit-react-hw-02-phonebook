import { Li, Span, Button } from 'components/ContactList/ContactList.styled';

const ContactList = ({ contacts, onBtnDeleteClick }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <Li key={id}>
          <Span></Span>
          <p>
            {name}: {number}
          </p>
          <Button type="button" onClick={() => onBtnDeleteClick(id)}>
            Delete
          </Button>
        </Li>
      ))}
    </ul>
  );
};

export default ContactList;
