import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/Pet';
import { PetService } from '../pet.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pet',
  imports: [CommonModule],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css',
})
export class PetComponent implements OnInit {
  pets: Pet[] = [];
  constructor(private petService: PetService) {}
  ngOnInit(): void {
    this.getPets();
  }
  getPets() {
    this.petService.getPets().subscribe((p) => (this.pets = p));
  }
}
