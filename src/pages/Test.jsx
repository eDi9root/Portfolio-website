import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Type from './Type'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let [title, changeTitle] = useState('blog');
  let [title2, changeTitle2] = useState(['blog', 'a', 'b']);

  let [like, changeLike] = useState(0);

  let post = 'Hello world!';

  return (
    <>

        <div className="Test">
            <h4> { post } </h4> {/* Can use {} anything to put (function, variable) */}
            
            <div>
                <h4> { title } <span onClick={()=>{ changeLike(like + 1) }}>❤</span>
                { like }</h4>
            </div>
            <div>
                <Type />
            </div>
        </div>
        
      

    </>
  )
}

export default App
