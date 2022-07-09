import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group ">
            <span className="input-group-text bg-primary text-white">
              <i className="fa-solid fa-book"></i>
            </span>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Add todo Item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className={
                editItem
                  ? "btn btn-block btn-success d-grid gap-2"
                  : "btn btn-block btn-primary d-grid gap-2"
              }
            >
              {editItem ? "Save Changes" : "Add items"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
