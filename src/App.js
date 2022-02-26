import cat from './cat.png';
import cat4 from './cat4.jpg';
import './App.css';
import Info from './Info';

function App() {
    return (

        <><div>

            <img src={cat} height="50px" width="50px" alt="Yes" />
            <div className="App">


                <ul>

                    <li>Menu</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                    <li>About</li>


                </ul>
                <hr />
                <Info />

            </div>

            <img src={cat4} height="300px" width="400px" alt="Yes" id="cat4" />
            <br />
            <br />


        </div><p id="copy"><a href="https://www.bestcat.com/">&copy; Cat Health Care Services, 2022</a></p></>
  );
}

export default App;
