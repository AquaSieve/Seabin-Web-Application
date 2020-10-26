import { Injectable } from '@angular/core';
import { Bin } from '../models/bin.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  selectedBin:Bin;

  constructor() { }
}
