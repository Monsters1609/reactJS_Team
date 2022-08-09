import './navbar.css';
// import {arr,arrayUser} from "./Array";
export default function Navbar(){
    return(
        <div id="menu">
            <div id='items'>
                <ul className='listItemsMenu'>
                    <li className='itemMenu'>
                        <a className='linkItem logoHome' href="http://localhost:3000/">
                            <img className='logo' src="../redStar.svg" alt="" />
                        </a>
                    </li>
                    <li className='itemMenu'>
                        <a className='linkItem btnHome' href="http://localhost:3000/">Home</a>
                    </li>
                    <li className='itemMenu'>
                        <a className='linkItem' href=" http://10.61.21.67:3000">Shop</a>
                    </li>
                    <li className='itemMenu'>
                        <a className='linkItem' href=" http://10.61.21.67:3000">Sales</a>
                    </li>
                    <li className='itemMenu'>
                        <a className='linkItem' href=" http://10.61.21.67:3000">
                            Advise<i className="bi bi-caret-down"></i>
                        </a>
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                    </li>
                    <li className='itemMenu'>
                        <a className='linkItem' href=" http://10.61.21.67:3000">Introduce</a>
                    </li>
                </ul>
            </div>
            <div id='search'>
                <form method='Get' id='formSearch' >
                    <input type="search" name="" placeholder='Search' />
                    <button type="button">Filter</button>
                </form>
            </div>
            <div id='login'>
                <button type="button">login</button>
            </div>
            <div id='setting'>
                <i id="iconSetting" className="bi bi-gear-wide-connected"></i>
            </div>
        </div>
    )
    
}