import React from 'react'
import axios from 'axios'
import './App.css'

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  quoteBlock: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: 500,
    height: 300,
  },
  quote: {
    textAlign: 'center',
    fontSize: '2em',
    fontWeight: 'thicker',
  },
  buttonGroup: {
    margin: 10,
    marginTop: 100,
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    color: 'white',
    margin: 5,
    border: 'none',
    borderRadius: 3,
    height: 35,
  },
  a: {
    textDecoration: 'none',
    color: 'white',
  }
}

class App extends React.Component {
  _getRandomColor() {
    const colors = [
      '#F44336', '#E91E63', '#9C27B0', '#673AB7',
      '#3F51B5', '#2196F3', '#4CAF50', '#8BC34A',
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  _fetchQuote() {
    axios.get(`https://api.github.com/zen`)
      .then(response => response.data)
      .then(data => {
        this.setState({
          color: this._getRandomColor(),
          quote: `"${data}"`
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      color: 'white',
    }
    this.fetchQuote = this._fetchQuote.bind(this)
  }

  componentDidMount() {
    this.fetchQuote()
  }

  render() {
    return <div style={Object.assign({}, styles.container, {backgroundColor: this.state.color})}>
      <div style={styles.quoteBlock}>
        <p style={Object.assign({}, styles.quote, {color: this.state.color})}>{this.state.quote}</p>
        <div style={styles.buttonGroup}>
          <button style={Object.assign({}, styles.button, {backgroundColor: this.state.color})}
                  onClick={this.fetchQuote}>new quote
          </button>
          <button style={Object.assign({}, styles.button, {backgroundColor: this.state.color})}>
            <a
              style={styles.a}
              target="_blank"
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(this.state.quote)}`}>
              Tweet
            </a>
          </button>
        </div>
      </div>
    </div>
  }
}

export default App
