import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CatalogType } from "../enums/catalog-type";

export class CatalogClass {
    catalogForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.catalogForm = formBuilder.group({
            name: ['', [Validators.required]],
            productType: [''],
            category: ['', [Validators.required]],
            brand: ['', [Validators.required]],
            landingPrice: ['', [Validators.required, Validators.maxLength(8)]],
            sellingPrice: ['', [Validators.required, Validators.maxLength(8)]],
            mrp: ['', [Validators.required, Validators.maxLength(8)]],
            taxRate: ['', [Validators.required]],
            barcode: ['', [Validators.required]],
            description: ['', [Validators.required]],
        })
    }
}

export interface CatalogModel {
    catalogCode: string;
    name: string;
    productType: CatalogType;
    category: string;
    brand: string;
    landingPrice: number;
    sellingPrice: number;
    mrp: number;
    taxRate: string;
    barcode: string;
    description: string;
}