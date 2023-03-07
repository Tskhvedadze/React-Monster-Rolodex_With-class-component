import { Component } from 'react'

import './App.css'

class App extends Component {
    constructor() {
        super()

        this.state = {
            monsters: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => this.setState(() => ({ monsters: users })))
    }

    render() {
        const filteredMonsters = this.state.monsters.filter((monster) =>
            monster.name.toLowerCase().includes(this.state.searchField),
        )

        return (
            <div className='App'>
                <input
                    className='search-box'
                    type='search'
                    placeholder='search monsters'
                    onChange={(e) => {
                        const searchField = e.target.value.toLowerCase()
                        this.setState(() => {
                            return { searchField }
                        })
                    }}
                />
                {filteredMonsters.map((monster) => {
                    return (
                        <div key={monster.id}>
                            <h1>{monster.name}</h1>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default App
