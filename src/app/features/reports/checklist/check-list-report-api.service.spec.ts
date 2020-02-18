/** @format */

import { TestBed } from '@angular/core/testing';

import { CheckListReportApiService } from './check-list-report-api.service';
import { HttpClient } from '@angular/common/http';
import { AccountingApiService } from 'src/app/Services/accounting-api.service';

describe('CheckListReportApiService', () => {
    let httpClient: HttpClient;
    let accountingApiService: AccountingApiService;
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: CheckListReportApiService = new CheckListReportApiService(
            httpClient,
            accountingApiService
        );
        expect(service).toBeTruthy();
    });
});
