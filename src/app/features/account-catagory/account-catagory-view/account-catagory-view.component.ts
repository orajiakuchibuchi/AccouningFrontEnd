import { Component, OnInit } from "@angular/core";
import { AccountCatagoryApiService } from "../account-catagory-api.service";
import { AccountCatagory } from "../account-catagory-domain";

@Component({
  selector: "app-account-catagory-view",
  templateUrl: "./account-catagory-view.component.html",
  styleUrls: ["./account-catagory-view.component.css"]
})
export class AccountCatagoryViewComponent implements OnInit {
  public data: any;
  public customAttributes: { class: string };
  public filterOptions: { type: string };
  public columnBluePrint = [
    {
      key: "Id",
      header: "Id",
      visible: true,
      width: "40",
      type: "number"
    },
    {
      key: "CatagoryName",
      header: "Catagory Name",
      visible: true,
      width: "100",
      type: "string"
    },
    {
      key: "AccountType",
      header: "Account Type",
      visible: true,
      width: "100",
      type: "string"
    }
  ];
  constructor(private accountCatagApi: AccountCatagoryApiService) {}

  ngOnInit() {
    this.accountCatagApi
      .getAccountCatagories()
      .subscribe((data: AccountCatagory[]) => {
        this.data = data;
      });
  }

  deleteCategory(data: any) {
    console.log(data);
  }
}
