import { GameHighScore } from './index';
export declare type GameHighScoresUnion = GameHighScores;
/** Contains a list of game high scores */
export interface GameHighScores {
    _: 'gameHighScores';
    /** A list of game high scores */
    scores: GameHighScore[];
}
