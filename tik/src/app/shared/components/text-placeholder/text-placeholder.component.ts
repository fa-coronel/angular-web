import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, AbstractControl } from '@angular/forms';
import { ErrorStateMatcherService } from '../services/error-state-matcher/error-state-matcher.service';
import { FormControlValidatorService } from '../services/form-control-validator/form-control-validator.service';

@Component({
  selector: 'app-text-placeholder',
  templateUrl: './text-placeholder.component.html',
  styleUrls: ['./text-placeholder.component.sass']
})

export class TextPlaceholderComponent implements OnInit {
  errorMessage: string;
  @Input() placeholderDetail : string;
  @Input() formControl : FormControl;
  @Input() tipDetail: string;
  @Input() validationMessages: { [key: string]: string };

  constructor(private readonly errorStateMatcherService: ErrorStateMatcherService,
              private readonly formControlValidatorService: FormControlValidatorService) { }

  ngOnInit() {
  }

  validateControl() {
    this.errorMessage = this.formControlValidatorService.processMessages(this.formControl, this.validationMessages);
  }
}
