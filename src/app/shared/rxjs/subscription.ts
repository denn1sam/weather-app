import { Subscription } from 'rxjs';

export class WeatherAppSubscription extends Subscription {
  public set sink(subscription: Subscription) {
    this.add(subscription);
  }
}
