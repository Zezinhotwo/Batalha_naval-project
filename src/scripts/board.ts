interface positions {
  b1: [[0, 0], [1, 0], [2, 0], [3, 0]];
  b2: [[9, 6], [9, 7], [9, 8]];
  b3: [[5, 4], [5, 5]];
  b4: [[3, 1], [3, 2]];
  b5: [[3, 1], [3, 2]];
  b6: [[3, 1], [3, 2]];
  b7: [[3, 1], [3, 2]];
  b8: [[3, 1], [3, 2]];
  b9: [[3, 1], [3, 2]];
  b10: [[3, 1], [3, 2]];
}

export default class Board {
  constructor() {}
  public matriz(): null[][] {
    const board: null[][] = [
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
    ];
    return board;
  }
  public random(): positions {
    return;
  }
}

// const play1 = new Borad().matriz;
// const play2 = new Borad();
