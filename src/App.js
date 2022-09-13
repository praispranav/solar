import './App.css';
import { FormStart } from './components/FormStart/formstart.component';
import { PostForm } from './components/PostForm/postform.component';
import { useState } from 'react';
import footer from './assets/footer.png'
import './mediaquery.css';


function App() {
  const [formSubmited, setFormSubmited] = useState(false);
  const [name, setName] = useState('');

  return (
    <div className="App">
      
      {formSubmited? <PostForm name={name} /> : <FormStart setFormSubmited={setFormSubmited} setName={setName} />}

      <footer>
        <div className="bg-green">
          <img src={footer} className="footer-img" />
        </div>

        <div className='footer-links'>
          <div className='small bold logo'>
            <span style={{width: '17px', height: '10px','marg-bottom':'3px','font-size': '11px', 'background-color': '#FB923C', 'border-radius': '100%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> Solar Panel Quotes
          </div>

          <div className='xsmall bold'>Copyright © 2021 | Eruptic Inc.</div>

          <div className='xsmall'>CALIFORNIA PRIVACY | PRIVACY POLICY | TERMS OF USE</div>

        </div>
      </footer>

    </div>
  );
}

export default App;
