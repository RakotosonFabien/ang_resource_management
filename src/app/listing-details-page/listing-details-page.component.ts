import { Component, OnInit } from '@angular/core';
import { Listing } from '../type';
import { fakeListings } from '../fake_data';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ListingsService } from '../services/listings.service';

@Component({
  selector: 'app-listing-details-page',
  imports: [RouterModule],
  templateUrl: './listing-details-page.component.html',
  styleUrl: './listing-details-page.component.css'
})
export class ListingDetailsPageComponent implements OnInit{
  
  listing?:Listing;

  constructor(
    private route:ActivatedRoute, private listingsService:ListingsService, private router:Router
  ){}

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      console.log('The id is ' + id);
      this.listingsService.getOneListing(id!).subscribe(listing => this.listing = listing);
  }
  deleteListing():void{
    const id = this.listing?.id?.toString();
    this.listingsService.deleteListing(id!).subscribe(val => this.router.navigateByUrl('/listings'));
  }
}
