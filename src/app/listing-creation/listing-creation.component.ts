import { Component, OnInit } from '@angular/core';
import { Listing } from '../type';
import { ListingsService } from '../services/listings.service';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-listing-creation',
  imports: [FormsModule, RouterModule],
  templateUrl: './listing-creation.component.html',
  styleUrl: './listing-creation.component.css'
})
export class ListingCreationComponent implements OnInit{
  newListing:Listing = {
    id : undefined,
    name : "",
    age : 0
  };

  constructor(private listingsService:ListingsService, private router:Router){}

  ngOnInit(): void {
    
  }

  createNewListing():void{
    this.listingsService.createListing(this.newListing).subscribe(listing => {
      this.newListing = listing;
      this.router.navigateByUrl('/listings');
    });
    
  }
}
