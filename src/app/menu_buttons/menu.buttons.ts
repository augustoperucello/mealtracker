import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatFormField} from '@angular/material/form-field';

//datePicker using moment.js implementation
import {FormControl} from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
const moment = _rollupMoment || _moment;
//------------------------------------------

//------------- Formats for Datepicker --------------
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    //changes to the way the date is going to be displayed must be done here
    dateInput: 'D, MMM, dddd',
    //------------------------------------------------------------------
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
//________________________________________________________
export const MY_FORMATS_HOUR = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    //changes to the way the date is going to be displayed must be done here
    dateInput: 'HH',
    //------------------------------------------------------------------
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'menu-buttons-add_new_meal',
  templateUrl: 'menu.buttons.html',
  styleUrls: ['menu.buttons.scss'],
})
export class PopupButtons {

  constructor(public dialog: MatDialog) {}

  openDialogAnm(): void {
    const dialogRef = this.dialog.open(PopupAddNewMealConteudo, {
      width: '70vh',
      height: '90vh',
    });
}

openDialogRf(): void {
  const dialogRef = this.dialog.open(PopupRegisterFoods, {
    width: '70vh',
    height: '90vh',
  });
}

openDialogMf(): void {
  const dialogRef = this.dialog.open(PopupManageFoods, {
    width: '70vh',
    height: '90vh',
  });
}

openDialogPf(): void {
  const dialogRef = this.dialog.open(PopupPlanFoods, {
    width: '70vh',
    height: '90vh',
  });
}
}

@Component({
  selector: 'popup_anm_conteudo',
  templateUrl: 'popup_anm_conteudo.html',
  styleUrls: ['popup_anm_conteudo.scss'],
})
export class PopupAddNewMealConteudo {

  constructor(
    public dialogRef: MatDialogRef<PopupAddNewMealConteudo>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    closeDialog(): void {
      this.dialogRef.close();
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'popup_rf',
  templateUrl: 'popup_rf.html',
  styleUrls: ['popup_rf.scss'],
})
export class PopupRegisterFoods {

  constructor(
    public dialogRef: MatDialogRef<PopupRegisterFoods>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    closeDialog(): void {
      this.dialogRef.close();
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'popup_pf',
  templateUrl: 'popup_pf.html',
  styleUrls: ['popup_pf.scss'],
  //------------PROVIDERS FOR DATEPICKER--------------------
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  //--------------------------------------------------
})
export class PopupPlanFoods {

  constructor(
    public dialogRef: MatDialogRef<PopupPlanFoods>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    closeDialog(): void {
      this.dialogRef.close();
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
  //------------------DATEPICKER-----------------
  date = new FormControl(moment());
  //----------------------------------------------
}

@Component({
  selector: 'popup_mf',
  templateUrl: 'popup_mf.html',
  styleUrls: ['popup_mf.scss'],
})
export class PopupManageFoods {

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PopupManageFoods>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    closeDialog(): void {
      this.dialogRef.close();
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openDialogFd(): void {
    const dialogRef = this.dialog.open(PopupFoodDetails, {
      width: '50vh',
      height: '70vh',
    });
  }

  openDialogCd(): void {
    const dialogRef = this.dialog.open(PopupCategoryDetails, {
      width: '50vh',
      height: '70vh',
    });
  }

}

@Component({
  selector: 'popup_fd',
  templateUrl: 'popup_fd.html',
  styleUrls: ['popup_fd.scss'],
})
export class PopupFoodDetails {

  constructor(
    public dialogRef: MatDialogRef<PopupFoodDetails>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    closeDialog(): void {
      this.dialogRef.close();
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'popup_cd',
  templateUrl: 'popup_cd.html',
  styleUrls: ['popup_cd.scss'],
})
export class PopupCategoryDetails {

  constructor(
    public dialogRef: MatDialogRef<PopupCategoryDetails>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    closeDialog(): void {
      this.dialogRef.close();
    }
  onNoClick(): void {
    this.dialogRef.close();
  }

  foods: string[] = ['Category Example 1','Category Example 2','Category Example 3','Category Example 4'];
}
