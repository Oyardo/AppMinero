import { Component, OnInit } from '@angular/core';
//servicio
import { MinerService } from '../../../services/miner.service';
import { ToastrService } from 'ngx-toastr';
//clase del producto
import { Miner } from '../../../models/miner';
//import { element } from '@angular/core/src/render3';
//import { from } from 'rxjs';

@Component({
  selector: 'app-miner-list',
  templateUrl: './miner-list.component.html',
  styleUrls: ['./miner-list.component.css']
})
export class MinerListComponent implements OnInit {
minerList: Miner[];
  constructor(
    private minerService: MinerService,
    private  toastr: ToastrService
  ) { }

  ngOnInit() {
    this.minerService.getMiners()
    .snapshotChanges()
    .subscribe(item => {
      this.minerList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.minerList.push(x as Miner);
      });
    }); 
  }
onEdit(miner: Miner){
this.minerService.selectedMiner = Object.assign({},miner);
}
onDelete($key: string){
  if(confirm('¿Esta seguro de eliminar este minero registrado?')){
    this.minerService.deleteMiner($key);
    this.toastr.success('Operacion terminada','Trabajador minero eliminado');

  }
    }
}
