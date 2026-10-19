//Nuevo modelo 30/09/2026
export interface CombatStyleModel {
    id: number;
    image: string;
    description: string;
    // Algunos estilos comparten técnica con más de un personaje.
    combat_style_character: CombatStyleCharacter[];
}


// Datos de cada personaje asociado a un estilo.
export interface CombatStyleCharacter{
    id: number;
    name: string;
    description: string;
}