import React from 'react';
import { Toggle } from './components/BareMinimumRequirements/Toggle';
import { Modal } from './components/BareMinimumRequirements/Modal';
import { Tag } from './components/BareMinimumRequirements/Tag';
import { Autocomplete } from './components/AdvancedChallenges/Autocomplete';
import { ClickToEdit } from './components/AdvancedChallenges/ClickToEdit';
import { Tab } from './components/BareMinimumRequirements/Tab';
import './app.css';

const App = () => {
  return (
    <>
      <div id="body">
        <div id='container'>
          <div id='title'>React Custom Component</div>
          <div>
            <div className='sub_title' id="fixed">Modal</div>
            <div className='box'><Modal /></div>
          </div>
          <div>
            <div className='sub_title'>Toggle</div>
            <div className='box'><Toggle /></div>
          </div>
          <div>
            <div className='sub_title'>Tab</div>
            <div className='box'><Tab /></div>
          </div>
          <div>
            <div className='sub_title'>Tag</div>
            <div className='box'><Tag /></div>
          </div>
          <div>
            <div className='sub_title'>Autocomplete</div>
            <div className='box'><Autocomplete /></div>
          </div>
          <div>
            <div className='sub_title'>ClickToEdit</div>
            <div className='box'><ClickToEdit /></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
