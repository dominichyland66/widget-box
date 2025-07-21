import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppState } from './app-state.model';

@Injectable({ providedIn: 'root' })
export class AppStateService {
  private _state = new BehaviorSubject<AppState>({});
  readonly state$: Observable<AppState> = this._state.asObservable();

  private setState(patch: Partial<AppState>) {
    this._state.next({ ...this._state.getValue(), ...patch });
  }

setUserDetails(details: { name: string; age: number }) {
    this.setState({ userDetails: details });
  }

  setPostcode(postcode: string) {
    this.setState({ postcode });
  }

  setSelectedProduct(product: string) {
    this.setState({ selectedProduct: product });
  }

  setLoanResult(result: AppState['loanResult']) {
    this.setState({ loanResult: result });
  }
}
