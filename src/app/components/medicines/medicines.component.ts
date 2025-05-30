import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { Messages } from 'src/app/models/messages';
import { HttpService } from 'src/app/services/http.service';
import { MappingService } from 'src/app/services/mapping.service';
import { MedicineService } from 'src/app/services/medicine.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss'],
  imports: [IonicModule, CommonModule, ReactiveFormsModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MedicinesComponent implements OnInit {
  medicineModel: any = {}
  wmessage!: string;
  isSuccess: boolean = false;
  medicineForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    completion: new FormControl('', [Validators.required]),
  })
  constructor(private http: HttpService, private mapping: MappingService, private router: Router, private sharedJson: SharedDataService,
    private toastController: ToastController, private message: Messages, private navCtrl:NavController, private mediService:MedicineService
  ) { }

  ngOnInit() {
    this.medicineModel = this.http.getModel(this.mapping.getMedicineModelUrl).subscribe((res) => {

      this.medicineModel = res
    })
  }
  onSubmit() {
    debugger
    if (this.medicineForm.valid) {
      this.isSuccess = true
      this.mediService.addMedicine(this.medicineForm.value).subscribe((res)=>{
        if(res){
          let model = {MEDICINE_ID:'',MEDICINE_NAME:'',TIME_TO_TAKE:'',COMPLETION:''};
          model.MEDICINE_ID = res;
          model.MEDICINE_NAME = this.medicineForm.value.name!;
          model.TIME_TO_TAKE=this.medicineForm.value.time!;
          model.COMPLETION=this.medicineForm.value.completion!;

          this.sharedJson.medicine.push(model);
          this.setToast(this.message.successMessage);
          setTimeout(() => {
            this.goBack();
          }, 2000);
        }
      })

    } else {
      this.isSuccess = false
      this.setToast(this.message.missingFields)
    }
  }
  goBack() {
    this.navCtrl.back()
  }
  async setToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      mode: 'ios',
      color: this.isSuccess ? 'success' : 'danger'
    });
    await toast.present();

  }
  
}
