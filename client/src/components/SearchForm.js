import React from 'react'
import API from '../utils/API'

class SearchForm extends React.Component {

    state = {
        topic: '',
        begin: '',
        end: ''
    }

    handleTopicChange = event => {
        this.setState({topic: event.target.value})
        console.log(this.state.topic)
    }

    handleBeginChange = event => {
        this.setState({begin: event.target.value})
        console.log(this.state.topic)
    }

    handleEndChange = event => {
        this.setState({end: event.target.value})
        console.log(this.state.topic)
    }

    handleSubmit = event => {
        event.preventDefault();
        API.getSearch(this.state.topic, this.state.begin, this.state.end)
    }
    

    render() {
       return ( <div class="card container mb-5 col-lg-8">
            <div class="card-header text-center bg-secondary text-white">
                Search
        </div>

            <div class="card-body">

                <form>
                    <div class='form-group'>
                        <p for='topicField' class='text-center'>Topic</p>
                        <input type='text' class='form-control'
                        onChange={this.handleChange}
                        topic={this.state.topic}></input>
                    </div>
                    <div class='form-group'>
                        <p for='topicField' class='text-center'>Start Year</p>
                        <input type='text' class='form-control'></input>
                    </div>
                    <div class='form-group'>
                        <p for='topicField' class='text-center'>End Year</p>
                        <input type='text' class='form-control'></input>
                    </div>
                    <div class='text-center'>
                        <button type='submit' class='text-center btn btn-lg btn-secondary'>Search</button>
                    </div>
                </form>
            </div>
        </div>
       )
    }

}

export default SearchForm