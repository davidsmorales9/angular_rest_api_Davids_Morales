export interface CharacterModel {
  id: number;
  name: string;
  description: string;
  img: string;
  combatStyles?: string[];
}
//crear otro modelo con image y descriotion y hacerlo con un Array, con combat_style_character.