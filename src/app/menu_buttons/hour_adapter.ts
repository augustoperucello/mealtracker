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
export const MY_FORMATS_HOUR = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    //changes to the way the date is going to be displayed must be done here
    dateInput: 'HA',
    //------------------------------------------------------------------
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'hour_adapter',
  templateUrl: 'hour_adapter.html',
  styleUrls: ['hour_adapter.scss'],
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

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS_HOUR},
  ],
  //--------------------------------------------------
})
export class HourDisplay {

  //------------------DATEPICKER-----------------
  hour = new FormControl(moment());
  //----------------------------------------------
}
