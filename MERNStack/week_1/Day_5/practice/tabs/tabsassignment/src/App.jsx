import { useState } from 'react'
import './App.css'
import './components/Tabs.css'
import Tabs from './components/Tabs';
import Content from './components/Content';


function App() {
  const [tabs,setTabs] = useState(["tabs 1","tabs 2","tabs 3","tabs 4"]);
  const [content,setContent] = useState('');
  const handler = (tabs)=>{
    console.log(tabs)
    const cont = `${tabs} showing in here`;
    setContent(cont)
  }
  return (
    <>
      <h1>Choose Your Tabs</h1>
      <Tabs tabs={tabs} handler={handler}/>
      <Content  content={content}/>
    </>
  )
}

export default App
