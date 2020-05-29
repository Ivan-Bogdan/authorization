import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createItem } from "../../actions/itemActions";
import classnames from "classnames";

class Item extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      department: "",
      price: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      title: this.state.title,
      author: this.state.author,
      department: this.state.department,
      price: this.state.price
    };

    this.props.createItem(newItem, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Item</b> add
              </h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.title}
                  error={errors.title}
                  id="title"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <label htmlFor="title">Title</label>
                <span className="red-text">{errors.title}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.author}
                  error={errors.author}
                  id="author"
                  type="text"
                  className={classnames("", {
                    invalid: errors.author
                  })}
                />
                <label htmlFor="author">Author</label>
                <span className="red-text">{errors.author}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.department}
                  error={errors.department}
                  id="department"
                  type="text"
                  className={classnames("", {
                    invalid: errors.department
                  })}
                />
                <label htmlFor="password">Department</label>
                <span className="red-text">{errors.department}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.price}
                  error={errors.price}
                  id="price"
                  type="text"
                  className={classnames("", {
                    invalid: errors.price
                  })}
                />
                <label htmlFor="price">Price</label>
                <span className="red-text">{errors.price}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  createItem: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createItem}
)(withRouter(Item));