import { Injectable } from '@angular/core';

export interface IBin {
  id?: string;
  latitude?: number;
  longitude?: number;
  status?: Status;
  person?: string;
}

export class Bin implements IBin {

  constructor(
    public id?: string,
    public latitude?: number,
    public longitude?: number,
    public status?: Status,
    public person?: string
  ) { }
}

export enum Status {
  NotResponding,
  Filling,
  Filled
}

