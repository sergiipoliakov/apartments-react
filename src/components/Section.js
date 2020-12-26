import PropTypes from 'prop-types';
// import Painting from './Painting/Painting';

function Section({ title, children }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
