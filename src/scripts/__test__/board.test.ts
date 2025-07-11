import { describe, expect, test } from "@jest/globals";
import Board from "../board";

describe("test class Board ", () => {
  const game = new Board();
  test("methodo matriz", () => {
    expect(game.matriz()).toEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });

  test("test methodo addPeças", ()=>{
    expect(game.random()).toBe({
      b1:[[0,0],[1,0],[2,0],[3,0]],
      b2:[[9,6],[9,7],[9,8]],
      b3:[[5,4],[5,5]],
      b4:[[3,1],[3,2]]
    });
  })

});
