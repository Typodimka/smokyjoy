import React from 'react';
import {Header} from "./components/Header";
import ModalContent from "./components/Modal";
import {Content} from "./components/Content";
import {Advantages} from "./components/Advantages";
import {Catalog} from "./components/Catalog";

function App() {
  return (
      <>
          <div >
            <ModalContent />
              <Header />

              <Content />
              <Catalog />
              <Advantages />
        </div>
      </>

  );
}

export default App;
