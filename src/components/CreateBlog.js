import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateBlog extends Component {
  constructor() {
    super();
    this.state = {
      blog: {
        title: '',
        author: '',
        subject: '',
        article: '',
        objectId: Date.now(),
      },
    };
  }

  handleChange = (event) => {
    let updatedBlog = { ...this.state.blog };
    updatedBlog[event.target.name] = event.target.value;

    this.setState({
      blog: updatedBlog,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let emptyBlog = {
      title: '',
      author: '',
      article: '',
      subject: '',
      objectId: Date.now(),
    };

    this.props.handleBlogSubmit(event, this.state.blog);

    this.setState({
      blog: emptyBlog,
    });
  };

  render() {
    return (
      <div style={{ paddingLeft: '30px', margin: '40px' }}>
        <h1>Create Blog:</h1>
        <form onSubmit={this.handleSubmit} className="ui form">
          <div
            className="equal width fields"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <div className="field">
              <label htmlFor="author">Author:</label>
              <div className="ui fluid input">
                <input
                  type="text"
                  name="author"
                  onChange={this.handleChange}
                  value={this.state.blog.author}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="title">Title:</label>
              <div className="ui fluid input">
                <input
                  type="text"
                  name="title"
                  onChange={this.handleChange}
                  value={this.state.blog.title}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="subject">Subject:</label>
              <div className="ui fluid input">
                <input
                  type="text"
                  name="subject"
                  onChange={this.handleChange}
                  value={this.state.blog.subject}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="article">Article:</label>
              <div className="ui fluid input">
                <textarea
                  name="article"
                  id="article"
                  cols="30"
                  rows="10"
                  onChange={this.handleChange}
                  value={this.state.blog.article}
                />
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="ui button green">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateBlog;


CreateBlog.propTypes = {
    handleBlogSubmit: PropTypes.func,
}