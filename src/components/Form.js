import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
    let dataArray = this.state.submmitedData.concat(formData)
    this.setState({submmitedData: dataArray})
  }

  listOfSubmissions = () => {
    return this.state.submmitedData.map(data => {
      return <div><span>{data.firstName}</span><span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <>
      <form>
        <input type="text" name="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
        <input type="submit" />
      </form>
      {this.listOfSubmissions()}
      </>
    )
  }
}

export default Form;