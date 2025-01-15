import { Routes } from '@angular/router';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingDetailsPageComponent } from './listing-details-page/listing-details-page.component';
import { ListingModifComponent } from './listing-modif/listing-modif.component';
import { ListingCreationComponent } from './listing-creation/listing-creation.component';

export const routes: Routes = [
    {path:'', redirectTo : "/listings", pathMatch : "full"},
    {path : "listings", component : ListingsPageComponent},
    {path : "listings/:id", component : ListingDetailsPageComponent},
    {path : "listing-modif/:id", component : ListingModifComponent},
    {path : "listing-creation", component : ListingCreationComponent},
];
