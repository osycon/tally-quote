import React, { Component } from 'react';
import './LifeProTips.css';

const subreddit = `LifeProTips`;
const url = `https://www.reddit.com/r/${subreddit}/hot/.json?limit=100`;

class LifeProTips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tips: []
    };
  }

  componentDidMount() {
    fetch(url).then(response => response.json()).then(data => {
      this.setState({
        tips: data.data.children
      });
    });
  }

  render() {
    return (
      <section className="LPT">
        <h1 className="LPT-title"> LifeProTips </h1>
        <article className="LPT-tip">
          <blockquote className="LPT-text">
            <p>
              {this.state.tips[this.props.randomNumber] ? this.state.tips[this.props.randomNumber].data.title : ``}
            </p>
          </blockquote>
        </article>
      </section>
    );
  }
}

export default LifeProTips;
