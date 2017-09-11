import { CreateOwnerComponent } from './create-owner/create-owner.component';
import { OwnersComponent } from './owners/owners.component';
import {Route} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {CreateLandComponent} from "./create-land/create-land.component";
import {TypesComponent} from "./types/types.component";
import {SubTypesComponent} from "./sub-types/sub-types.component";
import {LandsComponent} from "./lands/lands.component";
import {DistrictsComponent} from "./districts/districts.component";
import {CreateDistrictComponent} from "./create-district/create-district.component";
import {CreateTypeComponent} from "./create-type/create-type.component";
import {CreateSubTypeComponent} from "./create-sub-type/create-sub-type.component";
import {StatusComponent} from "./status/status.component";
import {CreateStatusComponent} from "./create-status/create-status.component";
import {PlanComponent} from "./plan/plan.component";
import {CreatePlanComponent} from "./create-plan/create-plan.component";
import {EditLandComponent} from "./edit-land/edit-land.component";
import {EditDistrictComponent} from "./edit-district/edit-district.component";
import {EditPlanComponent} from "./edit-plan/edit-plan.component";

export const routerConfig: Route[] = [

  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'createLand',
    component : CreateLandComponent
  },
  {
    path: 'types',
    component : TypesComponent
  },
  {
    path: 'createType',
    component : CreateTypeComponent
  },
  {
    path: 'subtypes',
    component : SubTypesComponent
  },
  {
    path: 'createSubType',
    component : CreateSubTypeComponent
  },
  {
    path: 'Lands',
    children : [
      {
        path : '',
        component : LandsComponent
      },
      {
        path : 'edit/:id',
        component : EditLandComponent
      }
    ]
  },
  {
    path: 'districts',
    children : [
      {
        path : '',
        component : DistrictsComponent
      },
      {
        path : 'edit/:id',
        component : EditDistrictComponent
      }
    ]
  },
  {
    path: 'createDistrict',
    component : CreateDistrictComponent
  },
  {
    path: 'status',
    component : StatusComponent
  },
  {
    path: 'createStatus',
    component : CreateStatusComponent
  },
  {
    path: 'owners',
    component : OwnersComponent
  },
  {
    path: 'createOwner',
    component: CreateOwnerComponent
  },
  {
    path: 'plans',
    children : [
      {
        path : '',
        component : PlanComponent
      },
      {
        path : 'edit/:id',
        component : EditPlanComponent
      }
    ]

  },
  {
    path: 'createPlan',
    component : CreatePlanComponent
  },

];
