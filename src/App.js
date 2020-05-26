
import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import Scores from './components/Scores.js'
import Card from './components/Card';

var Suits = ['H', 'D', 'C', 'S'];
var CARDS = [];
for (var i = 2; i < 15; i++) {
    for (var j = 0; j < Suits.length; j++) {
        CARDS.push(Suits[j]+ i);
    }
}
//console.log

export default class App extends Component {

  constructor(props){    //sets the players up and creates arrays to keep track of cards.
    super (props);
    this.state={
      playerOne: {
        'wins': 0,
        'cards': [],
        'cardPlayed' : ''
    },
    playerTwo: {
        'wins': 0,
        'cards' : [],
        'cardPlayed' : '',
    },
    cardsToWin: []
}
    };
  

  getInitialState (){        //sets the players up and creates arrays to keep track of cards.
    return {
        playerOne: {
            'wins': 0,
            'cards': [],
            'cardPlayed' : ''
        },
        playerTwo: {
            'wins': 0,
            'cards' : [],
            'cardPlayed' : '',
        },
        cardsToWin: []
    }
}

distributeCards (){
    let deck = this.shuffle(CARDS);
    for (let i  = 0; i < deck.length; i++) {
        if (i % 2 == 0) {
            this.state.playerOne.cards.push(deck[i]);
        }else{
            this.state.playerTwo.cards.push(deck[i]);
        }
    }

    this.setState(this.state);
   // this.pickCards();  ? function to automaticaly have computer pick a card after player has
}


shuffle(cards){
  let currIdx = cards.length, temporaryValue, randomIdx;

  while(0 !== currIdx){
      randomIdx = Math.floor(Math.random() * currIdx);
      currIdx -= 1;

      temporaryValue = cards[currIdx];
      cards[currIdx] = cards[randomIdx];
      cards[randomIdx] = temporaryValue;
  }

  return cards;
}

handleMove(){
  //let _self = this;
  let playerOneCard = this.state.playerOne.cards.shift();
  let playerTwoCard = this.state.playerTwo.cards.shift();
  this.state.playerOne.cardPlayed = playerOneCard;
  this.state.playerTwo.cardPlayed = playerTwoCard;
  this.setState(this.state);
  // setTimeout(function(){
  //     _self.compareValues();
  // }, 3000);
}

  render (){
    return (
        <div className='App' >
            <Scores 
                scorePlayerOne={this.state.playerOne.wins} 
                scorePlayerTwo={this.state.playerTwo.wins} />

            <Card
              cardPulledOne={this.state.playerOne.cardPlayed}
              cardPulledTwo={this.state.playerTwo.cardPlayed} />  
            {/* <div className='playerBoard'>
                <PlayerZone id='one' name="Player One" numberOfCards={this.state.playerOne.cards.length} cards={this.state.playerOne.cards} />
                <Board 
                    playerOneCard={this.state.playerOne.cardPlayed} 
                    playerTwoCard={this.state.playerTwo.cardPlayed}/>
                <PlayerZone id='two' name="Player Two" numberOfCards={this.state.playerTwo.cards.length} cards={this.state.playerTwo.cards} />
                <p className='title'>THIS IS <b>WAR</b></p>
            </div> */}
      </div>
    );
    }
  }


