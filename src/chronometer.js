class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (printTimeCallback) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        printTimeCallback();
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 1000);
    }
  }



  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // 数値を2桁の文字列に変換するメソッド
    // 1桁の場合は先頭に0を追加する
    return value < 10 ? `0${value}` : `${value}`;
  }

  // ＊条件演算子（ternary operator）
  // condition ? expression1 : expression2
  // conditionがtrueの場合、式expression1が評価されます。
  // conditionがfalseの場合、式expression2が評価されます。
  // つまり、value < 10がtrueである場合、式は0を含む文字列（0${value}）になります。それ以外の場合、式は元のvalueの文字列になります（${value}）。
  // これにより、computeTwoDigitNumberメソッドは、与えられた数値が1桁の場合にその前に0を追加した2桁の文字列を返すようになります。

  // ＊Conditional operator (ternary operator)
  // condition ? expression1 : expression2
  // If the condition is true, expression1 is evaluated.
  // If the condition is false, expression2 is evaluated.
  // In other words, if value < 10 is true, the expression becomes a string including 0 (${value}). Otherwise, it remains the original value as a string (${value}).
  // This ensures that the computeTwoDigitNumber method returns a two-digit string with a leading 0 if the provided number is a single digit


  stop() {
    clearInterval(this.intervalId);
  }


  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }

}

