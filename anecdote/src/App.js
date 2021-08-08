
import React, {useState} from 'react'
const Title = () =><h1>Anecdotes of the day</h1>
const AnecdotesWithHighestVote = ({points,anecdotes}) =>{
  let highestVote = points[0]
  let indexOfHighestVote = 0
  for(let i =0; i<points.length; i++){
    
    if(points[i]> highestVote){
      highestVote = points[i]
      indexOfHighestVote = i
      
    }
  }
  return(
    <div>
      <h1>Anecdotes with the most vote</h1>
      <p> {anecdotes[indexOfHighestVote]}</p>
      <p>has {highestVote} vote</p>

    </div>
   
  )

}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const setSelectedValue =() => setSelected( Math.floor(Math.random()*7)) 
 
  const [points,setPoints] = useState(new Array(7).fill(0))
  const vote = ()=>{
    const voteCount = [...points]
    voteCount[selected] += 1 
    setPoints(voteCount)
    
  }

  
  return (
    <div>
      <Title/>
      {anecdotes[selected]}
      <p>has {points[selected]} vote</p>

      <p>
        <button onClick = {vote}>vote</button>
        <button onClick = {setSelectedValue}>next anecdotes</button>
      </p>
      <AnecdotesWithHighestVote points = {points} 
      anecdotes = {anecdotes}
      />
     
    </div>
  )
}


export default App;
