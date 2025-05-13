// import PropTypes from "prop-types";
import styles from "./Button.module.css";
import { PropTypes } from "prop-types";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

// TODO 안되고 있음
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
