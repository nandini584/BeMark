import PropTypes from 'prop-types';

const Section = ({ color, title }) => {
  return (
    <section className={`panel ${color}`}>
      {title}
    </section>
  );
};

Section.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
