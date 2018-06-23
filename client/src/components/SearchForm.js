import React from 'react'

const SearchForm = () => (

    <div class="card container mb-5 col-lg-8">
        <div class="card-header text-center bg-secondary text-white">
            Search
        </div>

        <div class="card-body">

            <form>
                <div class='form-group'>
                    <p for='topicField' class='text-center'>Topic</p>
                    <input type='text' class='form-control'></input>
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

export default SearchForm