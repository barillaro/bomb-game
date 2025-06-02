/****************************************************************************************
 * Project: Micro:bit Multiplayer Game
 * Description: Core logic and custom extensions for micro:bit multiplayer interaction.
 * 
 * File: master.ts
 * Contains: Functions reserved to coaches
 * 
 * Author: Sebastian Barillaro
 * Date: 2025-06-01
 * Platform: Microsoft MakeCode for micro:bit
 * 
 * Notes:
 * - Designed for use with MakeCode editor (https://makecode.microbit.org/)
 * - Compatible with MakeCode's TypeScript (pxt) environment
 * 
 * License: Reserved for Luxembourg Tech School ASBL
 ****************************************************************************************/
/*INSTRUCTIONS
* Get MASTER power control by pressing A + B buttons at the same time.
- Press A + B buttons to send gameover message
- Touch the logo to send a bomb to a random Target ID
*/

// MASTER control
input.onButtonPressed(Button.AB, function () {
    if (myID >= 0) {
        myID = -1
        basic.showString("MASTER")
    } else if (myID == -1) {
        radio.sendString("gameover")
        basic.showIcon(IconNames.No, 200)
        endGame()
    }
})
