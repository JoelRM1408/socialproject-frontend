import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private docintFormSource = new BehaviorSubject<any>({});
  docintForm = this.docintFormSource.asObservable();

  updatedocintForm(data: any) {
    this.docintFormSource.next(data);
  }

  getdocintFormValue(): any {
    return this.docintFormSource.getValue();
  }

}
