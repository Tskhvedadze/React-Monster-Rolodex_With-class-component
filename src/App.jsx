import { useState } from 'react'

// import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

import './App.css'

const App = () => {
    const [searchField, setSearchField] = useState('')

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase()
        setSearchField(searchFieldString)
    }

    return (
        <div className='App'>
            <h1 className='app-title'>Monsters Rolodex</h1>
            <SearchBox
                className='monsters-search-box'
                placeholder='search monsters'
                onChangeHandler={onSearchChange}
            />

            {/* <CardList monsters={filteredMonsters} /> */}
        </div>
    )
}

// class App extends Component {
//     constructor() {
//         super()

//         this.state = {
//             monsters: [],
//             searchField: '',
//         }
//     }

//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((res) => res.json())
//             .then((users) => this.setState(() => ({ monsters: users })))
//     }

//     onSearchChange = (e) => {
//         const searchField = e.target.value.toLowerCase()
//         this.setState(() => {
//             return { searchField }
//         })
//     }

//     render() {
//         const { monsters, searchField } = this.state
//         const { onSearchChange } = this

//         const filteredMonsters = monsters.filter(({ name }) =>
//             name.toLowerCase().includes(searchField),
//         )

//         return (
//             <div className='App'>
//                 <h1 className='app-title'>Monsters Rolodex</h1>
//                 <SearchBox
//                     className='monsters-search-box'
//                     placeholder='search monsters'
//                     onChangeHandler={onSearchChange}
//                 />

//                 <CardList monsters={filteredMonsters} />
//             </div>
//         )
//     }
// }

export default App
