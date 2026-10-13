import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/Pet';
import { PetService } from '../pet.service';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormControlName,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-pet',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css',
})
export class PetComponent implements OnInit {
  pets: Pet[] = [];
  petForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    species: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    arrvialDate: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    age: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    adopted: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });
  constructor(private petService: PetService) {}
  ngOnInit(): void {
    this.getPets();
  }
  getPets() {
    this.petService.getPets().subscribe((p) => (this.pets = p));
  }
}
