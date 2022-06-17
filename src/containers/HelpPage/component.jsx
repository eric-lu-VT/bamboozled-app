import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import styles from './styles';
import Accordion from '../../components/Accordion';

const HelpPage = ({
  
}) => {
  const data = [
    {
      title: 'Overview',
      data: 'Are you a good bluffer? Most people aren\’t. Everyone has a \‘tell\’, ' +
      'you just have to find out what it is. In this party style bluffing game, you ' +
      'must decide if another player\’s roll is really believable or if you are being ' +
      'BAMBOOZLED! Either way, you\’re going to have to call out the bluffers ' +
      'and be the last one standing to become the ultimate BAMBOOZLER!'
    },
    {
      title: 'Objective',
      data: 'Roll the dice and tie or beat the previous player\'s score. As the dice' +
      'score goes up, the chance of actually rolling a higher score gets less ' +
      'and less likely. Your job is to know when to call out the bluffers and when ' +
      'to believe them. Exposed bluffers get a strike, but if they were telling the ' +
      'truth, you get a strike! 3 strikes and you\'re out! Last one standing is the ' + 
      'winner!'
    },
    {
      title: 'Playing a Round',
      data: 'The player starts by rolling two dice. The player will then secretly ' +
      'look atnthe dice and choose a dice score by using the two dice in either order. ' +
      'For example, If the dice showed a 4 and a 3, you could choose the dice ' +
      'score to be 34 or 43. The ability to choose the order is for flexibility to ' +
      'develop your strategy. As you play, it will become more clear why you ' + 
      'may want to choose a lower score.\nAfter deciding on a dice score, you ' +
      'will then keep the dice hidden, pass the dice under the cup to the next ' +
      'player and declare your dice score. You may either declare the true dice score, ' +
      'or you may bluff.\nThe next player (Player 2) must do 1 of 2 things before ' +
      'looking at the dice and taking their turn:\nACCEPT the score as stated by ' +
      'Player 1 and continue the game by taking their turn, rolling the dice, and ' +
      'declaring a score that ties or beats the dice score accepted.\nOR\nCALL A BLUFF ' +
      'and declare that Player 1 is bluffing. Reveal what was actually rolled. ' + 
      'If Player 1 was bluffing, Player 1 takes a strike card. If Player 1 was ' +
      'telling the truth, then Player 2 takes a strike card.\nOnce any player ' +
      'gets a strike card, the dice score resets to zero (0). The player receiving ' +
      'the strike card starts the next round by taking their turn. Once a player ' +
      'receives three (3) strike cards, they are out of the game, and the next ' +
      'player continues the game by taking their turn.' 
    },
    {
      title: 'Dice Scores',
      data: 'On each turn the dice score must either tie or go higher than the previous ' +
      'player. The dice score doesn\’t reset until a player gets a strike or uses a ' +
      'Fresh Start or My Bad card.\nThe values are listed below in 3 groups from lowest ' +
      'to highest dice scores.\nNON-MATCHING dice faces are the lowest type of roll ' +
      'and start at 13 and go up to 65. Any non-matching dice are beaten by Doubles ' +
      'or Jackpot.\nDOUBLES, or matching dice, are higher than any non-matching dice score, ' +
      'but don\’t beat Jackpot. Doubles start at double 1\’s and go up to double 6s.\n' +
      'JACKPOT, or 21, beats everything and is the best dice score in the game!'
    },
    {
      title: 'How to Win',
      data: 'Once a player obtains three (3) strike cards, they are out of the game. ' +
      'The last player standing is the winner!'
    },
    {
      title: 'Bluff  / Bamboozle',
      data: 'The player who rolled the dice may choose to BLUFF by declaring a ' +
      'score that does not match what they rolled.\nThe player receiving the dice ' +
      'is BAMBOOZLED if they accept the dice when the previous player was bluffing. ' + 
      'When a player successfully BAMBOOZLES another player, they get to draw an ' + 
      'action card.\nPlayers MAY bluff during any turn, even if they are starting ' +
      'the round and the dice score is zero (0). A player MUST bluff if they don\’t ' +
      'tie or beat the score from the previous player.'
    },
    {
      title: 'Action Cards',
      data: 'Each player starts the game with one (1) action card, but can earn ' + 
      'additional cards by BAMBOOZLING other players.\nThere are two types of action cards:' +
      '\n1. CARDS USED BEFORE a player has rolled the dice. These cards are used ' +
      'immediately and are discarded after use.\n2. CARDS USED AFTER a player has rolled ' +
      'the dice. These cards are not revealed immediately when used. Players use these ' +
      'cards to change the score of what they rolled, but do not reveal or discard them ' +
      'unless a bluff is called.'
    }
  ];
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {
          data.map((e, idx) => {
            return <Accordion key={idx} title={e.title} data={e.data} />
          })
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default HelpPage;
