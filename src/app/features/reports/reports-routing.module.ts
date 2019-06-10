import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChecklistComponent } from "./checklist/checklist.component";
import { SubsidaryLedgerReportComponent } from "./subsidary-ledger-report/subsidary-ledger-report.component";
import { ConsolidatedTrialBalanceComponent } from "./consolidated-trial-balance/consolidated-trial-balance.component";
import { TrialBalanceDetailComponent } from "./trial-balance-detail/trial-balance-detail.component";
import { BalanceSheetComponent } from "./balance-sheet/balance-sheet.component";
import { IncomeStatmentComponent } from "./income-statment/income-statment.component";
import { AccountsScheduleComponent } from "./accounts-schedule/accounts-schedule.component";
import { CostOfGoodsSoldComponent } from "./cost-of-goods-sold/cost-of-goods-sold.component";

const routes: Routes = [
  {
    path: "checklist",
    component: ChecklistComponent,
    data: {
      title: "Checklist",
      breadCrum: "Checklist",
      claim: "canViewChecklist"
    }
  },
  {
    path: "subsidaries",
    component: SubsidaryLedgerReportComponent,
    data: {
      title: "Subsidary ledger",
      breadCrum: "Subsidary",
      claim: "canViewSubsidaryLedger"
    }
  },
  {
    path: "consolidated-trial-balance",
    component: ConsolidatedTrialBalanceComponent,
    data: {
      title: "Consolidated trial balance",
      breadCrum: "Consolidated trial balance",
      claim: "canViewConsolidatedTrialBalance"
    }
  },
  {
    path: "trial-balance-detail",
    component: TrialBalanceDetailComponent,
    data: {
      title: "Trial balance detail",
      breadCrum: "Trial balance detail",
      claim: "canViewTrialalaceDetail"
    }
  },
  {
    path: "balance-sheet",
    component: BalanceSheetComponent,
    data: {
      title: "Balance sheet",
      breadCrum: "Balance sheet",
      claim: "canViewBalanceSheet"
    }
  },
  {
    path: "income-statement",
    component: IncomeStatmentComponent,
    data: {
      title: "Income statement",
      breadCrum: "Income statement",
      claim: "canViewIncomeStatementu"
    }
  },
  {
    path: "accounts-schedule",
    component: AccountsScheduleComponent,
    data: {
      title: "Accounts Schedule",
      breadCrum: "Account Schedule",
      claim: "canViewAccountSchedule"
    }
  },
  {
    path: "cost-of-goods-sold",
    component: CostOfGoodsSoldComponent,
    data: {
      title: "Cost of goods sold",
      breadCrum: "Cost of goods sold",
      claim: "canViewCostOfGoodsSold"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule {}
