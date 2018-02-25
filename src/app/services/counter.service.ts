export class CounterService {

  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  incrementActiveToInactiveCounter() {
    this.activeToInactiveCounter++;
    console.log("The active to inactive count is: " + this.activeToInactiveCounter);
  }

  incrementInactiveToActiveCounter() {
    this.inactiveToActiveCounter++;
    console.log("The inactive to active count is: " + this.inactiveToActiveCounter);
  }
}
