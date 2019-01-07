import { Component, OnInit } from '@angular/core';
//importar para reset
import { NgForm } from '@angular/forms';
//Importo el selectedMiner para salir
import { MinerService } from '../../../services/miner.service';
import { ToastrService } from 'ngx-toastr';
//import { Miner } from 'src/app/models/miner';
//importo la classe
import { Miner } from '../../../models/miner';
@Component({
  selector: 'app-miner',
  templateUrl: './miner.component.html',
  styleUrls: ['./miner.component.css']
})
export class MinerComponent implements OnInit {

  constructor(
    private minerService: MinerService,
    private toastr: ToastrService
    ){}

  ngOnInit() {
   this.minerService.getMiners(); 
   this.resetForm();
  }
onSubmit(minerForm: NgForm)
  {
 if(minerForm.value.$key == null)
      this.minerService.insertMiner(minerForm.value)
  else
      this.minerService.updateMiner(minerForm.value);
      this.resetForm(minerForm);
      this.toastr.success('Operación terminada',' Datos actualizados');
  }
resetForm(minerForm?: NgForm)
{
  if(minerForm != null)
  minerForm.reset();
  this.minerService.selectedMiner = new Miner();
}
}
