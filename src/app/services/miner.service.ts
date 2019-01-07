import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database'
import { Miner } from '../models/miner';
//import { NgModule} from '@angular/core';
@Injectable(
  {  providedIn: 'root'}
  )
export class MinerService {
  minerList: AngularFireList<any>
  selectedMiner: Miner = new Miner();

  constructor( private firebase: AngularFireDatabase) { }

getMiners()
{
  return this.minerList = this.firebase.list('miners')
}
insertMiner(miner: Miner)
{
this.minerList.push({
  ci: miner.ci,
  file: miner.file,
  name: miner.name,
  lastname: miner.lastname
});
}
updateMiner(miner: Miner)
{
  this.minerList.update(miner.$key, {
    ci: miner.ci,
    file: miner.file,
    name: miner.name,
    lastname: miner.lastname
  });
}
deleteMiner($key: string)
{
  this.minerList.remove($key);
}
}
