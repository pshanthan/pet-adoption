import { Component } from '@angular/core';
import { Pet } from '../../models/Pet';
import { PetService } from '../pet.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pet',
  imports: [CommonModule],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css',
})
export class PetComponent {
  pets: Pet[] = [];
  constructor(private petService: PetService) {}
  getPet() {
    this.petService.getPets().subscribe((p) => (this.pets = p));
  }
}
