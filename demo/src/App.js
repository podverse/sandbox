import React from 'react';
import './App.css';
import { TestModal } from './TestModal';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hasHeightWidth, setHasHeightWidth] = React.useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const toggleHasHeightWidth = () => {
    setHasHeightWidth(!hasHeightWidth)
  }

  const heightWidthButtonText = hasHeightWidth ?
    'Modal has height and width' : 'Modal does not have height and width'

  return (
    <div className="App">
      <h3>Testing tab behavior</h3>
      <p>
        When modal displays it can't be tabbed into.
        This only happens when the modal wrapper has height and width of 0.
        Once the modal wrapper is given a height and width you can tab into the modal.
      </p>
      <button onClick={toggleModal}>Toggle modal</button>
      <br /><br />
      <button onClick={toggleHasHeightWidth}>{heightWidthButtonText}</button>
      <TestModal
        hasHeightWidth={hasHeightWidth}
        isOpen={isOpen}
        setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
