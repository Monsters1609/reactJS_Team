import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom
import{Header} from'../src/header'

function ConnectStart() {
    return (
        <div className='all'>
            <Header/>
            <Container/>
            <Footer/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.querySelector('#root'))
root.render(<ConnectStart/>)


