
import React, {useState} from 'react'


const Title = () => <h1>give feedback</h1>
const Heading = () => <h1>statistics</h1>
const Button =({handleClick, text})=><button onClick={handleClick}>{text}</button>
const StatisticsLine = ({value, text}) =>{
  
  return(
   
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  
  )
} 
const Statistics = ({good, neutral,bad}) =>{
  let all = good + neutral +bad 
  if (all === 0 ){
    return(
      <p> no feedback given yet </p>
    )
  } 
 
  let average =((good * 1) + (neutral* 0) + (bad * -1))/all
  let positive = (good/all) * 100 
  return(
    <div>
      <table>  
        <tbody> 
          <StatisticsLine value = {good} text ='good'/>
          <StatisticsLine value = {neutral} text ='neutral'/>
          <StatisticsLine value = {bad} text ='bad'/>
          <StatisticsLine value = {all} text ='all'/>
          <StatisticsLine value = {average} text ='average'/>
          <StatisticsLine value = {positive + '%'} text ='positive'/>
        </tbody>  
     </table>
     
    </div>
  )
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const setGoodValue = () => setGood(good + 1)
  const setNeutralValue = () => setNeutral(neutral + 1)
  const setBadValue = () => setBad(bad + 1)
  return (
    <div>
     <Title/>
     <Button handleClick= {setGoodValue} text= 'Good'/>
     <Button handleClick= {setNeutralValue} text= 'Neutral'/>
     <Button handleClick= {setBadValue} text= 'Bad'/>
     <Heading/>
     <Statistics good = {good} neutral = {neutral} bad = {bad}/>
     
    </div>
  )
}

export default App;
