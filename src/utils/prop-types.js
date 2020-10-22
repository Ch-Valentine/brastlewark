import PropTypes from "prop-types";

export const GNOME = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  hair_color: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  friends: PropTypes.arrayOf(PropTypes.string).isRequired,
  professions: PropTypes.arrayOf(PropTypes.string).isRequired,
};
