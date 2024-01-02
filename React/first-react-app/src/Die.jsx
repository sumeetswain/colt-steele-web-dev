export default function Die({numSides=6}){
    console.log(numSides)
    const dieRoll = Math.floor(Math.random()*numSides) +1
    return <h2>{numSides} sided die Roll : {dieRoll}</h2>
}