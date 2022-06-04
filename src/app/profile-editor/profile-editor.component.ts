import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent {

  get aliases(): FormArray {
    return this.profileForm.get('aliases') as FormArray;
  }

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      zip: ['', Validators.pattern('[0-9]{4}')]
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  addAlias(): void {
    this.aliases.push(new FormControl(''));
  }

  getControl(path: string): FormControl {
    return this.profileForm.get(path) as FormControl;
  }

  removeAlias(index: number) {
    this.aliases.removeAt(index);
  }
}
