import { Component, OnInit } from '@angular/core';
import { Listing } from '../type';
import { ListingsService } from '../services/listings.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-listing-modif',
  imports: [RouterModule, FormsModule],
  templateUrl: './listing-modif.component.html',
  styleUrl: './listing-modif.component.css'
})
export class ListingModifComponent implements OnInit{
  listing?:Listing;
  newListing?:Listing;

  constructor(private router:Router,  private listingsService:ListingsService, private route:ActivatedRoute){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingsService.getOneListing(id!).subscribe(listing => {
        this.listing = listing ;
        this.newListing = {...this.listing};
    } );
    
  }

  onSubmit():void{
    console.log('OK submitted');
    this.listingsService.modifyListing(this.newListing!).subscribe();
    this.router.navigateByUrl('/listings/'+this.newListing?.id);
  }
}
