import React from 'react'
import { reverse } from 'ramda'
import moduleA from 'moduleA'

const App = () => <div>{reverse(moduleA)}</div>

export default App

