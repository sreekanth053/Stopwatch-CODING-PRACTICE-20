// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0, isStart: false}

  componentWillUnmount = () => {
    this.clearTimer()
  }

  clearTimer = () => clearInterval(this.timerId)

  timer = () => {
    this.setState(prevState => {
      if (prevState.seconds === 59) {
        return {minutes: prevState.minutes + 1, seconds: 0}
      }
      return {seconds: prevState.seconds + 1}
    })
  }

  startTime = () => {
    const {isStart} = this.state
    if (isStart === false) {
      this.setState({isStart: true})
      this.timerId = setInterval(this.timer, 1000)
    }
  }

  stopTime = () => {
    this.setState({isStart: false})
    this.clearTimer()
  }

  resetTime = () => {
    this.clearTimer()
    this.setState({minutes: 0, seconds: 0, isStart: false})
  }

  render() {
    const {minutes, seconds} = this.state

    const formatTime = () => {
      const minutesInStringFormat = minutes > 9 ? minutes : `0${minutes}`
      const secondsInStringFormat = seconds > 9 ? seconds : `0${seconds}`
      const formatResult = `${minutesInStringFormat}:${secondsInStringFormat}`
      return formatResult
    }

    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stopwatch-container">
          <div className="card-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch-image"
            />
            <p className="name">Timer</p>
          </div>
          <h1 className="time">{formatTime()}</h1>
          <div className="buttons">
            <button
              className="start-button"
              type="button"
              onClick={this.startTime}
            >
              Start
            </button>
            <button
              className="stop-button"
              type="button"
              onClick={this.stopTime}
            >
              Stop
            </button>
            <button
              className="reset-button"
              type="button"
              onClick={this.resetTime}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
