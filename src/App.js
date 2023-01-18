import React from 'react';
import categoryItemList from "./categories.json";
import Directory from './components/directory/directory.component';

const App = () => {
  return <Directory categoryItemList={categoryItemList} />
}

export default App;
