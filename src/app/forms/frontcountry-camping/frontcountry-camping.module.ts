import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontcountryCampingComponent } from './frontcountry-camping.component';
import { AdditionalVehiclesModule } from './sections/additional-vehicles/additional-vehicles.module';
import { CampingPartyNightsModule } from './sections/camping-party-nights/camping-party-nights.module';
import { OtherFrontcountryCampingRevenueModule } from './sections/other-frontcountry-camping-revenue/other-frontcountry-camping-revenue.module';
import { TextAreaModule } from 'src/app/shared/components/forms/text-area/text-area.module';

@NgModule({
  declarations: [FrontcountryCampingComponent],
  imports: [
    CommonModule,
    CampingPartyNightsModule,
    AdditionalVehiclesModule,
    OtherFrontcountryCampingRevenueModule,
    TextAreaModule,
  ],
  exports: [FrontcountryCampingComponent],
})
export class FrontcountryCampingModule {}
