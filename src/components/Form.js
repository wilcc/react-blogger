import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      blog: { title: '', author: '', subject: '', article: '',objectId: Date.now() },
      blogs: [],
    };
  }

  handleChange = (event) => {
    let updatedBlog = { ...this.state.blog };
    updatedBlog[event.target.name] = event.target.value;
    this.setState(
      {
        blog: updatedBlog,
      }
      // ()=>{
      //     console.log(this.state.blog)
      // }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let emptyBlog = {
      title: '',
      author: '',
      article: '',
      subject: '',
      objectId: Date.now()
    };
    let blogState = [...this.state.blogs];
    blogState.unshift(this.state.blog);
    this.setState(
      {
        blogs: blogState,
        blog: emptyBlog,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div style={{ margin: '40px' }}>
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
        <hr />
        {this.state.blogs.map((blog, idx) => {
          const { objectId, title, author, subject, article } = blog;
          return (
            <div
              key={objectId}
              className="ui card"
              style={{ width: '75%', padding: '20px' }}
            >
              <div className="content">
                <div className="header">{title}</div>
                <br />
                <div className="meta">Author: {author}</div>
                <br />
                <div className="meta">Subject: {subject}</div>
                <hr />
                <div className="description">{article}</div>
              </div>
              <div>
                <button
                  className="ui primary button"
                  style={{ margin: '10px 15px' }}
                  onClick={() => {
                    this.onDelete(blog.objectId);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Form;
