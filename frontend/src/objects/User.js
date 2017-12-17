import PropTypes from 'prop-types';

export default class User {
    constructor(name) {
        this.name = name;
    }
}

User.propTypes = {
    name: PropTypes.string,
};
